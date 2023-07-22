from app.models import db, Pokemon, environment, SCHEMA
from sqlalchemy.sql import text

def seed_likes():
    poke_one = Pokemon(
        user_id=1,poke_dex=1,name="Bulbasaur",nick_name="Bulba",
        gender="Male",shiny=True,type_one="Grass",tera_type="Fire",
        ability="",nature="",move_one="",move_two="",
        move_three="",move_four="",base_hp=10,base_atk=10,
        base_def=10,base_sp_atk=10,base_sp_def=10,base_speed=10,
        ev_hp=10,ev_atk=10,ev_def=10,ev_sp_atk=10,ev_sp_def=10,ev_speed=10,
        iv_hp=25,iv_atk=30,iv_def=29,iv_sp_atk=30,iv_sp_def=31,iv_speed=31
    )


    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
