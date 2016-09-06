app.ReadMore = function(elSel, showMoreText, showLessText) {
		this.initialize(elSel, showMoreText, showLessText);
		this.addEvents();
	};

app.ReadMore.prototype = {

	// Selector for hidden items should be revealed
	hideCls: 'hide',
	onReadMore: function (readMore) {},
	onReadLess: function (readMore) {},

	initialize: function(elSel, showMoreText, showLessText) {
		this.el = $(elSel);
		this.showMoreText = showMoreText;
		this.showLessText = showLessText;
		
		this.showMoreBtn = this.el.find('.read-more');
		this.hiddenItems = this.el.find('.reveal');
		
		this.showMoreBtn.text(showMoreText);
		//this.toggleVisibility();
	},

	toggleVisibility: function() {
		if (this.hiddenItems.hasClass(this.hideCls)) {
			this.hiddenItems.removeClass(this.hideCls);
			this.showMoreBtn.text(this.showLessText);
			this.onReadMore(this);
		}
		else {
			this.hiddenItems.addClass(this.hideCls);
			this.showMoreBtn.text(this.showMoreText);
			this.onReadLess(this);
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