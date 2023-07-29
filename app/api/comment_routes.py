from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Comment, Team, db

comment_routes = Blueprint('comments', __name__)
