/**
 * Autoload plugin
 * 
 * Depends on jWYSIWYG, autoload
 */
(function ($) {
	if (undefined === $.wysiwyg) {
		throw "wysiwyg.autoload.js depends on $.wysiwyg";
	}

	if (undefined === $.autoload) {
		throw "wysiwyg.autoload.js depends on $.autoload";
	}

	/*
	 * Wysiwyg namespace: public properties and methods
	 */
	var autoload = {
		name: "autoload",
		version: "",
		defaults: {
			baseFile:		"jquery.wysiwyg.js",
			cssPath:		"",
			controlPath:	"controls/",
			i18nPath:		"i18n/"
		},
		options: {},

		control: function (names, successCallback) {
			$.autoload.js(names, {"baseFile": this.options.baseFile, "jsPath": this.options.controlPath, "successCallback": successCallback});
		},

		init: function (Wysiwyg) {
			if (!Wysiwyg.options.plugins[this.name]) {
				return true;
			}

			var i;

			this.options = $.extend(true, this.defaults, Wysiwyg.options.plugins[this.name]);
		},

		lang: function (names, successCallback) {
			$.autoload.js(names, {"baseFile": this.options.baseFile, "jsPath": this.options.i18nPath, "successCallback": successCallback});
		}
	};

	$.wysiwyg.plugin.register(autoload);
	$.wysiwyg.plugin.listen("initFrame", "autoload.init");
})(jQuery);
