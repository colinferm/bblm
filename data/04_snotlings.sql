INSERT INTO race VALUES(2, 'Snotlings', 'The best Bloodbowl team', 50000.00, 350000.00, 60000.00, 3, 1);
INSERT INTO race_rule_map VALUES(2, 7);
INSERT INTO race_rule_map VALUES(2, 9);
INSERT INTO race_rule_map VALUES(2, 11);
INSERT INTO race_position VALUES(7, 2, 'Sotling Lineman', 0, 16, 15000.00, 0, 5, 1, 3, 5, 6);
INSERT INTO race_position VALUES(8, 2, 'Fungus Flinga', 0, 2, 30000.00, 30000.00, 5, 1, 3, 4, 6);
INSERT INTO race_position VALUES(9, 2, 'Fun-hoppa', 0, 2, 20000.00, 20000.00, 6, 1, 3, 5, 6);
INSERT INTO race_position VALUES(10, 2, 'Stilty Runna', 0, 2, 20000.00, 20000.00, 6, 1, 3, 5, 6);
INSERT INTO race_position VALUES(11, 2, 'Pump Wagon', 0, 2, 105000.00, 105000.00, 4, 5, 5, 0, 9);
INSERT INTO race_position VALUES(12, 2, 'Trained Troll', 0, 2, 115000.00, 115000.00, 4, 5, 5, 5, 10);

INSERT INTO race_postion_skill_types VALUES(7, 1, 1);
INSERT INTO race_postion_skill_types VALUES(7, 2, 0);
INSERT INTO race_postion_skill_types VALUES(8, 1, 1);
INSERT INTO race_postion_skill_types VALUES(8, 4, 1);
INSERT INTO race_postion_skill_types VALUES(8, 2, 0);
INSERT INTO race_postion_skill_types VALUES(9, 1, 1);
INSERT INTO race_postion_skill_types VALUES(9, 2, 0);
INSERT INTO race_postion_skill_types VALUES(10, 1, 1);
INSERT INTO race_postion_skill_types VALUES(10, 2, 0);
INSERT INTO race_postion_skill_types VALUES(11, 5, 1);
INSERT INTO race_postion_skill_types VALUES(11, 1, 0);
INSERT INTO race_postion_skill_types VALUES(11, 2, 0);
INSERT INTO race_postion_skill_types VALUES(12, 5, 1);
INSERT INTO race_postion_skill_types VALUES(12, 1, 0);
INSERT INTO race_postion_skill_types VALUES(12, 2, 0);
INSERT INTO race_postion_skill_types VALUES(12, 4, 0);

INSERT INTO race_position_skills_map VALUES(7, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(7, 78, 0); # right stuff
INSERT INTO race_position_skills_map VALUES(7, 9, 0); # side step
INSERT INTO race_position_skills_map VALUES(7, 81, 0); # stunty
INSERT INTO race_position_skills_map VALUES(7, 82, 0); # swarming
INSERT INTO race_position_skills_map VALUES(7, 85, 0); # titchy

INSERT INTO race_position_skills_map VALUES(8, 65, 0); # Bombardier
INSERT INTO race_position_skills_map VALUES(8, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(8, 78, 0); # right stuff
INSERT INTO race_position_skills_map VALUES(8, 79, 0); # secret weapon
INSERT INTO race_position_skills_map VALUES(8, 9, 0); # side step
INSERT INTO race_position_skills_map VALUES(8, 81, 0); # stunty

INSERT INTO race_position_skills_map VALUES(9, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(9, 74, 0); # pogo stick
INSERT INTO race_position_skills_map VALUES(9, 78, 0); # right stuff
INSERT INTO race_position_skills_map VALUES(9, 9, 0); # side step
INSERT INTO race_position_skills_map VALUES(9, 81, 0); # stunty

INSERT INTO race_position_skills_map VALUES(10, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(10, 78, 0); # right stuff
INSERT INTO race_position_skills_map VALUES(10, 9, 0); # side step
INSERT INTO race_position_skills_map VALUES(10, 11, 0); # sprint
INSERT INTO race_position_skills_map VALUES(10, 81, 0); # stunty

INSERT INTO race_position_skills_map VALUES(11, 15, 1); # dirty player +1
INSERT INTO race_position_skills_map VALUES(11, 54, 0); # Juggernaut
INSERT INTO race_position_skills_map VALUES(11, 55, 1); # Mighty blow +1
INSERT INTO race_position_skills_map VALUES(11, 76, 0); # Really stupid
INSERT INTO race_position_skills_map VALUES(11, 79, 0); # secret weapon
INSERT INTO race_position_skills_map VALUES(11, 58, 0); # stand firm

INSERT INTO race_position_skills_map VALUES(12, 63, 1); # Always hungry
INSERT INTO race_position_skills_map VALUES(12, 71, 3); # Longer 3+
INSERT INTO race_position_skills_map VALUES(12, 55, 1); # Mighty blow +1
INSERT INTO race_position_skills_map VALUES(12, 75, 0); # Projectile Vomit
INSERT INTO race_position_skills_map VALUES(12, 76, 0); # Really stupid
INSERT INTO race_position_skills_map VALUES(12, 77, 0); # Regeneration
INSERT INTO race_position_skills_map VALUES(12, 86, 0); # Throw team-mate