$(document).ready(function() {
	console.log('Hello my second year of suffering');


	$('.start-button').click(function() {

		gold = prompt('Хозяин, ой тфу, тоесть введите число.');

		for (var i = 0; i < 100 ; i++) {
			console.log( +gold + +i + ' ' + i + ' золота.');
		}
	});


});