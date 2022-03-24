BBLM.View.Breadcrumbs = Backbone.View.extend({
	tagName: 'div',
	templateName: 'breadcrumbs',

	initialize: function() {
		this.template = Handlebars.compile(BBLM.Util.Templates.get(this.templateName));
	},

	render: function() {
		$(this.el).html(this.template({}));

		return this;
	}
});