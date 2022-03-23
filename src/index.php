<?php

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="/css/bootstrap.min.css" rel="stylesheet">
	<link href="/css/fontawesome.min.css" rel="stylesheet">
	<link href="/css/regular.min.css" rel="stylesheet">
	<link href="/css/solid.min.css" rel="stylesheet">

    <title>League Manager</title>
  </head>
  <body>

	<?php require_once './templates.html'; ?>
    <script src="/js/libs.js"></script>
	<script src="/js/bblm.js"></script>

	<div id="content">

	</div>

	<script>
		if ($) {
			BBLM.Util.Templates.loadTemplates(function () {
				app = new BBLM.Router();
				Backbone.history.start();

				$(window).on('hashchange', function (event) {
					window.tabindex = 0;
				});
			});
		}
	</script>
  </body>
</html>