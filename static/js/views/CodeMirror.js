app.view.CodeMirror = function() {
	this.init();
};

app.view.CodeMirror.prototype = {

	// Haxe code marker css selector
	haxeCodeSel: '.code-haxe',
	// XML code fragment selector
	xmlCodeSel: '.code-xml',
	// CodeMirror config
	codeMirrorConfig: {
		mode: "haxe",
		lineNumbers: true,
		theme: "hexmachina",
		lineWrapping: true,
		readOnly: true,
		extraKeys: {
			"Ctrl-Q": function (cm) {
				cm.foldCode(cm.getCursor());
			}
		},
		foldGutter: true,
		gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
	},

	init: function() {
		this.haxeCodeFragments = $(this.haxeCodeSel);
		this.xmlCodeFragments = $(this.xmlCodeSel);
		this.placeCodeMirrors();
	},

	placeCodeMirrors: function() {
		var i,
			fragmentsLength = this.haxeCodeFragments.length,
			xmlCodeFragmentsLength = this.xmlCodeFragments.length;

		for (i = 0; i < fragmentsLength; i++) {
			CodeMirror.fromTextArea(this.haxeCodeFragments.get(i), this.codeMirrorConfig);
		}
		for (i = 0; i < xmlCodeFragmentsLength; i++) {
			CodeMirror.fromTextArea(this.xmlCodeFragments.get(i), this.codeMirrorConfig);
		}
	}

};