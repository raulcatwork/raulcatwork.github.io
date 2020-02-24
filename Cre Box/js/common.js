$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn-active');
	$('.links-menu').toggleClass('links-menu-active');
});

// Насколько правильная эта часть кода?
window.onclick = function(event) {
  if (!event.target.matches('.menu-btn')) { 
    $('.links-menu').removeClass('links-menu-active'); // remove active class from the nav
    $('.menu-btn').removeClass('menu-btn-active'); // remove active class from button
  }
}