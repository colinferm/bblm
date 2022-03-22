BBLM.Util.Templates = {
	loadTemplates: function(callback) {
		var templates = BBLM.Template;
		if (Object.keys(templates).length == 0) {
			$("script").each(function(index) {
				var tmpid = $(this).attr('id');
				if (tmpid) {
					templates[tmpid] = $(this).html();
				}
			});
			console.log("Loaded templates: " + templates.length);
		}
		callback();
	},

	get: function(name) {
		return BBLM.Template[name];
	}
}