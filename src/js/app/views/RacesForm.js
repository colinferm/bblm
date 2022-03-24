BBLM.View.RacesForm = Backbone.View.extend({
	tagName: 'div',
	className: 'container position-form',
	templateName: 'races-form',
	el: '#content',
	isEditing: false,

	events: {
		'click .edit-positionals': 'changeToEditing',
		'click .cancel-positionals': 'endEditing'
	},

	initialize: function() {
		this.template = Handlebars.compile(BBLM.Util.Templates.get(this.templateName));

		if (this.model) {
			this.listenTo(this.model, 'sync change', this.render)
			this.model.fetch();
			this.isEditing = false;

		} else {
			this.isEditing = true;
		}

		if (this.collection) {
			console.log("Collection URL: " + this.collection.url)
			this.listenTo(this.collection, 'sync change', this.render)
			this.collection.fetch();
		}

		this.on('nowEditing', this.render);
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));

		var list = this.$('.view-edit-form tbody').empty();
		this.collection.each(function(model){
			var listItem = new BBLM.View.RacePositionItem({model: model});
			list.append(listItem.render().$el);
		});

		if (this.isEditing) {
			$('.add-new-position', this.el).css('display', 'inline-block');
			$('.edit-positionals', this.el).css('display', 'none');
			$('.cancel-positionals', this.el).css('display, inline-block');
			$('.display-form', this.el).css('display', 'none');
			$('.edit-form', this.el).css('display', 'table-row');
			$('.add-new-position-container', this.el).css('display', 'block');

		} else {
			$('.add-new-position', this.el).css('display', 'none');
			$('.edit-positionals', this.el).css('display', 'table-row');
			$('.cancel-positionals', this.el).css('display', 'none');
			$('.display-form', this.el).css('display', 'table-row');
			$('.edit-form', this.el).css('display', 'none');
			$('.add-new-position-container', this.el).css('display', 'none');
		}
		return this;
	},

	changeToEditing: function() {
		this.isEditing = true;
		this.trigger('nowEditing');
	},

	endEditing: function() {
		this.isEditing = false;
		this.trigger('nowEditing');
	}
});