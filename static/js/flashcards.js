console.log('hi')

// document.addEventListener('DOMContentLoaded', function() {
//     main()
// })
// whatever you want to do when the page loads

function $(selector) {
    return document.querySelector(selector)
}

const nextCardButton = $("#next")
const lastCardButton = $("#last")
    // const cards = $("#")
const flipButton = $("#flip")

function nextCard() {
    // top card removed
    cardsOnPage = document.getElementsByClassName('flip-card');
    cards = []
    cards.push(cardsOnPage)
    console.log('cards = ',
        cards)
    topCard = cards.shift();
    console.log('top card =',
            topCard)
        //top card added to end of array
    cards.push(topCard);
    console.log(cards);

    return cards
    console.log('its working!')
}

nextCardButton.addEventListener('click', function(event) {
    nextCard();
    console.log('Next Card Pressed!')
});

// flipButton.addEventListender('click', function(event) {
//     clipCard();

// })

// function flipCard() {
//     const card = $()


// }

// lastCardButton.addEventListener('mousedown', function(event) {

// });



// topCard = cards[0]
// index = cards[i]
// nextCard = card[i + 1]
// nextCard = cards[i - 1]}



//add event listeners to buttons...banner-heading


// Event listener 
// back
// go to the last card shown (reorder so that index position is visible)

// next
// next random card

// delete
// event listener on card perhaps, to delete the card. 


// back, next, flip, deletecard, addcard

// switch decks

// FUNCTIONS

// flip card (front to back) change classes (simple)

// function show next card

// function show last card

// function delete card

// switch decks