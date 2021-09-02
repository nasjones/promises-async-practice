const numberAPI = "http://numbersapi.com/";

async function processForm(evt) {
	evt.preventDefault();

	let num = $(evt.target).find("input")[0].value;
	
	let req1 = await axios.get(`${numberAPI}${num}/trivia?json`);
	let req2 = await axios.get(`${numberAPI}${num}/trivia?json`);
	let req3 = await axios.get(`${numberAPI}${num}/trivia?json`);
	let req4 = await axios.get(`${numberAPI}${num}/trivia?json`);

	let res1 = await req1;
	let res2 = await req2;
	let res3 = await req3;
	let res4 = await req4;

	handleResponse(res1.data);
	handleResponse(res2.data);
	handleResponse(res3.data);
	handleResponse(res4.data);
}

function handleResponse(resp) {
	$("#lucky-results").append(`<p>${resp.text}.<p/>`);
}

$("#lucky-form").on("submit", processForm);
