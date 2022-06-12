const hamburger = document.querySelector('.container .navbar .list .hamburger');
const mobile_menu = document.querySelector('.container .navbar .list ul');
const menu_item = document.querySelectorAll('.container .navbar .list ul li a');
const header = document.querySelector('.header .container');

// open and close menu manually
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

// the menu goes away after link is clickes
menu_item.forEach( link => {
	link.addEventListener('click', ()=> {
	  	hamburger.classList.remove('show');
		mobile_menu.classList ="initial";
	})
});