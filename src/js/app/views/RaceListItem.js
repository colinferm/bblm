BBLM.View.RaceListItem = Backbone.View.extend({
	tagName: 'tr',
	templateName: 'races-list-item',

	initialize: function() {
		this.template = _.template(BBLM.Util.Templates.get(this.templateName));
		this.listenTo(this.model, 'sync change', this.render)
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));

		return this;
	}
});