from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Like, User, Team, db

like_routes = Blueprint('likes', __name__)

@like_routes('/current')
@login_required
def get_user_likes():
    user_id = current_user.id
    likes = Like.query.filter(Like.user_id == user_id).all()

    like_list = [like.to_dict() for like in likes]

    return jsonify(like_list)

@like_routes('/all')
@login_required
def get_likes():
    likes = Like.query.all()
    likes_list = [like.to_dict() for like in likes]

    return jsonify(likes_list)

@like_routes('/new', methods=['POST'])
@login_required
def new_like():
    user_id = current_user.id

    data = request.get_json()
    team_id = data.get('teamId')

    new_like = Like(
        user_id = user_id,
        team_id = team_id,
    )

    db.session.add(new_like)
    db.session.commit()

    return jsonify(new_like.to_dict())

@like_routes('/<id>/delete', methods=['DELETE'])
@login_required
def delete_like(id):
    like = Like.query.get(id)
    if not like:
        return {'res': 'No Like Found'}
    if current_user.id == like.user_id:
        db.session.delete(like)
        db.session.commit()
        return {'res': 'Like Successfully Deleted'}
