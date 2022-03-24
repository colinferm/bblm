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

Handlebars.registerHelper('yesNo', function(boolVal) {
	if (boolVal) return "Yes";
	return "No";
});
Handlebars.registerHelper('primarySkill', function(obj) {
	if (obj.primary) {
		return obj.code;
	}
	return;
});
Handlebars.registerHelper('secondarySkill', function(obj) {
	if (!obj.primary) {
		return obj.code;
	}
	return;
});
Handlebars.registerHelper('gold', function(num) {
	var num = Number(num).toFixed(0);
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});