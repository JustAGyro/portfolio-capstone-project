from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, User, db

pokemon_routes = Blueprint('pokemon', __name__)
