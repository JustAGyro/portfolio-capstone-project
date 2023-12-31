from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey

class Party(db.Model):
    __tablename__ = "parties"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("teams.id")), nullable=False)
    pokemon_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("pokemons.id")), nullable=False)

    team = relationship("Team", back_populates="party")
    pokemon = relationship("Pokemon", back_populates="party")

    def to_dict(self):
        return {
            'id': self.id,
            "team_id": self.team_id,
            "pokemon_id": self.pokemon_id,
        }
