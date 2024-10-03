from flask import Flask, render_template, send_from_directory
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv

# Initialize the database and migrate objects
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Load environment variables from .env file
    load_dotenv()

    # CORS configuration
    CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins for API routes

    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'sqlite:///site.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['UPLOAD_FOLDER'] = 'uploads'  # Your upload folder path
    app.config['STATIC_URL_PATH'] = '/static'

    # Initialize the database and migrate with the app
    db.init_app(app)
    migrate.init_app(app, db)

    # Import models after initializing db
    from models.models import Feedback, Subscription  # Ensure these models exist

    # Register blueprints
    from routes.reviews import reviews_bp
    app.register_blueprint(reviews_bp)

    from routes.subscriptions import subscriptions_bp
    app.register_blueprint(subscriptions_bp)

    from api.controllers import api  # Correct import of the API blueprint
    app.register_blueprint(api, url_prefix='/api')  # Register the API blueprint with the '/api' prefix

    # Route for home page
    @app.route('/')
    def home():
        return render_template('home.html')  # This will render home.html

    # Serve uploaded images
    @app.route('/uploads/<path:filename>')
    def uploaded_file(filename):
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
