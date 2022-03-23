BBLM.Util.Templates = {
	loadTemplates: function(callback) {;
		if (Object.keys(BBLM.Template).length == 0) {
			$("script").each(function(index) {
				var tmpid = $(this).attr('id');
				if (tmpid && $(this).attr('type') == 'text/template') {
					console.log(tmpid);
					BBLM.Template[tmpid] = $(this).html();
				}
			});
		}
		callback();
	},

	get: function(name) {
		return BBLM.Template[name];
	}
}

BBLM.Util.Dispatcher = {};
_.extend(BBLM.Util.Dispatcher, Backbone.Events);