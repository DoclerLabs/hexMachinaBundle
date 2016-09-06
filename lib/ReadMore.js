app.ReadMore = function(elSel) {
		this.initialize(elSel);
		this.addEvents();
	};

app.ReadMore.prototype = {

	// Selector for hidden items should be revealed
	hideCls: 'hide',

	initialize: function(elSel) {
		this.el = $(elSel);
		this.showMoreBtn = this.el.find('.read-more');
		this.hiddenItems = this.el.find('.reveal');
		
		//this.toggleVisibility();
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
		this.showMoreBtn.click(function () {
			this.toggleVisibility();
			
			//CodeMirror fix
			$('.CodeMirror').each(function(i, el) {
				el.CodeMirror.refresh();
			});
		}.bind(this));
	}
};