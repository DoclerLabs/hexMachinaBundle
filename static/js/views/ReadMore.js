app.ReadMore = function(elSel, showMoreText, showLessText) {
	this.initialize(elSel, showMoreText, showLessText);
	this.addEvents();
};

app.ReadMore.prototype = {

	// Read more button selector
	readMoreBtnSel: '.read-more',
	// These elements will be visible after clicking .read-more
	revealSel: '.reveal',
	// Selector for hidden items should be revealed
	hideCls: 'hide',
	// Code mirror selector
	codeMirrorSel: '.CodeMirror',
	// Pages enabled for auto toggling visibility
	autoTogglePageClasses: ['home'],


	initialize: function(elSel, showMoreText, showLessText) {
		this.body = $(document.body);
		this.el = $(elSel);
		this.codeMirrorItems = this.el.find(this.codeMirrorSel);
		this.showMoreText = showMoreText;
		this.showLessText = showLessText;
		this.showMoreBtn = this.el.find(this.readMoreBtnSel);
		this.hiddenItems = this.el.find(this.revealSel);

		if (this.body.attr('class').indexOf(this.autoTogglePageClasses) !== -1) {
			setTimeout(this.toggleVisibility.bind(this), 0);
		}
	},

	/**
	 * Triggers visibility change on .reveal elements
	 * Refreshes codemirror items
	 * Changes text if params given at instantiation
	 *
	 * @param {object} ev   Event Object
	 *
	 * @return {void}
	 */
	onShowMoreButtonClick: function(ev) {
		console.info('#onShowMoreButtonClick');
		ev.preventDefault();
		var target = $(ev.target);
		this.toggleVisibility();
		this.refreshCodeMirror();
		this.changeText(target);
	},

	refreshCodeMirror: function() {
		this.codeMirrorItems.each(function(i, el) {
			el.CodeMirror.refresh();
		});
	},

	changeText: function(target) {
		if (this.showMoreText && target.html() === this.showMoreText) {
			target.html(this.showLessText);
		}
		else if (this.showMoreText && target.html() === this.showLessText) {
			target.html(this.showMoreText);
			target.get(0).scrollIntoView();
		}
	},

	toggleVisibility: function() {
		if (this.hiddenItems.hasClass(this.hideCls)) {
			this.hiddenItems.removeClass(this.hideCls);
		}
		else {
			this.hiddenItems.addClass(this.hideCls);
		}
	},

	addEvents: function() {
		this.showMoreBtn.click($.proxy(this.onShowMoreButtonClick ,this));
	}

};