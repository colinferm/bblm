<?php

$conn = new PDO("mysql:host=".$_ENV['DATABASE_HOST'].";dbname=".$_ENV['DB_INSTANCE'], $_ENV['DB_USER'], $_ENV['DB_USER']);

function boolFromVal($val) {
	if ($val == 1) {
		return true;
	}
	return false;
}

?>