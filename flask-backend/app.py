from flask import Flask, jsonify, render_template, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
import os
import logging
from models import db, Feedback  # Import models
from routes.reviews import reviews_bp  # Import the reviews blueprint
from werkzeug.utils import safe_join

# Initialize the logging
logging.basicConfig(level=logging.INFO)

# Initialize the database migration tool
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Enable CORS to allow cross-origin requests from React frontend
    CORS(app)

    # Load configuration
    app.config.from_object('config.Config')

    # Initialize database and migration tool
    db.init_app(app)
    migrate.init_app(app, db)

    # Ensure the upload folder exists
    if not os.path.exists('uploads'):
        os.makedirs('uploads')

    # Import and register API blueprint after the app is created
    from api.controllers import api as api_blueprint  # Import the API blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')  # Register the API blueprint

    # Register the reviews blueprint
    app.register_blueprint(reviews_bp)  # Register the reviews blueprint

    return app

# Create the app instance
app = create_app()

# Define the home route
@app.route('/')
def home():
    with app.app_context():  # Ensure the app context is available
        feedbacks = Feedback.query.all()  # Query the feedbacks
        feedback_list = [
            (feedback.id, feedback.name or "Anonymous", feedback.rating, feedback.feedback_text) 
            for feedback in feedbacks
        ]

    return render_template("home.html", feedback_list=feedback_list)  # Use a separate template file

# Serve uploaded files from the uploads directory
@app.route('/uploads/<path:filename>', methods=['GET'])
def uploaded_file(filename):
    # Securely send files from the uploads directory
    return send_from_directory('uploads', filename)

# Error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not Found"}), 404

@app.errorhandler(500)
def internal_error(error):
    logging.error(f"Internal Server Error: {error}")
    return jsonify({"error": "Internal Server Error"}), 500

if __name__ == "__main__":
    app.run(debug=True)
