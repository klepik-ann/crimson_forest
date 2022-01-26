$(document).ready(function () {
	$('.menuToggle').click(function () {
		$('.menuToggle,.header_body,header').toggleClass('active');

		$('.header_list').slideToggle(300);
		$('.call').slideToggle(300);
	})
});


/*pop up */


/*Рабочий варик */
// const openPopUp = document.getElementById('open_pop_up');
// const closePopUp = document.getElementById('pop_up_close');
// const popUp = document.getElementById('pop_up');

// openPopUp.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	popUp.classList.add('active');
// });

// closePopUp.addEventListener('click', () => {
// 	popUp.classList.remove('active');
// });

let popUp = document.querySelector('.pop_up');
let openPopup = document.querySelectorAll('.open_pop_up');
let closePopUp = document.querySelector('.pop_up_close');

openPopup.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		popUp.classList.add('active');

	});
});

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
});


/*кнопка подробнее */

function readMore() {
	let dots = document.getElementById("dots");
	let more = document.getElementById("more");
	let botn = document.getElementById("button_more");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		botn.innerHTML = "Подробнее";
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		botn.innerHTML = "Скрыть";
		more.style.display = "inline";
	}
};