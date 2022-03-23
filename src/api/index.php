<?php
require_once './vendor/autoload.php';
require_once './utils.php';
require_once './team.php';
require_once './league.php';
require_once './coach.php';

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