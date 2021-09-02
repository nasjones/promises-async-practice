let deck_api = "http://deckofcardsapi.com/api/deck/";
let deckId;

$(document).ready(async () => {
	try {
		let res = await axios.get(deck_api + "new/shuffle/?deck_count=1");
		deckId = res.data.deck_id;
	} catch (e) {
		console.log(e);
	}
});

$("#hit").on("click", async (evt) => {
	evt.preventDefault();

	try {
		let res = await axios.get(deck_api + `${deckId}/draw/?count=1`);
		if (res.data.success) {
			$("#card-display").html(
				`<img src="${res.data.cards[0].images.png}"/>`
			);
		} else {
			alert("No more cards refresh for a new deck.");
		}
	} catch (e) {
		console.log(e);
	}
});
