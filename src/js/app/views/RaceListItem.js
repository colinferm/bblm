BBLM.View.RaceListItem = Backbone.View.extend({
	tagName: 'tr',
	templateName: 'races-list-item',

	events: {
		'click th': 'seeDetail'
	},

	initialize: function() {
		this.template = Handlebars.compile(BBLM.Util.Templates.get(this.templateName));
		this.listenTo(this.model, 'sync change', this.render)

		_.bindAll(this, 'seeDetail');
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));

		return this;
	},

	seeDetail: function() {
		app.navigate('race/'+this.model.id, {trigger: true});
	}
});