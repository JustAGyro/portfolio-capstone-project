from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey

class Team(db.Model):
    __tablename__ = "teams"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    team_name = db.Column(db.String)
    team_summary = db.Column(db.String)

    user = relationship("User", back_populates="teams")
    comments = relationship("Comment",back_populates="team", cascade="all, delete-orphan")
    party = relationship("Party", back_populates="team", cascade="all, delete-orphan")
    likes = relationship("Like", back_populates="team", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            "user_id": self.user_id,
            "team_name": self.team_name,
            "team_summary": self.team_summary,
        }
