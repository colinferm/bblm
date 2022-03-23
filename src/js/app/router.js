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
		//var crumbs = new BBLM.View.Breadcrumbs();
	},

	login: function() {

	},

	logout: function() {

	},

	setupDashboard: function() {

	},

	listRaces: function() {
		var raceCollection = new BBLM.Collection.Races();
		var raceList = new BBLM.View.RacesList({collection: raceCollection});
		$("#content").html(raceList.render().el);
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