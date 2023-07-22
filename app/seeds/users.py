from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    sharpy = User(
        username='Sharpy', email='sharpy@aa.io', password='password')
    kodred = User(
        username='Kodred', email='kodred@aa.io', password='password')
    babytruck = User(
        username='Baby Truck', email='babytruck@aa.io', password='password')
    bolillo = User(
        username='Bolillo', email='bolillo@aa.io', password='password')
    mordion = User(
        username='Mordion', email='mordion@aa.io', password='password')

    db.session.add(demo)
    db.session.add(sharpy)
    db.session.add(kodred)
    db.session.add(babytruck)
    db.session.add(bolillo)
    db.session.add(mordion)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
