from app.models import db, TeamMember, environment, SCHEMA
from sqlalchemy.sql import text

def seed_team_members():
    member_1 = TeamMember(
        team_id=1, pokemon_id=1)
    member_2 = TeamMember(
        team_id=1, pokemon_id=2)
    member_3 = TeamMember(
        team_id=1, pokemon_id=3)
    member_4 = TeamMember(
        team_id=1, pokemon_id=4)
    member_5 = TeamMember(
        team_id=1, pokemon_id=5)
    member_6 = TeamMember(
        team_id=1, pokemon_id=6)
    member_7 = TeamMember(
        team_id=2, pokemon_id=7)
    member_8 = TeamMember(
        team_id=2, pokemon_id=8)
    member_9 = TeamMember(
        team_id=2, pokemon_id=9)
    member_10 = TeamMember(
        team_id=2, pokemon_id=10)
    member_11 = TeamMember(
        team_id=2, pokemon_id=11)
    member_12 = TeamMember(
        team_id=2, pokemon_id=12)
    member_13 = TeamMember(
        team_id=3, pokemon_id=13)
    member_14 = TeamMember(
        team_id=3, pokemon_id=14)
    member_15 = TeamMember(
        team_id=3, pokemon_id=15)
    member_16 = TeamMember(
        team_id=3, pokemon_id=16)
    member_17 = TeamMember(
        team_id=3, pokemon_id=17)
    member_18 = TeamMember(
        team_id=3, pokemon_id=18)
    member_19 = TeamMember(
        team_id=4, pokemon_id=19)
    member_20 = TeamMember(
        team_id=4, pokemon_id=20)
    member_21 = TeamMember(
        team_id=4, pokemon_id=21)
    member_22 = TeamMember(
        team_id=4, pokemon_id=22)
    member_23 = TeamMember(
        team_id=4, pokemon_id=23)
    member_24 = TeamMember(
        team_id=4, pokemon_id=24)
    member_25 = TeamMember(
        team_id=5, pokemon_id=25)
    member_26 = TeamMember(
        team_id=5, pokemon_id=26)
    member_27 = TeamMember(
        team_id=5, pokemon_id=27)
    member_28 = TeamMember(
        team_id=5, pokemon_id=28)
    member_29 = TeamMember(
        team_id=5, pokemon_id=29)
    member_30 = TeamMember(
        team_id=5, pokemon_id=30)
    member_31 = TeamMember(
        team_id=6, pokemon_id=31)
    member_32 = TeamMember(
        team_id=6, pokemon_id=32)
    member_33 = TeamMember(
        team_id=6, pokemon_id=33)
    member_34 = TeamMember(
        team_id=6, pokemon_id=34)
    member_35 = TeamMember(
        team_id=6, pokemon_id=35)
    member_36 = TeamMember(
        team_id=6, pokemon_id=36)

    db.session.add(member_1)
    db.session.add(member_2)
    db.session.add(member_3)
    db.session.add(member_4)
    db.session.add(member_5)
    db.session.add(member_6)
    db.session.add(member_7)
    db.session.add(member_8)
    db.session.add(member_9)
    db.session.add(member_10)
    db.session.add(member_11)
    db.session.add(member_12)
    db.session.add(member_13)
    db.session.add(member_14)
    db.session.add(member_15)
    db.session.add(member_16)
    db.session.add(member_17)
    db.session.add(member_18)
    db.session.add(member_19)
    db.session.add(member_20)
    db.session.add(member_21)
    db.session.add(member_22)
    db.session.add(member_23)
    db.session.add(member_24)
    db.session.add(member_25)
    db.session.add(member_26)
    db.session.add(member_27)
    db.session.add(member_28)
    db.session.add(member_29)
    db.session.add(member_30)
    db.session.add(member_31)
    db.session.add(member_32)
    db.session.add(member_33)
    db.session.add(member_34)
    db.session.add(member_35)
    db.session.add(member_36)




    db.session.commit()

def undo_team_members():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.teammembers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM teammembers"))

    db.session.commit()
