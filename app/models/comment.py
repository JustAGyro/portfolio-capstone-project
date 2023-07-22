from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey

class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    team_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("teams.id")), nullable=False)
    comment_text = db.Column(db.String(240))

    user = relationship("User", back_populates="comments")
    team = relationship("Team", back_populates="comments")

    def to_dict(self):
        return {
            'id': self.id,
            "user_id": self.user_id,
            "team_id": self.team_id,
            "comment_text": self.comment_text,
        }
