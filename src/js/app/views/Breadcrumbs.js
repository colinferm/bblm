BBLM.View.Breadcrumbs = Backbone.View.extend({
	tagName: 'div',
	templateName: 'breadcrumbs',

	initialize: function() {
		this.template = BBLM.Util.Templates.get(this.templateName);
	},

	render: function() {
		$(this.el).html(Mustache.render(this.template, this.model.toJSON()));

		return this;
	}
});