BBLM.Model.Race = Backbone.Model.extend({
	urlRoot: '/api/races'
});

BBLM.Collection.Races = Backbone.Collection.extend({
	model : BBLM.Model.Race,
	url: '/api/races'
});