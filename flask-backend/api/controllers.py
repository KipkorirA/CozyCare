from flask import Blueprint, request, jsonify, current_app
from models.models import Feedback
import os
from datetime import datetime
import logging
import re
from werkzeug.utils import secure_filename

# Configure logging
logging.basicConfig(level=logging.INFO)

# Define API blueprint
api = Blueprint('api', __name__)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

def allowed_file(filename):
    """Check if the uploaded file has an allowed extension."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_file(file):
    """Save the uploaded file to the designated folder."""
    if file and allowed_file(file.filename):
        # Create a secure filename and save the file
        filename = secure_filename(f"{datetime.utcnow().strftime('%Y%m%d%H%M%S')}_{file.filename}")
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        return file_path
    return None

def is_valid_email(email):
    """Validate the email format."""
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

@api.route('/feedback', methods=['POST'])
def submit_feedback():
    from app import db  # Import here to avoid circular imports

    try:
        # Ensure the upload folder exists
        upload_folder = current_app.config['UPLOAD_FOLDER']
        os.makedirs(upload_folder, exist_ok=True)

        # Get form data
        name = request.form.get('name', 'Anonymous').strip()
        email = request.form.get('email', '').strip()
        rating = request.form.get('rating')
        feedback_text = request.form.get('feedback').strip()
        file = request.files.get('file')

        # Log incoming data for debugging
        logging.info("Incoming data: %s", request.form)
        logging.info("Uploaded file: %s", file)

        # Input validation
        if not rating or not feedback_text:
            return jsonify({"message": "Rating and feedback text are required!"}), 400

        try:
            rating = int(rating)
        except ValueError:
            return jsonify({"message": "Rating must be an integer."}), 400

        if not (1 <= rating <= 5):
            return jsonify({"message": "Rating must be between 1 and 5."}), 400

        if email and not is_valid_email(email):
            return jsonify({"message": "Invalid email format."}), 400

        feedback_file_path = save_file(file)

        if file and feedback_file_path is None:
            return jsonify({"message": "File type is not allowed!"}), 400

        # Create a Feedback object and save it to the database
        feedback = Feedback(
            name=name,
            email=email,
            rating=rating,
            feedback_text=feedback_text,
            feedback_file=feedback_file_path
        )
        db.session.add(feedback)
        db.session.commit()

        return jsonify({"message": "Feedback submitted successfully!"}), 201
    except Exception as e:
        logging.exception("Error submitting feedback: %s", str(e))  # Log the full traceback
        return jsonify({"message": "Error submitting feedback."}), 500

@api.route('/testimonials', methods=['GET'])
def get_testimonials():
    from app import db  # Import here to avoid circular imports

    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)

        if page < 1 or per_page < 1:
            return jsonify({"message": "Page and per_page must be positive integers greater than 0."}), 400

        # Query to fetch testimonials with a rating of 4 and above
        feedbacks = Feedback.query.filter(Feedback.rating >= 4).paginate(page=page, per_page=per_page, error_out=False)

        # Construct the testimonials list
        testimonials = [
            {
                "text": feedback.feedback_text,
                "author": feedback.name or "Anonymous",  # Use "Anonymous" if name is not provided
                "rating": feedback.rating,
                "created_at": feedback.created_at.strftime('%Y-%m-%d'),
                # Construct the image URL based on the uploaded file path
                "image_url": f"/uploads/{os.path.basename(feedback.feedback_file)}" if feedback.feedback_file else None
            }
            for feedback in feedbacks.items
        ]

        if not testimonials:
            return jsonify({"message": "No testimonials available."}), 204

        return jsonify(testimonials), 200
    except Exception as e:
        logging.exception("Error retrieving testimonials: %s", str(e))  # Log the full traceback
        return jsonify({"message": "Error retrieving testimonials."}), 500
