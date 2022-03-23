BBLM.Router = Backbone.Router.extend({
	savedSearches : {},
	history:[],
	currentView: null,

	routes:{
		"":"listRaces",
		"login": "login",
		"logout": "logout",
		"setup": "setupDashboard",
		"race":"listRaces",
		"race/new": "raceForm",
		"race/:id": "raceForm",
		"leagues": "showLeagues",
		"leage/new": "leagueCreate",
		"league/:id": 'leagueDivisionList',
		"division/new": "divisionCreate",
		"division/:id": "divisionEdit",
		"team/new": "teamCreate",
		"team/:id": "teamDisplay",
		"season/new": "seasonCreate",
		"season/:id": "displaySchedule",
		"logGame/:id": "logGame"
	},

	initialize: function() {
		//this.topNav = 
	},

	login: function() {

	},

	logout: function() {

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

	},

	showLeagues: function() {

	},

	leagueDivisionList: function(id) {

	},

	divisionCreate: function() {

	},

	divisionEdit: function(id) {

	},

	teamCreate: function() {

	},

	teamDisplay: function(id) {

	},

	seasonCreate: function() {

	},

	displaySchedule: function(id) {

	},

	logGame: function(id) {
		
	}
});