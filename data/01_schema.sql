DROP TABLE IF EXISTS race;
CREATE TABLE race (
	id INT NOT NULL AUTO_INCREMENT,
	race_name VARCHAR(100) NOT NULL,
	race_desc TEXT,
	bribe_cost DECIMAL(8,2),
	chef_cost DECIMAL(8,2),
	reroll_cost DECIMAL(8.2),
	tier INT NOT NULL DEFAULT 1,
	apothecary BIT NOT NULL DEFAULT 1,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS race_position;
CREATE TABLE race_position (
	id INT NOT NULL AUTO_INCREMENT,
	race_id INT NOT NULL,
	position VARCHAR(100),
	allowed_min INT NOT NULL DEFAULT 1,
	allowed_max INT NOT NULL DEFAULT 1,
	hiring_cost DECIMAL(8,2) NOT NULL,
	tv_cost DECIMAL(8,2) NOT NULL,
	movement INT NOT NULL DEFAULT 1,
	strength INT NOT NULL DEFAULT 1,
	agility INT NOT NULL DEFAULT 1,
	passing INT NOT NULL DEFAULT 0,
	armor INT NOT NULL DEFAULT 1,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS race_postion_skill_types;
CREATE TABLE race_postion_skill_types (
	race_position_id INT NOT NULL,
	skill_type_id INT NOT NULL,
	primary_skill BIT NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS race_position_skills_map;
CREATE TABLE race_position_skills_map (
	race_position_id INT NOT NULL,
	skill_id INT NOT NULL,
	modifier INT
);

DROP TABLE IF EXISTS skill_type;
CREATE TABLE skill_type (
	id INT NOT NULL AUTO_INCREMENT,
	type_name VARCHAR(10),
	type_code VARCHAR(1) NOT NULL,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS skill;
CREATE TABLE skill (
	id INT NOT NULL AUTO_INCREMENT,
	skill_type_id INT NOT NULL,
	requires_mod BIT NOT NULL DEFAULT 0,
	skill VARCHAR(25) NOT NULL,
	skill_description TEXT,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS special_rules;
CREATE TABLE special_rules (
	id INT NOT NULL AUTO_INCREMENT,
	rule_name VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS race_rule_map;
CREATE TABLE race_rule_map (
	race_id INT NOT NULL,
	rule_id INT NOT NULL
);

DROP TABLE IF EXISTS league;
CREATE TABLE league (
	id INT NOT NULL AUTO_INCREMENT,
	league_type_id INT NOT NULL,
	league_name VARCHAR(255),
	starting_value DECIMAL(9,2) NOT NULL,
	redraft BIT NOT NULL DEFAULT 1,
	hype TEXT,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS league_division;
CREATE TABLE league_division (
	id INT NOT NULL AUTO_INCREMENT,
	division_name VARCHAR(255),
	hype TEXT,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS division_game;
CREATE TABLE division_game (
	id INT NOT NULL AUTO_INCREMENT,
	division_id INT NOT NULL,
	season_id INT NOT NULL,
	game_name VARCHAR(255),
	game_order INT NOT NULL,
	home_team_id INT NOT NULL,
	home_score INT,
	home_ff INT,
	home_cas INT,
	home_ko INT,
	home_mvp_id INT,
	home_winnings DECIMAL(8,2),
	home_ded_fans INT,
	away_team_id INT NOT NULL,
	away_score INT,
	away_ff INT,
	away_cas INT,
	away_ko INT,
	away_winnings DECIMAL(8,2),
	away_ded_fans INT,
	played BIT NOT NULL DEFAULT 0,
	played_date DATE,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS inducement;
CREATE TABLE inducement (
	id INT NOT NULL AUTO_INCREMENT,
	allowed_max INT NOT NULL DEFAULT 1,
	inducment_name VARCHAR(40),
	cost DECIMAL(8,2),
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS league_season;
CREATE TABLE league_season (
	id INT NOT NULL AUTO_INCREMENT,
	league_id INT NOT NULL,
	season_name VARCHAR(255),
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS team;
CREATE TABLE team (
	id INT NOT NULL AUTO_INCREMENT,
	race_id INT NOT NULL,
	coach_id INT NOT NULL,
	team_name VARCHAR(255),
	hype TEXT,
	league_id INT NOT NULL,
	division_id INT NOT NULL,
	dedicated_fans INT NOT NULL DEFAULT 1,
	treasury DECIMAL(9,2) NOT NULL,
	game_count INT NOT NULL DEFAULT 0,
	season_count INT NOT NULL DEFAULT 0,
	PRIMARY KEY(id)
);

# "TEAM NAME won 3:2 against TEAM NAME"
# "PLAYER NAME gained SKILL"
DROP TABLE IF EXISTS team_note;
CREATE TABLE team_note (
	id INT NOT NULL AUTO_INCREMENT,
	team_id INT NOT NULL,
	note VARCHAR(255),
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS team_player;
CREATE TABLE team_player (
	id INT NOT NULL AUTO_INCREMENT,
	race_position_id INT NOT NULL,
	hiring_cost DECIMAL(8,2) NOT NULL,
	tv_cost DECIMAL(8,2) NOT NULL,
	movement INT NOT NULL DEFAULT 1,
	strength INT NOT NULL DEFAULT 1,
	agility INT NOT NULL DEFAULT 1,
	passing INT NOT NULL DEFAULT 0,
	armor INT NOT NULL DEFAULT 1,
	mvp INT NOT NULL DEFAULT 0,
	touchdowns INT NOT NULL DEFAULT 0,
	passes INT NOT NULL DEFAULT 0,
	catches INT NOT NULL DEFAULT 0,
	interceptions INT NOT NULL DEFAULT 0,
	casualties INT NOT NULL DEFAULT 0,
	total_spp INT NOT NULL DEFAULT 0,
	unspent_spp INT NOT NULL DEFAULT 0,
	game_count INT NOT NULL DEFAULT 0,
	season_count INT NOT NULL DEFAULT 0,
	PRIMARY KEY(id)
);

DROP TABLE IF EXISTS team_player_skills_map;
CREATE TABLE team_player_skills_map (
	team_player_id INT NOT NULL,
	skill_id INT NOT NULL,
	modifier INT
);

DROP TABLE IF EXISTS coach;
CREATE TABLE coach (
	id INT NOT NULL AUTO_INCREMENT,
	coach_name VARCHAR(255),
	coach_handle VARCHAR(255),
	email VARCHAR(255),
	PRIMARY KEY(id)
);