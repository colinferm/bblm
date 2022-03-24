BBLM.Model.Position = Backbone.Model.extend({
	urlRoot: '/api/positions'
});

BBLM.Collection.Positions = Backbone.Collection.extend({
	model : BBLM.Model.Position,
	urlRoot: '/api/races/positions/'
});