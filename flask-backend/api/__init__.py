from flask import Blueprint

# Define API blueprint
api = Blueprint('api', __name__)

# Import routes after creating the blueprint to avoid circular imports
from .controllers import *
