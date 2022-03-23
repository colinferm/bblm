BBLM.Router = Backbone.Router.extend({
	savedSearches : {},
	history:[],
	currentView: null,

	routes:{
		"":"listRaces",
		"setup": "setupDashboard",
		"race":"listRaces",
		"race/new": "raceForm",
		"race/:id": "raceForm"
	},

	initialize: function() {
		//this.topNav = 
	},

	setupDashboard: function() {

	},

	listRaces: function() {
		/*
		console.log("Blah");
		var raceList = new View.RacesList({});
		this.currentView = raceList;
		$("#content").html(raceList.render().el);
		*/
	},

	raceForm: function(id) {

	}
});