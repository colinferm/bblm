BBLM.View.RacesList = Backbone.View.extend({
	tagName: 'div',
	className: 'container',
	templateName: 'races-list',
	el: '#content',

	/*

	events: {
		'click button.add-new': 'addNewRace'
	},
	*/

	initialize: function() {
		this.template = _.template(BBLM.Util.Templates.get(this.templateName));
		this.listenTo(this.collection, 'sync change', this.render)
		this.collection.fetch();
	},

	render: function() {
		$(this.el).html(this.template({}));
		var list = this.$('tbody').empty();
		this.collection.each(function(model){
			var listItem = new BBLM.View.RaceListItem({model: model});
			list.append(listItem.render().$el);
		});

		return this;
	},

	addNewRace: function() {
		app.navigate("race/new", {trigger: true});
	}
});