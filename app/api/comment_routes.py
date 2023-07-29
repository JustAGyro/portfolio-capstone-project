from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Comment, Team, db

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/current')
@login_required
def get_user_comments():
    user_id = current_user.id
    comments = Comment.query.filter(Comment.user_id == user_id).all()
    comment_list = [comment.to_dict() for comment in comments]

    return jsonify(comment_list)

@comment_routes.route('/all')
@login_required
def get_comments():
    comments = Comment.query.all()
    comments_list = [comment.to_dict() for comment in comments]

    return jsonify(comments_list)

@comment_routes.route('/new', methods=['POST'])
@login_required
def create_comment():
    user_id = current_user.id

    data = request.get_json()
    team_id = data.get('teamId')
    comment_text = data.get('commentText')

    new_comment = Comment(
        user_id = user_id,
        team_id = team_id,
        comment_text = comment_text
    )

    db.session.add(new_comment)
    db.session.commit()

    return jsonify(new_comment.to_dict())

@comment_routes.route('/<id>/edit', methods=['PUT'])
@login_required
def edit_comment(id):
    comment = Comment.query.get(id)

    data = request.get_json()
    comment_text = data.get('commentText')

    if comment:
        comment.comment_text = comment_text
        db.session.commit()

        return jsonify(comment.to_dict())

    else:
        return {'res': 'No Comment Found'}

@comment_routes.route('/<id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    if not comment:
        return {'res': 'No Comment Found'}
    if current_user.id == comment.user_id:
        db.session.delete(comment)
        db.session.commit()
        return {'res': 'Comment Successfully Deleted'}
