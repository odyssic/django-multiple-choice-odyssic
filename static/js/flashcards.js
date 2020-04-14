console.log("hi");

// document.addEventListener('DOMContentLoaded', function() {
//     main()
// })
// whatever you want to do when the page loads

function $(selector) {
    return document.querySelector(selector);
}

const nextCardButton = document.querySelector("#next");
const lastCardButton = $("#last");

nextCardButton.addEventListener("click", function(event) {
    nextCard();
});

lastCardButton.addEventListener("click", function(event) {
    lastCard();
});

// hiddenCards = []

function nextCard() {
    showLastCardButton();
    let topCard = document.querySelector(".flip-card");

    startCards = [];
    shuffledDeck = document.querySelectorAll("flip-card");
    startCards.push(shuffledDeck);
    console.log("topCard:", topCard);
    topCard.classList.add("hidden");
    topCard.classList.remove("flip-card");
    allCards = [];
    allCards.push(topCard);
}

function arrangeCards() {
    let cards = document.querySelectorAll(".flip-card")
    for (const card of cards) {
        console.log('cards: ', card);
    }
}





function showLastCardButton() {
    lastCardButton.classList.remove("hidden");
    lastCardButton.classList.add("fliplink");
    return lastCardButton;
}

function lastCard() {
    // let sallCards = Array.from(document.querySelectorAll('flip-card'))
    // let count = allCards.length
    topCard = document.querySelector(".hidden");
    topCard.classList.add("flip-card");
    topCard.classList.remove("hidden");
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