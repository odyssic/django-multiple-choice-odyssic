console.log('hi')

// document.addEventListener('DOMContentLoaded', function() {
//     main()
// })
// whatever you want to do when the page loads

function $(selector) {
    return document.querySelector(selector)
}

const nextCardButton = document.querySelector("#next")
const lastCardButton = $("#last")

const flipButton = $("#flip")

nextCardButton.addEventListener('click', function(event) {
    hideCard();
    console.log('Next Card Pressed!')
});

function hideCard() {
    // top card removed

    let getCard = document.querySelector('.flip-card');
    const getCardParent = getCard.parentElement;
    getCard.classList.add("hidden")

}

// function nextCard() {
//     // top card removed
//     getCards = document.querySelectorAll('flip-card');
//     console.log('cards on page: ', getCards)
//     cards.push(getCards)
//     console.log('cards = ',
//         cards)
//     topCard = cards.shift();
//     console.log('top card =',
//             topCard)
//         //top card added to end of array
//     cards.push(topCard);
//     console.log(cards);

//     return cards
//     console.log('its working!')
// }




// function nameValidate() {
//     const wholeName = document.querySelector("#name");
//     const wholeNameParent = wholeName.parentElement;

//     if (wholeName.value.length > 0 && wholeName.value.match(letters)) {
//         if (wholeNameParent.classList.contains("input-invalid")) {
//             wholeNameParent.classList.remove("input-invalid");
//             document.querySelector(".validation-message").remove();
//             wholeNameParent.classList.add("input-valid");
//         } else if (!wholeNameParent.classList.contains(".input-invalid")) {
//             wholeNameParent.classList.add("input-valid");
//         }
//     } else if (wholeName.value == "" || wholeName.value.match(numbers)) {
//         if (wholeNameParent.classList.contains("input-invalid")) {
//             return;
//         } else {
//             var block_to_insert;
//             var container_block;

//             block_to_insert = document.createElement("div");
//             block_to_insert.innerHTML = "* Valid Name Required";
//             block_to_insert.className = "validation-message";

//             container_block = document.querySelector("#name");

//             let validationMessageDiv = container_block.parentElement.appendChild(
//                 block_to_insert
//             );
//             validationMessageDiv.style.color = "white";
//             validationMessageDiv.style.flex = "flex";
//             validationMessageDiv.style.backgroundColor = "red";
//             validationMessageDiv.style.cornerRadius = "20px";
//             validationMessageDiv.style.padding = "5px";
//             validationMessageDiv.style.fontSizeAdjust = "0.10";
//             validationMessageDiv.style.margin = "10 px";
//             validationMessageDiv.style.textAlign = "center";

//             wholeNameParent.classList.add("input-invalid");
//         }
//     }
// }


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