
function init() {
 	const cards = document.querySelectorAll('.card-stack a');
	const choose = document.getElementById('choose');
	const question = document.getElementById('question');
	let answer = document.getElementById('answer');
	let chosenCard;
	
	cards.forEach(function(item) {
	  	item.onclick = function() {
			/* item.dataset.cardText */
			chosenCard = item.querySelector('div').innerHTML.trim();
			chosenCard = chosenCard.replace(/\.$/, '');
			answer.innerHTML = chosenCard;
			answer.classList.add('chosen');
		  	console.log("Selected: " + chosenCard);
			return false;
	  	}
	});
	
	choose.onclick = function() {
		word = question.querySelector('.word');
		word.innerHTML = answer.innerHTML;
		console.log("Choose: " + chosenCard);
		return false;
	};
}

init();