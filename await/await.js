const numberAPI = "http://numbersapi.com/";

async function processForm(evt) {
	evt.preventDefault();

	let num = $(evt.target).find("input")[0].value;
	console.log(num);
	for (let i = 0; i < 4; i++) {
		let res = await axios.get(`${numberAPI}${num}/trivia?json`);
		handleResponse(res.data);
	}
}

function handleResponse(resp) {
	$("#lucky-results").append(`<p>${resp.text}.<p/>`);
}

$("#lucky-form").on("submit", processForm);
