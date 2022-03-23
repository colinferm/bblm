BBLM.View.RacesList = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	templateName: 'races-list',
	el: '#content',

	events: {
		'click button.add-new': 'addNewRace'
	},

	initialize: function() {
		this.template = _.template(BBLM.Util.Templates.get(this.templateName));
	},

	render: function() {
		$(this.el).html(this.template({}));

		return this;
	},

	addNewRace: function() {
		app.navigate("race/new", {trigger: true});
	}
});