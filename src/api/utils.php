<?php
$conn = new PDO($_ENV['DB_INSTANCE'], $_ENV['DB_USER'], $_ENV['DB_PASSWORD']);

function boolFromVal($val) {
	if ($val == 1) {
		return true;
	}
	return false;
}

?>