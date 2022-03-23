<?php
function getRaceNames() {
	global $conn;
	$sql = "SELECT r.id, r.race_name FROM race r ORDER BY r.race_name ASC";
	$vals = array();
	foreach ($conn->query($sql) as $r) {
		$row = array(
			'id' => $r['id'],
			'name' => $r['race_name']
		);
		$vals[] = $row;
	}
	return $vals;
}

function getRace($id) {
	global $conn;
	$sql = "SELECT r.id, r.race_name, race_description, bribe_cost, chef_cost, reroll_cost, tier, apothecary FROM race r WHERE r.id = :id";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(":id", $id);
	$obj = $stmt->fetchAll()[0];
	$ret = marshalTeam($obj);



	return $ret;
}

function getAllRaces() {
	$sql = "SELECT r.id, r.race_name, race_description, bribe_cost, chef_cost, reroll_cost, tier, apothecary FROM race r ORDER BY r.race_name ASC";
	$stmt = $conn->prepare($sql);
	$results = $stmt->fetchAll();
	$ret = [];

	foreach ($results as $obj) {
		$team = marshalTeam($obj);
		$ret[] = $team;
	}

	return $ret;
}

function marshalTeam($obj) {
	$team = array(
		'id' => $obj['id'],
		'name' => $obj['race_name'],
		'description' => $obj['race_description'],
		'bribe' => $obj['bribe_cost'],
		'chef' => $obj['chef_cost'],
		'reroll' => $obj['reroll_cost'],
		'tier' => $obj['tier'],
		'apothecary' => boolFromVal($obj['apothecary'])
	);

	$rule_sql = "SELECT sr.id, sr.rule_name FROM special_rules sr, race_rule_map rrm WHERE sr.id = rrm.rule_id AND rrm.race_id = :id";
	$rule_stmt = $conn->prepare($sql);
	$rule_stmt->bindParam(":id", $id);
	$rule_results = $stmt->fetchAll();
	$rules = [];
	foreach($rule_results as $r) {
		$rules[] = array(
			'id' => $r['id'],
			'name' => $r['rule_name']
		);
	}
	$team['rules'] = $rules;

	return $team;
}

function getPositions($teamId) {
	global $conn;
	$sql = "SELECT id, race_id, position, allowed_min, allowed_max, hiring_cost, tv_cost, movement, strength, agility, passing, armor FROM race_position rp WHERE race_id = :team_id ORDER BY allowed_max DESC";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(":team_id", $teamId);
	$results = $stmt->fetchAll();

	$ret = [];
	foreach ($results as $obj) {
		$pos = marshalPosition($obj);
		$ret[] = $pos;
	}
	return $ret;
}

function getPosition($id) {
	global $conn;
	$sql = "SELECT id, race_id, position, allowed_min, allowed_max, hiring_cost, tv_cost, movement, strength, agility, passing, armor FROM race_position rp WHERE id = :id";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(":id", $id);
	$results = $stmt->fetchAll()[0];

	$pos = marshalPosition($obj);
	return $pos;
}

function marshalPosition($obj) {
	$id = $obj['id'];
	$pos = array(
		'id' => $id,
		'race' => $obj['race_id'],
		'position' => $obj['position'],
		'min' => $obj['allowed_min'],
		'max' => $obj['allowed_max'],
		'hiring_cost' => $obj['hiring_cost'],
		'tv_cost' => $obj['tv_cost'],
		'MV' => $obj['movement'],
		'ST' => $obj['strength'],
		'AG' => $obj['agility'],
		'PA' => $obj['passing'],
		'AV' => $obj['arnor']
	);

	$types_sql = "SELECT st.id, st.type_name, st.type_code, rpst.primary_skill, FROM race_postion_skill_types rpst, skill_type st WHERE rpst.skill_type_id = st.id AND rpst.race_position_id = :id";
	$type_stmt = $conn->prepare($types_sql);
	$type_stmt->bindParam(":id", $id);
	$type_res = $type_stmt->fetchAll();

	$types = [];
	foreach($type_res as $t) {
		$type = array(
			'id' => $t['id'],
			'name' => $t['type_name'],
			'code' => $t['type_code'],
			'primary' => boolFromVal($t['primary_skill'])
		);
		$types[] = $type;
	}
	$pos['skill_types'] = $types;

	$skill_sql = "SELECT s.id, s.requires_mod, s.skill, sm.modifier FROM race_position_skills_map sm, skill s WHERE s.id = sm.skill_id AND sm.race_position_id = :id ORDER BY s.id ASC";
	$skill_stmt = $conn->prepare($skill_sql);
	$skill_stmt->bindParam(":id", $id);
	$skill_res = $type_stmt->fetchAll();

	$skills = [];
	foreach($skill_res as $s) {
		$skill = array(
			'id' => $s['id'],
			'name' => $s['skill'],
			'requires_modifer' => boolFromVal($s['requires_mod']),
			'modifier' => $s['modifier']
		);
		$skills[] = $skill;
	}
	$pos['skills'] = $skills;

	return $pos;
}

?>