from app.models import db, Team, environment, SCHEMA
from sqlalchemy.sql import text

def seed_teams():
    team_1 = Team(
        user_id=1, team_name="Cool Team", team_summary = """
        In this competitive Pokemon VGC team, we have Bulbasaur, which evolves into Venusaur,
        a Special Attacker and Support using Giga Drain, Sludge Bomb, Sleep Powder, and Protect.

        Squirtle, evolving into Blastoise, serves as a Tank and Support with Scald, Rapid Spin,
        Ice Beam, and Protect.

        Charmander evolves into Charizard, acting as a Physical Attacker and Sweeper using
        Flare Blitz, Dragon Claw, Thunder Punch, and Protect.

        Pikachu evolves into Raichu, a Fast Special Attacker and Support with Thunderbolt,
        Focus Blast, Fake Out, and Protect.

        Eevee evolves into Espeon, a Special Attacker and Psychic Terrain setter using Psychic,
        Dazzling Gleam, Shadow Ball, and Protect.

        Lastly, Caterpie evolves into Butterfree, serving as Support and Disruptor with Sleep Powder,
        Rage Powder, Bug Buzz, and Protect.

        The team's strategy focuses on balanced offense and support options, with status moves,
        redirects, and broad coverage to control the battlefield and adapt to various threats in VGC battles.
        """)
    team_2 = Team(
        user_id=2, team_name="Awesome Team", team_summary = """
        In this competitive Pokemon VGC team, we have Gastly, which evolves into Haunter,
        a Special Attacker and Disruptor using Shadow Ball, Sludge Bomb, Thunderbolt,
        and Will-O-Wisp.

        Caterpie, evolving into Butterfree, serves as Support and Disruptor with Sleep Powder,
        Rage Powder, Bug Buzz, and Protect.

        Dratini evolves into Dragonair, acting as a Dragon-type Special Attacker and
        Bulky Sweeper with Dragon Pulse, Ice Beam, Thunder Wave, and Protect.

        Misdreavous evolves into Mismagius, a Special Attacker and Support with Shadow Ball,
        Mystical Fire, Nasty Plot, and Protect.

        Snorlax remains a formidable Tank and Physical Attacker using Body Slam,
        High Horsepower, Curse, and Protect.

        Lastly, Pinsir serves as a Physical Attacker and Priority user with X-Scissor,
        Close Combat, Quick Attack, and Protect.

        The team's strategy revolves around disrupting opponents with status moves,
        utilizing priority moves, and leveraging a mix of special and physical attackers.
        Coverage and strategic use of Protect are essential to adapt to various threats in VGC battles.
        """)
    team_3 = Team(
        user_id=3, team_name="THE BEST TEAM", team_summary = """
        In this competitive Pokemon VGC team, we have Porygon, evolving into Porygon2,
        a Special Attacker and Tank using Tri Attack, Ice Beam, Thunderbolt, and Recover.

        Pidgey evolves into Pidgeot, serving as a Flying-type Special Attacker and Support
        with Hurricane, Heat Wave, Roost, and Tailwind.

        Onix evolves into Steelix, acting as a Tank and Physical Attacker with Earthquake,
        Iron Head, Stealth Rock, and Protect.

        Ditto, the Adaptability Pokemon, plays a Support role with Transform, Imprison,
        Protect, and Transform.

        Mewtwo, a powerful Psychic-type Pokemon, is a Special Attacker and Sweeper
        utilizing Psystrike, Aura Sphere, Ice Beam, and Protect.

        Lastly, Electrode, the Fast Ball Pokemon, is a Fast Special Attacker and Support
        with Thunderbolt, Volt Switch, Taunt, and Protect.

        The team's strategy focuses on a mix of offensive power, tankiness, and support.
        Synergy between team members and proper prediction will be crucial in countering
        your opponents' strategies in VGC battles.
        """)
    team_4 = Team(
        user_id=4, team_name="One team to rule them all", team_summary = """
        In this competitive Pokemon VGC team, we have Flareon, a Physical Attacker and
        Status Inflictor with moves like Flare Blitz, Superpower, Will-O-Wisp, and Protect.

        Leafeon serves as a Physical Attacker and Support with Leaf Blade, Iron Tail,
        Swords Dance, and Protect. Vaporeon is a Special Attacker and Support,
        utilizing Scald, Ice Beam, Helping Hand, and Protect.

        Espeon acts as a Special Attacker and Psychic Terrain setter using Psychic,
        Dazzling Gleam, Shadow Ball, and Protect.

        Jolteon is a Fast Special Attacker and Disruptor, having Thunderbolt, Shadow Ball,
        Thunder Wave, and Protect.

        Lastly, Umbreon plays a Defensive and Supportive role with Foul Play, Snarl,
        Protect, and Helping Hand.

        The team's strategy revolves around a mix of offensive power,
        status infliction, supportive moves, and terrain control.
        Synergy between team members and careful prediction are key to success
        in VGC battles.

        """)
    team_5 = Team(
        user_id=5, team_name="A Squad", team_summary = """
        In this competitive Pokemon VGC team, we have Zapdos, a Special Attacker
        and Support with moves like Thunderbolt, Hurricane, Roost, and Tailwind.

        Moltres serves as a Special Attacker and Sweeper, utilizing moves such as
        Fire Blast, Hurricane, Protect, and Nasty Plot.

        Articuno plays a Defensive and Special Attacker role, with moves like Ice Beam,
        Hurricane, Roost, and Tailwind.

        Gengar is a fast Special Attacker and Disruptor, using Shadow Ball, Sludge Bomb,
        Will-O-Wisp, and Protect.

        Rhydon acts as a Physical Attacker and Tank, with moves such as Earthquake,
        Rock Slide, Protect, and Swords Dance.

        Machamp serves as a Physical Attacker and Sweeper, utilizing Close Combat,
        Ice Punch, Thunder Punch, and Protect.

        The team's strategy revolves around a mix of offensive power,
        supportive moves, and diverse coverage options. Proper prediction and
        synergy between team members are essential to succeed in VGC battles.
        """)
    team_6 = Team(
        user_id=6, team_name="The X Factors", team_summary = """
        In this competitive Pokemon VGC team, we have Groudon, a Tank and Physical Attacker,
        utilizing moves like Precipice Blades, Fire Punch, Rock Slide, and Protect.

        Infernape serves as a Physical Attacker and Sweeper, with moves such as Flare Blitz,
        Close Combat, Thunder Punch, and Protect.
        Garchomp plays a role as a Physical Attacker and Tank, using Dragon Claw, Earthquake, Swords Dance,
        and Protect.

        Tyranitar acts as a Tank and Support, having moves like Rock Slide,
        Crunch, Thunder Wave, and Protect.

        Rhyperior is a Physical Attacker and Tank, utilizing moves such as
        Earthquake, Rock Slide, Protect, and Swords Dance.

        Lastly, Rotom serves as a Special Attacker and Support with moves like Thunderbolt,
        Discharge, Will-O-Wisp, and Protect.

        The team's strategy focuses on a mix of offensive power, tankiness, and support.
        Synergy between team members and careful prediction are crucial for success
        in VGC battles.
        """)

    db.session.add(team_1)
    db.session.add(team_2)
    db.session.add(team_3)
    db.session.add(team_4)
    db.session.add(team_5)
    db.session.add(team_6)
    db.session.commit()

def undo_teams():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM teams"))

    db.session.commit()
