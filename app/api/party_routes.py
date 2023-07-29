from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, Team, TeamMember, db

party_routes = Blueprint('party', __name__)
