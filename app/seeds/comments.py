from app.models import db, Comment, environment, SCHEMA
from sqlalchemy.sql import text

def seed_comments():
    comm_one = Comment(
        user_id=1, team_id=2, comment_text="This team is really interesting!"
    )
    comm_two = Comment(
        user_id=1, team_id=3, comment_text="This team is actually super cool!"
    )
    comm_three = Comment(
        user_id=2, team_id=1, comment_text="This team is very nice!"
    )
    comm_four = Comment(
        user_id=2, team_id=3, comment_text="This team is splendid"
    )
    comm_five = Comment(
        user_id=3, team_id=1, comment_text="This team makes me curious"
    )
    comm_six = Comment(
        user_id=3, team_id=2, comment_text="I really like this team"
    )
    comm_seven = Comment(
        user_id=4, team_id=5, comment_text="I think this team is extraordinary"
    )
    comm_eight = Comment(
        user_id=4, team_id=6, comment_text="I am going to use this team!"
    )
    comm_nine = Comment(
        user_id=5, team_id=4, comment_text="I've seen this team in the wild, its really good!"
    )
    comm_ten = Comment(
        user_id=5, team_id=6, comment_text="This is similar to my team!"
    )
    comm_eleven = Comment(
        user_id=6, team_id=4, comment_text="I would maybe switch out your last pokemon and then it will be really good!"
    )
    comm_twelve = Comment(
        user_id=6, team_id=5, comment_text="This team has massive potential"
    )

    db.session.add(comm_one)
    db.session.add(comm_two)
    db.session.add(comm_three)
    db.session.add(comm_four)
    db.session.add(comm_five)
    db.session.add(comm_six)
    db.session.add(comm_seven)
    db.session.add(comm_eight)
    db.session.add(comm_nine)
    db.session.add(comm_ten)
    db.session.add(comm_eleven)
    db.session.add(comm_twelve)
    db.session.commit()


def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
