app.page.all = function() {
	console.info('#Runningalll');
	new app.view.CodeMirror();
	new app.view.MobileMenu();
	new app.view.GoogleSearch();
};

app.page.home = function() {
	app.$carousel = new Flickity('.flickity', {
		wrapAround: true,
		prevNextButtons: false
	});

	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
	$('.carousel-section').parallax({imageSrc:  siteConfig.baseUrl  + '/img/pattern-cover.jpg'});
	new app.ReadMore('.features', true);
	particlesJS.load('particles-js', 'assets/particles.json', function() {});

};

app.page.docs = function() {
	new app.view.VerticalMenu();

	$('.code-snippets').each(function(number, snippet) {
		new app.ReadMore(snippet, "Show more »", "« Show less");
	});

	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
};

app.page.blog = function() {
	$(".box p").ellipsis({
		lines: 3,
		responsive: true
	});
	new app.view.VerticalMenu();
};

app.page.downloads = function() {
	new app.view.Clipboard();
};

app.page.post = function() {
	new app.view.VerticalMenu();
};