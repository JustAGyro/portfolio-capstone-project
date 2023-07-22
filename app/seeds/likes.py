from app.models import db, Like, environment, SCHEMA
from sqlalchemy.sql import text

def seed_likes():
    like_one = Like(
        user_id=1, team_id=2)
    like_two = Like(
        user_id=2, team_id=3)
    like_three = Like(
        user_id=3, team_id=4)
    like_four = Like(
        user_id=4, team_id=5)
    like_five = Like(
        user_id=5, team_id=6)
    like_six = Like(
        user_id=6, team_id=1)

    db.session.add(like_one)
    db.session.add(like_two)
    db.session.add(like_three)
    db.session.add(like_four)
    db.session.add(like_five)
    db.session.add(like_six)
    db.session.commit()

def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
