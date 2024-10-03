from app import db  # Import your db instance
from flask import Flask
import os

# Create a Flask app context
app = Flask(__name__)

# Configure your app
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'sqlite:///site.db')  # Use your actual database URI here
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db.init_app(app)

with app.app_context():
    # Get the available tables
    available_tables = db.engine.table_names()
    print("Available Tables:")
    for table in available_tables:
        print(f"- {table}")
