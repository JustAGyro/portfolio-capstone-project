from app.models import db, Pokemon, environment, SCHEMA
from sqlalchemy.sql import text

def seed_pokemons():
    poke_1 = Pokemon(
        user_id=1, poke_dex=1, name="Bulbasaur", nick_name="Bulba",
        gender="Male", shiny=True, type_one="Grass", type_two="Poison",
        ability="Overgrow", tera_type="Grass", nature="Serious", move_one="Tackle",
        move_two="Growl", move_three="Vine Whip", move_four="Leech Seed",
        base_hp=45, base_atk=49, base_def=49, base_sp_atk=65, base_sp_def=65,
        base_speed=45, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_2 = Pokemon(
        user_id=1, poke_dex=4, name="Charmander", nick_name="Char",
        gender="Male", shiny=False, type_one="Fire",
        ability="Blaze", tera_type="Fire", nature="Lonely", move_one="Scratch",
        move_two="Growl", move_three="Ember", move_four="Smoke Screen",
        base_hp=39, base_atk=52, base_def=43, base_sp_atk=60, base_sp_def=50,
        base_speed=65, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_3 = Pokemon(
        user_id=1, poke_dex=7, name="Squirtle", nick_name="Squirt",
        gender="Female", shiny=True, type_one="Water",
        ability="Torrent", tera_type="Water", nature="Calm", move_one="Tackle",
        move_two="Tail Whip", move_three="Water Gun", move_four="Withdraw",
        base_hp=44, base_atk=48, base_def=65, base_sp_atk=50, base_sp_def=64,
        base_speed=43, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_4 = Pokemon(
        user_id=1, poke_dex=25, name="Pikachu", nick_name="Pika",
        gender="Female", shiny=False, type_one="Electric",
        ability="Static", tera_type="Electric", nature="Timid", move_one="Thunder Shock",
        move_two="Growl", move_three="Quick Attack", move_four="Electro Ball",
        base_hp=35, base_atk=55, base_def=40, base_sp_atk=50, base_sp_def=50,
        base_speed=90, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_5 = Pokemon(
        user_id=1, poke_dex=133, name="Eevee", nick_name="Eevee",
        gender="Male", shiny=True, type_one="Normal",
        ability="Adaptability", tera_type="Normal", nature="Jolly", move_one="Tackle",
        move_two="Tail Whip", move_three="Sand Attack", move_four="Quick Attack",
        base_hp=55, base_atk=55, base_def=50, base_sp_atk=45, base_sp_def=65,
        base_speed=55, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_6 = Pokemon(
        user_id=1, poke_dex=152, name="Chikorita", nick_name="Chiko",
        gender="Female", shiny=False, type_one="Grass",
        ability="Overgrow", tera_type="Grass", nature="Bold", move_one="Tackle",
        move_two="Growl", move_three="Razor Leaf", move_four="Poison Powder",
        base_hp=45, base_atk=49, base_def=65, base_sp_atk=49, base_sp_def=65,
        base_speed=45, ev_hp=0, ev_atk=0, ev_def=252, ev_sp_atk=4, ev_sp_def=252,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_7 = Pokemon(
        user_id=2, poke_dex=10, name="Caterpie", nick_name="Cater",
        gender="Male", shiny=False, type_one="Bug",
        ability="Shield Dust", tera_type="Bug", nature="Adamant", move_one="Tackle",
        move_two="String Shot", move_three="Bug Bite", move_four="Electroweb",
        base_hp=45, base_atk=30, base_def=35, base_sp_atk=20, base_sp_def=20,
        base_speed=45, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_8 = Pokemon(
        user_id=2, poke_dex=92, name="Gastly", nick_name="Gast",
        gender="Male", shiny=False, type_one="Ghost", type_two="Poison",
        ability="Levitate", tera_type="Ghost", nature="Modest", move_one="Lick",
        move_two="Hypnosis", move_three="Dream Eater", move_four="Shadow Ball",
        base_hp=30, base_atk=35, base_def=30, base_sp_atk=100, base_sp_def=35,
        base_speed=80, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_9 = Pokemon(
        user_id=2, poke_dex=147, name="Dratini", nick_name="Drat",
        gender="Male", shiny=True, type_one="Dragon",
        ability="Shed Skin", tera_type="Dragon", nature="Jolly", move_one="Wrap",
        move_two="Leer", move_three="Twister", move_four="Dragon Tail",
        base_hp=41, base_atk=64, base_def=45, base_sp_atk=50, base_sp_def=50,
        base_speed=50, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_10 = Pokemon(
        user_id=2, poke_dex=200, name="Misdreavus", nick_name="Mis",
        gender="Female", shiny=False, type_one="Ghost",
        ability="Levitate", tera_type="Ghost", nature="Timid", move_one="Growl",
        move_two="Psywave", move_three="Spite", move_four="Shadow Ball",
        base_hp=60, base_atk=60, base_def=60, base_sp_atk=85, base_sp_def=85,
        base_speed=85, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=252,
        ev_speed=4, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_11 = Pokemon(
        user_id=2, poke_dex=143, name="Snorlax", nick_name="Snor",
        gender="Male", shiny=False, type_one="Normal",
        ability="Immunity", tera_type="Normal", nature="Adamant", move_one="Tackle",
        move_two="Rest", move_three="Body Slam", move_four="Hyper Beam",
        base_hp=160, base_atk=110, base_def=65, base_sp_atk=65, base_sp_def=110,
        base_speed=30, ev_hp=252, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_12 = Pokemon(
        user_id=2, poke_dex=127, name="Pinsir", nick_name="Pin",
        gender="Female", shiny=True, type_one="Bug",
        ability="Hyper Cutter", tera_type="Bug", nature="Jolly", move_one="Vice Grip",
        move_two="Focus Energy", move_three="Seismic Toss", move_four="X-Scissor",
        base_hp=65, base_atk=125, base_def=100, base_sp_atk=55, base_sp_def=70,
        base_speed=85, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_13 = Pokemon(
        user_id=3, poke_dex=137, name="Porygon", nick_name="Pory",
        gender="Genderless", shiny=False, type_one="Normal",
        ability="Trace", tera_type="Normal", nature="Modest", move_one="Tackle",
        move_two="Conversion", move_three="Psybeam", move_four="Recover",
        base_hp=65, base_atk=60, base_def=70, base_sp_atk=85, base_sp_def=75,
        base_speed=40, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_14 = Pokemon(
        user_id=3, poke_dex=16, name="Pidgey", nick_name="Pidge",
        gender="Male", shiny=True, type_one="Normal", type_two="Flying",
        ability="Keen Eye", tera_type="Flying", nature="Jolly", move_one="Tackle",
        move_two="Gust", move_three="Quick Attack", move_four="Wing Attack",
        base_hp=40, base_atk=45, base_def=40, base_sp_atk=35, base_sp_def=35,
        base_speed=56, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_15 = Pokemon(
        user_id=3, poke_dex=95, name="Onix", nick_name="Oni",
        gender="Male", shiny=False, type_one="Rock", type_two="Ground",
        ability="Rock Head", tera_type="Ground", nature="Impish", move_one="Tackle",
        move_two="Screech", move_three="Rock Throw", move_four="Stealth Rock",
        base_hp=35, base_atk=45, base_def=160, base_sp_atk=30, base_sp_def=45,
        base_speed=70, ev_hp=252, ev_atk=4, ev_def=252, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_16 = Pokemon(
        user_id=3, poke_dex=132, name="Ditto", nick_name="Ditto",
        gender="Unknown", shiny=False, type_one="Normal",
        ability="Limber", tera_type="Normal", nature="Adamant", move_one="Transform",
        move_two=None, move_three=None, move_four=None,
        base_hp=48, base_atk=48, base_def=48, base_sp_atk=48, base_sp_def=48,
        base_speed=48, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_17 = Pokemon(
        user_id=3, poke_dex=150, name="Mewtwo", nick_name="Mewtwo",
        gender="Unknown", shiny=True, type_one="Psychic",
        ability="Pressure", tera_type="Psychic", nature="Modest", move_one="Confusion",
        move_two="Disable", move_three="Swift", move_four="Psychic",
        base_hp=106, base_atk=110, base_def=90, base_sp_atk=154, base_sp_def=90,
        base_speed=130, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_18 = Pokemon(
        user_id=3, poke_dex=101, name="Electrode", nick_name="Electro",
        gender="Unknown", shiny=False, type_one="Electric",
        ability="Soundproof", tera_type="Electric", nature="Timid", move_one="Tackle",
        move_two="Screech", move_three="Thunder Shock", move_four="Charge Beam",
        base_hp=60, base_atk=50, base_def=70, base_sp_atk=80, base_sp_def=80,
        base_speed=140, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_19 = Pokemon(
        user_id=4, poke_dex=136, name="Flareon", nick_name="Flare",
        gender="Male", shiny=False, type_one="Fire",
        ability="Flash Fire", tera_type="Fire", nature="Adamant", move_one="Ember",
        move_two="Quick Attack", move_three="Bite", move_four="Flamethrower",
        base_hp=65, base_atk=130, base_def=60, base_sp_atk=95, base_sp_def=110,
        base_speed=65, ev_hp=0, ev_atk=252, ev_def=0, ev_sp_atk=4, ev_sp_def=252,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_20 = Pokemon(
        user_id=4, poke_dex=470, name="Leafeon", nick_name="Leaf",
        gender="Female", shiny=True, type_one="Grass",
        ability="Leaf Guard", tera_type="Grass", nature="Jolly", move_one="Razor Leaf",
        move_two="Quick Attack", move_three="Bite", move_four="Giga Drain",
        base_hp=65, base_atk=110, base_def=130, base_sp_atk=60, base_sp_def=65,
        base_speed=95, ev_hp=0, ev_atk=252, ev_def=252, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=4, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_21 = Pokemon(
        user_id=4, poke_dex=134, name="Vaporeon", nick_name="Vapor",
        gender="Male", shiny=False, type_one="Water",
        ability="Water Absorb", tera_type="Water", nature="Bold", move_one="Water Gun",
        move_two="Quick Attack", move_three="Bite", move_four="Surf",
        base_hp=130, base_atk=65, base_def=60, base_sp_atk=110, base_sp_def=95,
        base_speed=65, ev_hp=252, ev_atk=0, ev_def=252, ev_sp_atk=4, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_22 = Pokemon(
        user_id=4, poke_dex=196, name="Espeon", nick_name="Espe",
        gender="Female", shiny=False, type_one="Psychic",
        ability="Synchronize", tera_type="Psychic", nature="Timid", move_one="Confusion",
        move_two="Quick Attack", move_three="Bite", move_four="Psychic",
        base_hp=65, base_atk=65, base_def=60, base_sp_atk=130, base_sp_def=95,
        base_speed=110, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_23 = Pokemon(
        user_id=4, poke_dex=135, name="Jolteon", nick_name="Jolt",
        gender="Male", shiny=True, type_one="Electric",
        ability="Volt Absorb", tera_type="Electric", nature="Timid", move_one="Thunder Shock",
        move_two="Quick Attack", move_three="Bite", move_four="Thunderbolt",
        base_hp=65, base_atk=65, base_def=60, base_sp_atk=110, base_sp_def=95,
        base_speed=130, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_24 = Pokemon(
        user_id=4, poke_dex=197, name="Umbreon", nick_name="Umbre",
        gender="Male", shiny=False, type_one="Dark",
        ability="Synchronize", tera_type="Dark", nature="Careful", move_one="Pursuit",
        move_two="Quick Attack", move_three="Bite", move_four="Foul Play",
        base_hp=95, base_atk=65, base_def=110, base_sp_atk=60, base_sp_def=130,
        base_speed=65, ev_hp=252, ev_atk=0, ev_def=252, ev_sp_atk=0, ev_sp_def=4,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_25 = Pokemon(
        user_id=5, poke_dex=145, name="Zapdos", nick_name="Zap",
        gender="Unknown", shiny=False, type_one="Electric", type_two="Flying",
        ability="Pressure", tera_type="Electric", nature="Timid", move_one="Peck",
        move_two="Thunder Shock", move_three="Drill Peck", move_four="Thunderbolt",
        base_hp=90, base_atk=90, base_def=85, base_sp_atk=125, base_sp_def=90,
        base_speed=100, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_26 = Pokemon(
        user_id=5, poke_dex=146, name="Moltres", nick_name="Molt",
        gender="Unknown", shiny=True, type_one="Fire", type_two="Flying",
        ability="Pressure", tera_type="Fire", nature="Modest", move_one="Wing Attack",
        move_two="Ember", move_three="Fire Spin", move_four="Sky Attack",
        base_hp=90, base_atk=100, base_def=90, base_sp_atk=125, base_sp_def=85,
        base_speed=90, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_27 = Pokemon(
        user_id=5, poke_dex=144, name="Articuno", nick_name="Arti",
        gender="Unknown", shiny=False, type_one="Ice", type_two="Flying",
        ability="Pressure", tera_type="Ice", nature="Bold", move_one="Gust",
        move_two="Powder Snow", move_three="Ice Beam", move_four="Blizzard",
        base_hp=90, base_atk=85, base_def=100, base_sp_atk=95, base_sp_def=125,
        base_speed=85, ev_hp=0, ev_atk=0, ev_def=252, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_28 = Pokemon(
        user_id=5, poke_dex=94, name="Gengar", nick_name="Geng",
        gender="Male", shiny=False, type_one="Ghost", type_two="Poison",
        ability="Levitate", tera_type="Ghost", nature="Timid", move_one="Lick",
        move_two="Hypnosis", move_three="Shadow Punch", move_four="Sludge Bomb",
        base_hp=60, base_atk=65, base_def=60, base_sp_atk=130, base_sp_def=75,
        base_speed=110, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_29 = Pokemon(
        user_id=5, poke_dex=112, name="Rhydon", nick_name="Rhy",
        gender="Male", shiny=True, type_one="Ground", type_two="Rock",
        ability="Lightning Rod", tera_type="Ground", nature="Adamant", move_one="Horn Attack",
        move_two="Stomp", move_three="Rock Slide", move_four="Earthquake",
        base_hp=105, base_atk=130, base_def=120, base_sp_atk=45, base_sp_def=45,
        base_speed=40, ev_hp=252, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_30 = Pokemon(
        user_id=5, poke_dex=68, name="Machamp", nick_name="Mach",
        gender="Male", shiny=False, type_one="Fighting",
        ability="No Guard", tera_type="Fighting", nature="Adamant", move_one="Karate Chop",
        move_two="Low Kick", move_three="Seismic Toss", move_four="Cross Chop",
        base_hp=90, base_atk=130, base_def=80, base_sp_atk=65, base_sp_def=85,
        base_speed=55, ev_hp=0, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_31 = Pokemon(
        user_id=6, poke_dex=383, name="Groudon", nick_name="Grou",
        gender="Unknown", shiny=False, type_one="Ground",
        ability="Drought", tera_type="Ground", nature="Adamant", move_one="Slash",
        move_two="Bulk Up", move_three="Earthquake", move_four="Fire Punch",
        base_hp=100, base_atk=150, base_def=140, base_sp_atk=100, base_sp_def=90,
        base_speed=90, ev_hp=252, ev_atk=252, ev_def=0, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=4, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_32 = Pokemon(
        user_id=6, poke_dex=392, name="Infernape", nick_name="Infer",
        gender="Male", shiny=True, type_one="Fire", type_two="Fighting",
        ability="Blaze", tera_type="Fire", nature="Jolly", move_one="Scratch",
        move_two="Ember", move_three="Mach Punch", move_four="Close Combat",
        base_hp=76, base_atk=104, base_def=71, base_sp_atk=104, base_sp_def=71,
        base_speed=108, ev_hp=0, ev_atk=252, ev_def=0, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_33 = Pokemon(
        user_id=6, poke_dex=445, name="Garchomp", nick_name="Garch",
        gender="Male", shiny=False, type_one="Dragon", type_two="Ground",
        ability="Sand Veil", tera_type="Dragon", nature="Jolly", move_one="Dragon Claw",
        move_two="Earthquake", move_three="Swords Dance", move_four="Fire Fang",
        base_hp=108, base_atk=130, base_def=95, base_sp_atk=80, base_sp_def=85,
        base_speed=102, ev_hp=0, ev_atk=252, ev_def=0, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_34 = Pokemon(
        user_id=6, poke_dex=248, name="Tyranitar", nick_name="Tyra",
        gender="Female", shiny=False, type_one="Rock", type_two="Dark",
        ability="Sand Stream", tera_type="Rock", nature="Adamant", move_one="Bite",
        move_two="Rock Slide", move_three="Crunch", move_four="Earthquake",
        base_hp=100, base_atk=134, base_def=110, base_sp_atk=95, base_sp_def=100,
        base_speed=61, ev_hp=252, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_35 = Pokemon(
        user_id=6, poke_dex=464, name="Rhyperior", nick_name="Rhyperi",
        gender="Male", shiny=True, type_one="Ground", type_two="Rock",
        ability="Solid Rock", tera_type="Ground", nature="Adamant", move_one="Horn Attack",
        move_two="Stomp", move_three="Rock Slide", move_four="Earthquake",
        base_hp=115, base_atk=140, base_def=130, base_sp_atk=55, base_sp_def=55,
        base_speed=40, ev_hp=252, ev_atk=252, ev_def=4, ev_sp_atk=0, ev_sp_def=0,
        ev_speed=0, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )
    poke_36 = Pokemon(
        user_id=6, poke_dex=479, name="Rotom", nick_name="Rot",
        gender="Unknown", shiny=False, type_one="Electric", type_two="Ghost",
        ability="Levitate", tera_type="Electric", nature="Timid", move_one="Thunder Shock",
        move_two="Confuse Ray", move_three="Discharge", move_four="Shadow Ball",
        base_hp=50, base_atk=50, base_def=77, base_sp_atk=95, base_sp_def=77,
        base_speed=91, ev_hp=0, ev_atk=0, ev_def=0, ev_sp_atk=252, ev_sp_def=4,
        ev_speed=252, iv_hp=31, iv_atk=31, iv_def=31, iv_sp_atk=31, iv_sp_def=31,
        iv_speed=31
    )

    db.session.add(poke_1)
    db.session.add(poke_2)
    db.session.add(poke_3)
    db.session.add(poke_4)
    db.session.add(poke_5)
    db.session.add(poke_6)
    db.session.add(poke_7)
    db.session.add(poke_8)
    db.session.add(poke_9)
    db.session.add(poke_10)
    db.session.add(poke_11)
    db.session.add(poke_12)
    db.session.add(poke_13)
    db.session.add(poke_14)
    db.session.add(poke_15)
    db.session.add(poke_16)
    db.session.add(poke_17)
    db.session.add(poke_18)
    db.session.add(poke_19)
    db.session.add(poke_20)
    db.session.add(poke_21)
    db.session.add(poke_22)
    db.session.add(poke_23)
    db.session.add(poke_24)
    db.session.add(poke_25)
    db.session.add(poke_26)
    db.session.add(poke_27)
    db.session.add(poke_28)
    db.session.add(poke_29)
    db.session.add(poke_30)
    db.session.add(poke_31)
    db.session.add(poke_32)
    db.session.add(poke_33)
    db.session.add(poke_34)
    db.session.add(poke_35)
    db.session.add(poke_36)
    db.session.commit()

def undo_pokemons():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pokemons RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM pokemons"))

    db.session.commit()
