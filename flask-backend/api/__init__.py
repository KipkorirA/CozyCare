from flask import Blueprint

# Create the API blueprint
api = Blueprint('api', __name__)

# Import all the route handlers
from .controllers import submit_feedback, get_testimonials  # Explicitly import the route functions
