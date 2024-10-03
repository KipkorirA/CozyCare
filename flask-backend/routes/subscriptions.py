from flask import Blueprint, request, jsonify
from app import db  # Correct import statement for db
from models.models import Subscription
import logging
import re

# Configure logging
logging.basicConfig(level=logging.INFO)

# Define the subscriptions blueprint
subscriptions_bp = Blueprint('subscriptions', __name__)

def is_valid_email(email):
    """Validate the email format."""
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

@subscriptions_bp.route('/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()

        # Extract fields from the request
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
        phone_number = data.get('phoneNumber')
        preferred_contact = data.get('preferredContact')
        interests = ','.join(data.get('interests', []))  # Join interests into a comma-separated string

        # Validate the input fields
        if not first_name or not last_name:
            return jsonify({'message': 'First name and last name are required.'}), 400
        if not email or not is_valid_email(email):
            return jsonify({'message': 'Invalid email address.'}), 400
        
        # Validate preferred contact method
        if preferred_contact not in ['email', 'sms']:
            return jsonify({'message': 'Preferred contact must be either email or sms.'}), 400

        # Check if the email already exists in the subscriptions
        existing_subscription = Subscription.query.filter_by(email=email).first()
        if existing_subscription:
            return jsonify({'message': 'This email is already subscribed.'}), 400

        # Create a new subscription instance
        new_subscription = Subscription(
            first_name=first_name.strip(),
            last_name=last_name.strip(),
            email=email.strip(),
            phone_number=phone_number.strip() if phone_number else None,
            preferred_contact=preferred_contact,
            interests=interests
        )

        # Add to the session and commit
        db.session.add(new_subscription)
        db.session.commit()

        return jsonify({'message': 'Subscription successful!'}), 201
    except Exception as e:
        logging.error("Error processing subscription: %s", str(e))
        return jsonify({"message": "Error processing subscription: " + str(e)}), 500

@subscriptions_bp.route('/subscriptions', methods=['GET'])
def get_subscriptions():
    try:
        subscriptions = Subscription.query.all()
        subscriber_list = [
            {
                "id": sub.id,
                "first_name": sub.first_name,
                "last_name": sub.last_name,
                "email": sub.email,
                "phone_number": sub.phone_number,
                "preferred_contact": sub.preferred_contact,
                "created_at": sub.created_at.strftime('%Y-%m-%d')
            }
            for sub in subscriptions
        ]
        return jsonify(subscriber_list), 200
    except Exception as e:
        logging.error("Error retrieving subscriptions: %s", str(e))
        return jsonify({"message": "Error retrieving subscriptions: " + str(e)}), 500
