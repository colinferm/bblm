BBLM.Router = Backbone.Router.extend({
	savedSearches : {},
	history:[],

	routes:{
		"":"home",
		"setup": "setupDashboard",
		"race":"listRaces",
		"race/new": "raceForm",
		"race/:id": "raceForm"
	},

	initialize: function() {

	},

	setupDashboard: function() {

	},

	listRaces: function() {

	},

	raceForm: function(id) {

	}
});