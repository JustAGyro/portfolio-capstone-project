from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship
from sqlalchemy.schema import ForeignKey

class Pokemon(db.Model):
    __tablename__ = "pokemons"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    name = db.Column(db.String(30), nullable=False)
    nick_name = db.Column(db.String(30))
    gender = db.Column(db.String(30), nullable=False)
    shiny = db.Column(db.Boolean, nullable=False)
    type_one = db.Column(db.String(30), nullable=False)
    type_two = db.Column(db.String(30), nullable=False)
    tera_type = db.Column(db.String(30))
    item = db.Column(db.String(35))
    ability = db.Column(db.String(35), nullable=False)
    nature = db.Column(db.String(35), nullable=False)
    move_one = db.Column(db.String(35))
    move_two = db.Column(db.String(35))
    move_three = db.Column(db.String(35))
    move_four = db.Column(db.String(35))
    base_hp = db.Column(db.Integer, nullable=False, default=1)
    base_atk = db.Column(db.Integer, nullable=False, default=1)
    base_def = db.Column(db.Integer, nullable=False, default=1)
    base_sp_atk = db.Column(db.Integer, nullable=False, default=1)
    base_sp_def = db.Column(db.Integer, nullable=False, default=1)
    base_speed = db.Column(db.Integer, nullable=False, default=1)
    ev_hp = db.Column(db.Integer, nullable=False, default=1)
    ev_atk = db.Column(db.Integer, nullable=False, default=1)
    ev_def = db.Column(db.Integer, nullable=False, default=1)
    ev_sp_atk = db.Column(db.Integer, nullable=False, default=1)
    ev_sp_def = db.Column(db.Integer, nullable=False, default=1)
    ev_speed = db.Column(db.Integer, nullable=False, default=1)
    iv_hp = db.Column(db.Integer, nullable=False, default=1)
    iv_atk = db.Column(db.Integer, nullable=False, default=1)
    iv_def = db.Column(db.Integer, nullable=False, default=1)
    iv_sp_atk = db.Column(db.Integer, nullable=False, default=1)
    iv_sp_def = db.Column(db.Integer, nullable=False, default=1)
    iv_speed = db.Column(db.Integer, nullable=False, default=1)

    user = relationship("User", back_populates="pokemons")

    def to_dict(self):
        return {
            'id': self.id,
            "user_id": self.user_id,
            "name": self.name,
            "nick_name": self.nick_name,
            "gender": self.gender,
            "shiny": self.shiny,
            "type_one": self.type_one,
            "type_two": self.type_two,
            "tera_type": self.tera_type,
            "item": self.item,
            "ability": self.ability,
            "nature": self.nature,
            "move_one": self.move_one,
            "move_two": self.move_two,
            "move_three": self.move_three,
            "move_four": self.move_four,
            "base_hp": self.base_hp,
            "base_atk": self.base_atk,
            "base_def": self.base_def,
            "base_sp_atk": self.base_sp_atk,
            "base_sp_def": self.base_sp_def,
            "base_speed": self.base_speed,
            "ev_hp": self.ev_hp,
            "ev_atk": self.ev_atk,
            "ev_def": self.ev_def,
            "ev_sp_atk": self.ev_sp_atk,
            "ev_sp_def": self.ev_sp_def,
            "ev_speed": self.ev_speed,
            "iv_hp": self.iv_hp,
            "iv_atk": self.iv_atk,
            "iv_def": self.iv_def,
            "iv_sp_atk": self.iv_sp_atk,
            "iv_sp_def": self.iv_sp_def,
            "iv_speed": self.iv_speed,
        }
