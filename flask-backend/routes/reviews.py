# routes/reviews.py
from flask import Blueprint, render_template, jsonify, request
from models.feedback import Feedback
from app import db

# Define the blueprint for reviews
reviews_bp = Blueprint('reviews', __name__)

# Route to display all reviews
@reviews_bp.route('/reviews', methods=['GET'])
def view_reviews():
    try:
        # Fetch all feedback entries
        feedbacks = Feedback.query.all()

        # Prepare feedback data for rendering
        reviews = [
            {
                "id": feedback.id,  # Add an ID to the review for deletion
                "name": feedback.name or "Anonymous",
                "email": feedback.email,
                "rating": feedback.rating,
                "feedback_text": feedback.feedback_text,
                "feedback_file": feedback.feedback_file,
                "image_url": feedback.image_url,  # Include the image URL
                "created_at": feedback.created_at.strftime('%Y-%m-%d')
            }
            for feedback in feedbacks
        ]

        return render_template('reviews.html', reviews=reviews)
    except Exception as e:
        return jsonify({"message": "Error retrieving reviews: " + str(e)}), 500

# Route to delete a review
@reviews_bp.route('/reviews/delete/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    try:
        feedback = Feedback.query.get(review_id)
        if feedback:
            db.session.delete(feedback)
            db.session.commit()
            return jsonify({"message": "Review deleted successfully!"}), 200
        else:
            return jsonify({"message": "Review not found!"}), 404
    except Exception as e:
        return jsonify({"message": "Error deleting review: " + str(e)}), 500
