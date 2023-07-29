from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, Team, User, db

team_routes = Blueprint('teams', __name__)
