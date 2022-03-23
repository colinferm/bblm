INSERT INTO race VALUES(1, 'Human', 'A Human Bloodbowl Team', 100000.00, 350000.00, 50000.00, 1, 1);
INSERT INTO race_rule_map VALUES(1, 5);
INSERT INTO race_position VALUES(1, 1, 'Thrower', 0, 2, 80000.00, 80000.00, 6, 3, 3, 2, 9);
INSERT INTO race_position VALUES(2, 1, 'Catcher', 0, 4, 65000.00, 65000.00, 6, 3, 3, 4, 9);
INSERT INTO race_position VALUES(3, 1, 'Blitzer', 0, 4, 85000.00, 85000.00, 7, 3, 3, 4, 9);
INSERT INTO race_position VALUES(4, 1, 'Halfling Hopeful', 0, 3, 30000.00, 30000.00, 5, 2, 3, 4, 7);
INSERT INTO race_position VALUES(5, 1, 'Ogre', 0, 1, 140000.00, 140000.00, 5, 5, 4, 5, 10);
INSERT INTO race_position VALUES(6, 1, 'Lineman', 0, 16, 50000.00, 50000.00, 6, 3, 3, 4, 9);

INSERT INTO race_postion_skill_types VALUES(1, 2, 1);
INSERT INTO race_postion_skill_types VALUES(1, 4, 1);
INSERT INTO race_postion_skill_types VALUES(1, 1, 0);
INSERT INTO race_postion_skill_types VALUES(1, 5, 0);
INSERT INTO race_postion_skill_types VALUES(2, 1, 1);
INSERT INTO race_postion_skill_types VALUES(2, 2, 1);
INSERT INTO race_postion_skill_types VALUES(2, 5, 0);
INSERT INTO race_postion_skill_types VALUES(2, 4, 0);
INSERT INTO race_postion_skill_types VALUES(3, 2, 1);
INSERT INTO race_postion_skill_types VALUES(3, 5, 1);
INSERT INTO race_postion_skill_types VALUES(3, 1, 0);
INSERT INTO race_postion_skill_types VALUES(3, 4, 0);
INSERT INTO race_postion_skill_types VALUES(4, 1, 1);
INSERT INTO race_postion_skill_types VALUES(4, 2, 0);
INSERT INTO race_postion_skill_types VALUES(4, 5, 0);
INSERT INTO race_postion_skill_types VALUES(5, 5, 1);
INSERT INTO race_postion_skill_types VALUES(5, 1, 0);
INSERT INTO race_postion_skill_types VALUES(5, 2, 0);
INSERT INTO race_postion_skill_types VALUES(6, 2, 1);
INSERT INTO race_postion_skill_types VALUES(6, 1, 0);
INSERT INTO race_postion_skill_types VALUES(6, 5, 0);

INSERT INTO race_position_skills_map VALUES(1, 46, 0); # Pass
INSERT INTO race_position_skills_map VALUES(1, 22, 0); # Sure Hands
INSERT INTO race_position_skills_map VALUES(2, 1, 0); # catch
INSERT INTO race_position_skills_map VALUES(2, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(3, 13, 0); # block
INSERT INTO race_position_skills_map VALUES(4, 4, 0); # dodge
INSERT INTO race_position_skills_map VALUES(4, 78, 0); # right stuff
INSERT INTO race_position_skills_map VALUES(4, 81, 0); # stunty
INSERT INTO race_position_skills_map VALUES(5, 66, 0); # Bone Head
INSERT INTO race_position_skills_map VALUES(5, 71, 4); # Longer 4+
INSERT INTO race_position_skills_map VALUES(5, 55, 1); # Mighty Blow +1
INSERT INTO race_position_skills_map VALUES(5, 60, 0); # Thick Skull
INSERT INTO race_position_skills_map VALUES(5, 86, 0); # Throw team-mate