from flask import Blueprint, jsonify,request
from flask_login import login_required, current_user
from app.models import Pokemon, User, db

pokemon_routes = Blueprint('pokemon', __name__)

@pokemon_routes('/current')
@login_required
def get_user_pokemon():
    user_id = current_user.id
    pokemons = Pokemon.query.filter(Pokemon.user_id == user_id).all()
    pokemon_list = [pokemon.to_dict() for pokemon in pokemons]

    return jsonify(pokemon_list)

@pokemon_routes('/all')
@login_required
def get_pokemon():
    pokemons = Pokemon.query.all()
    pokemon_list = [pokemon.to_dict() for pokemon in pokemons]

    return jsonify(pokemon_list)

@pokemon_routes('/new', methods=['POST'])
@login_required
def create_pokemon():
    user_id = current_user.id

    data = request.get_json()
    poke_dex = data.get('pokeDex')
    name = data.get('name')
    nick_name = data.get('nickName')
    gender = data.get('gender')
    shiny = data.get('shiny')
    type_one = data.get('typeOne')
    type_two = data.get('typeTwo')
    tera_type = data.get('teraType')
    item = data.get('item')
    ability = data.get('ability')
    nature = data.get('nature')
    move_one = data.get('moveOne')
    move_two = data.get('moveTwo')
    move_three = data.get('moveThree')
    move_four = data.get('moveFour')
    base_hp = data.get('baseHp')
    base_atk = data.get('baseAtk')
    base_def = data.get('baseDef')
    base_sp_atk = data.get('baseSpAtk')
    base_sp_def = data.get('baseSpDef')
    base_speed = data.get('baseSpeed')
    ev_hp = data.get('evHp')
    ev_atk = data.get('evAtk')
    ev_def = data.get('evDef')
    ev_sp_atk = data.get('evSpAtk')
    ev_sp_def = data.get('evSpDef')
    ev_speed = data.get('evSpeed')
    iv_hp = data.get('ivHp')
    iv_atk = data.get('ivAtk')
    iv_def = data.get('ivDef')
    iv_sp_atk = data.get('ivSpAtk')
    iv_sp_def = data.get('ivSpDef')
    iv_speed = data.get('ivSpeed')

    new_pokemon = Pokemon(
        poke_dex = poke_dex,
        name = name,
        nick_name = nick_name,
        gender = gender,
        shiny = shiny,
        type_one = type_one,
        type_two = type_two,
        tera_type = tera_type,
        item = item,
        ability = ability,
        nature = nature,
        move_one = move_one,
        move_two = move_two,
        move_three = move_three,
        move_four = move_four,
        base_hp = base_hp,
        base_atk = base_atk,
        base_def = base_def,
        base_sp_atk = base_sp_atk,
        base_sp_def = base_sp_def,
        base_speed = base_speed,
        ev_hp = ev_hp,
        ev_atk = ev_atk,
        ev_def = ev_def,
        ev_sp_atk = ev_sp_atk,
        ev_sp_def = ev_sp_def,
        ev_speed = ev_speed,
        iv_hp = iv_hp,
        iv_atk = iv_atk,
        iv_def = iv_def,
        iv_sp_atk = iv_sp_atk,
        iv_sp_def = iv_sp_def,
        iv_speed = iv_speed,
    )

    db.session.add(new_pokemon)
    db.session.commit()

    return jsonify(new_pokemon.to_dict())

@pokemon_routes('/<id>/edit', methods=['PUT'])
@login_required
def edit_pokemon(id):
    pokemon = Pokemon.query.get(id)


    data = request.get_json()
    poke_dex = data.get('pokeDex')
    name = data.get('name')
    nick_name = data.get('nickName')
    gender = data.get('gender')
    shiny = data.get('shiny')
    type_one = data.get('typeOne')
    type_two = data.get('typeTwo')
    tera_type = data.get('teraType')
    item = data.get('item')
    ability = data.get('ability')
    nature = data.get('nature')
    move_one = data.get('moveOne')
    move_two = data.get('moveTwo')
    move_three = data.get('moveThree')
    move_four = data.get('moveFour')
    base_hp = data.get('baseHp')
    base_atk = data.get('baseAtk')
    base_def = data.get('baseDef')
    base_sp_atk = data.get('baseSpAtk')
    base_sp_def = data.get('baseSpDef')
    base_speed = data.get('baseSpeed')
    ev_hp = data.get('evHp')
    ev_atk = data.get('evAtk')
    ev_def = data.get('evDef')
    ev_sp_atk = data.get('evSpAtk')
    ev_sp_def = data.get('evSpDef')
    ev_speed = data.get('evSpeed')
    iv_hp = data.get('ivHp')
    iv_atk = data.get('ivAtk')
    iv_def = data.get('ivDef')
    iv_sp_atk = data.get('ivSpAtk')
    iv_sp_def = data.get('ivSpDef')
    iv_speed = data.get('ivSpeed')

    if pokemon:
        poke_dex = poke_dex
        name = name
        nick_name = nick_name
        gender = gender
        shiny = shiny
        type_one = type_one
        type_two = type_two
        tera_type = tera_type
        item = item
        ability = ability
        nature = nature
        move_one = move_one
        move_two = move_two
        move_three = move_three
        move_four = move_four
        base_hp = base_hp
        base_atk = base_atk
        base_def = base_def
        base_sp_atk = base_sp_atk
        base_sp_def = base_sp_def
        base_speed = base_speed
        ev_hp = ev_hp
        ev_atk = ev_atk
        ev_def = ev_def
        ev_sp_atk = ev_sp_atk
        ev_sp_def = ev_sp_def
        ev_speed = ev_speed
        iv_hp = iv_hp
        iv_atk = iv_atk
        iv_def = iv_def
        iv_sp_atk = iv_sp_atk
        iv_sp_def = iv_sp_def
        iv_speed = iv_speed

        db.session.commit()

        return jsonify(pokemon.to_dict())
    else:
        return {'res': 'No Pokemon Found'}


@pokemon_routes('<id>/delete', methods=['DELETE'])
@login_required
def delete_pokemon(id):
    pokemon = Pokemon.query.get(id)
    if not pokemon:
        return {'res': 'No Pokemon Found'}
    if current_user.id == pokemon.user_id:
        db.session.delete(pokemon)
        db.session.commit()
        return {'res': 'Pokemon Successfully Deleted'}
