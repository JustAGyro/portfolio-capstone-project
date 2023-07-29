from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, Team, User, db

team_routes = Blueprint('teams', __name__)

@team_routes('/current')
@login_required
def get_user_teams():
    user_id = current_user.id
    teams = Team.query.filter(Team.user_id == user_id).all()
    teams_list = [team.to_dict() for team in teams]

    return jsonify(teams_list)

@team_routes('/all')
@login_required
def get_teams():
    teams = Team.query.all()
    teams_list = [team.to_dict() for team in teams]

    return jsonify(teams_list)

@team_routes('/new',methods=['POST'])
@login_required
def create_team():
    data = request.get_json()
    user_id = current_user.id
    team_name = data.get('teamName')
    team_summary = data.get('teamSummary')

    new_team = Team(
        user_id = user_id,
        team_name = team_name,
        team_summary = team_summary
    )

    db.session.add(new_team)
    db.session.commit()

    return jsonify(new_team.to_dict())

@team_routes('/<id>/edit', methods=['PUT'])
@login_required
def edit_team(id):
    team = Team.query.get(id)

    data = request.get_json()
    team_name = data.get('teamName')
    team_summary = data.get('teamSummary')

    if team:
        team.team_name = team_name
        team.team_summary = team_summary

        db.session.commit()

        return jsonify(team.to_dict())

    else:
        return {'res': 'No Team Found'}

@team_routes('/<id>/delete', methods=['DELETE'])
@login_required
def delete_team(id):
    team = Team.query.get(id)

    if not team:
        return {'res': 'No Team Found'}
    if current_user.id == team.user_id:
        db.session.delete(team)
        db.session.commit()
        return {'res': 'Team Successfully Deleted'}
