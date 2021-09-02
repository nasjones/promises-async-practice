let deck_api = 'http://deckofcardsapi.com/api/deck/'
let deckId;

$(document).ready(()=>{
    axios.get(deck_api+'new/shuffle/?deck_count=1').then(res=>{
        console.log(res)
        deckId = res.data.deck_id
        console.log("done")
    }).catch(e=>{
        console.error(e)
    })
})

$('#hit').on('click',(e)=>{
    e.preventDefault()
    axios.get(deck_api+`${deckId}/draw/?count=1`).then(res=>{
        console.log(res)
        if (res.data.success){
       $("#card-display").html(`<img src="${res.data.cards[0].images.png}"/>`)
        }else{
            alert("No more cards refresh for a new deck.")
        }
    })
})