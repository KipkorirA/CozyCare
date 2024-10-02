from datetime import datetime
from . import db  # Import the database instance from your application

class Feedback(db.Model):
    __tablename__ = 'feedback'  # Define the table name in the database

    id = db.Column(db.Integer, primary_key=True)  # Primary key for the feedback entry
    name = db.Column(db.String(100), nullable=True)  # Optional name field
    email = db.Column(db.String(100), nullable=True)  # Optional email field
    rating = db.Column(db.Integer, nullable=False)  # Required rating field (1-5)
    feedback_text = db.Column(db.Text, nullable=False)  # Required feedback text field
    feedback_file = db.Column(db.String(255), nullable=True)  # Optional field for file path of the uploaded image
    image_url = db.Column(db.String(255), nullable=True)  # New field for the image URL
    created_at = db.Column(db.DateTime, default=datetime.utcnow)  # Automatically set the created timestamp

    def __repr__(self):
        return f'<Feedback {self.id}, Rating: {self.rating}>'
