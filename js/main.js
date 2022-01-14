$(document).ready(function () {
	$('.menuToggle').click(function () {
		$('.menuToggle,.header_body,header').toggleClass('active');

		$('.header_list').slideToggle(300);
		$('.call').slideToggle(300);
	})
});
/*pop up */
const openPopUp = document.getElementsByClassName('open_pop_up');
const closePopUp = document.getElementsByClassName('pop_up_close');
const popUp = document.getElementsByClassName('pop_up');

openPopUp.addEventListener('click', function (e) {
	e.preventDefault();
	popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})