BBLM.View.RacePositionItem = Backbone.View.extend({
	tagName: 'div',
	className: 'view-edit-row',
	templateName: 'race-position-item',

	initialize: function() {
		this.template = Handlebars.compile(BBLM.Util.Templates.get(this.templateName));
	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));

		var primarySkillInput = $('.primary-skills', this.el);
		primarySkillInput.tagsinput({
			itemValue: "id",
			itemText: "code",
			tagClass: "autocomplete-tag"
		});

		var secondarySkillInput = $('.secondary-skills', this.el);
		secondarySkillInput.tagsinput({
			itemValue: "id",
			itemText: "code",
			tagClass: "autocomplete-tag"
		});

		var skillTypes = this.model.get('skill_types');
		_.every(skillTypes, function(skill){
			if (skill.primary) {
				primarySkillInput.tagsinput('add', skill);
			} else {
				secondarySkillInput.tagsinput('add', skill);
			}
		}, this);

		var skills = $('.position-skills', this.el);
		skills.tagsinput({
			itemValue: "id",
			itemText: "name",
			tagClass: "autocomplete-tag"
		});
		
		assignedSkills = this.model.get("skills");
		_.every(assignedSkills, function(skill){
			skills.tagsinput('add', skill);
		}, this);

		return this;
	}

})