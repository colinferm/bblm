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

	},

	setupDashboard: function() {

	},

	listRaces: function() {
		var raceList = BBLM.View.RacesList({collection: new BBLM.Collection.Races() });
		this.currentView = raceList;
		$("#content").html(raceList.render().el);
	},

	raceForm: function(id) {

	}
});