from flask.cli import AppGroup
from .users import seed_users, undo_users
from .comments import seed_comments, undo_comments
from .likes import seed_likes, undo_likes
from .pokemons import seed_pokemons, undo_pokemons
from .teams import seed_teams, undo_teams
from .parties import seed_party, undo_party


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_teams()
        undo_pokemons()
        undo_comments()
        undo_likes()
        undo_party
    seed_users()
    seed_pokemons()
    seed_teams()
    seed_comments()
    seed_likes()
    seed_party()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_teams()
    undo_pokemons()
    undo_comments()
    undo_likes()
    undo_party()
    # Add other undo functions here
