from flask_sqlalchemy import SQLAlchemy

# Create the SQLAlchemy instance
db = SQLAlchemy()

# Import models here to make them available when importing the models package
from .feedback import Feedback  # Import your models after db is defined
