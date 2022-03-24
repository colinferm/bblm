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
	<link href="/css/bootstrap-tagsinput.css" rel="stylesheet">
	<link href="/css/bblm.css" rel="stylesheet">

    <title>League Manager</title>
  </head>
  <body>

	<?php require_once './templates.html'; ?>
    <script src="/js/libs.js"></script>
	<script src="/js/bblm.js"></script>

	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
		  <a class="navbar-brand" href="#">Organization Name</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarScroll">
			<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">Home</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				  Link
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
				  <li><a class="dropdown-item" href="#">Action</a></li>
				  <li><a class="dropdown-item" href="#">Another action</a></li>
				  <li><hr class="dropdown-divider"></li>
				  <li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			  </li>
			  <li class="nav-item">
				<a class="nav-link disabled">Link</a>
			  </li>
			</ul>
			<form class="d-flex">
			  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
			  <button class="btn btn-light" type="submit">Search</button>
			</form>
		  </div>
		</div>
	</nav>
	<div class="container">
	<div class="row">
		<div class="col">
			<div id="content">

			</div>
		</div>
	</div>
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