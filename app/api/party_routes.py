from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, Team, Party, db

party_routes = Blueprint('party', __name__)

@party_routes('/current')
@login_required
def get_user_parties():
    user_id = current_user.id
    parties = Party.query.filter(Party.user_id == user_id).all()
    parties_list = [party.to_dict() for party in parties]

    return jsonify(parties_list)

@party_routes('/all')
@login_required
def get_parties():
    parties = Party.query.all()
    parties_list = [party.to_dict() for party in parties]

    return jsonify(parties_list)

@party_routes('/new', methods=['POST'])
@login_required
def create_party():
    data = request.get_json()
    team_id = data.get('teamId')
    pokemon_id = data.get('pokemonId')

    new_party = Party(
        team_id = team_id,
        pokemon_id = pokemon_id
    )

    db.session.add(new_party)
    db.session.commit()

    return jsonify(new_party.to_dict())

@party_routes('/<id>/delete', methods=['DELETE'])
@login_required
def delete_party(id):
    party = Party.query.get(id)
    if not party:
        return {'res': 'No Party Member Found'}
    else:
        db.session.delete(party)
        db.session.commit()
        return {'res': 'Party Member Successfully Deleted'}
