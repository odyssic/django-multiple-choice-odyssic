console.log('hi')

const nextCardButton = document.getElementById("next-card")
const lastCardButton = document.getElementById("last-card")
const cards = document.getElementById("#")


parkingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // nameValidate();

});

nextCardButton.addEventListener('click', function(event) {
    nextCard(cards);
    console.log('Next Card Pressed!')

});

lastCardButton.addEventListener('click', function(event) {

});

function nextCard(cards) {
    // top card removed
    cards = document.getElementsByClassName('flip-card');
    topCard = cards.shift();
    //top card added to end of array
    cards.push(topCard);
    console.log(cards);
    console.log('its working!')
    return cards

        [0, 1, 2, 3, 4, 5, 6] next cardd

        [1, 2, 3, 4, 5, 6, 0]




    // topCard = cards[0]
    // index = cards[i]
    // nextCard = card[i + 1]
    // nextCard = cards[i - 1]




}


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
function FlipCard()

}

// function show next card

// function show last card

// function delete card

// switch decks