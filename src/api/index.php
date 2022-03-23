<?php
require_once './api/vendor/autoload.php';
require_once './api/utils.php';
require_once './api/team.php';
require_once './api/league.php';
require_once './api/coach.php';

$app = new \Slim();
$app->response()->header('Content-Type', 'application/json;charset=utf-8');
$app->error(function (\Exception $e) use ($app) {
	error_log("slim error handling",0);
	errorServer($e->getMessage());
});

$app->get('/races', 'getAllRaces');
$app->get('/races/:id', 'getRace');
$app->get('/races/positions/:id', 'getPositions');
$app->get('/positions/:id', 'getPosition');

$app->run();
?>