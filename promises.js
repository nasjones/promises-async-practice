const numberAPI = "http://numbersapi.com/";

function processForm(evt) {
	evt.preventDefault();
	$("b").empty();
    let num = $(evt.target).find("input")[0].value
    console.log(num)
	axios.get(`${numberAPI}${num}/trivia?json`).then(res=>{
        $("#lucky-results").empty()
        handleResponse(res.data);
        return axios.get(`${numberAPI}${num}/trivia?json`)
    }).then(res=>{
        handleResponse(res.data);
        return axios.get(`${numberAPI}${num}/trivia?json`)
    }).then(res=>{
        handleResponse(res.data);
        return axios.get(`${numberAPI}${num}/trivia?json`)
    }).then(res=>{
        handleResponse(res.data);
    }).catch(e=>{
        console.error("...there was a problem")
    })
	
}

function handleResponse(resp) {
	$("#lucky-results").append(`<p>${resp.text}.<p/>`);
}

$("#lucky-form").on("submit", processForm);