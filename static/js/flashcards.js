console.log("hi");

function $(selector) {
    return document.querySelector(selector);
}

const nextCardButton = document.querySelector("#next");
const lastCardButton = $("#last");

nextCardButton.addEventListener("click", function(event) {
    nextCard();
    console.log(nextCardButton);
});

lastCardButton.addEventListener("click", function(event) {
    lastCard();
});

// sets z index for all loaded cards on page

function arrangeCards() {
    console.log("arrangeCards ran");
    let cards = document.querySelectorAll(".flip-card");
    console.log("cards", cards);
    for (let i = 0; i < cards.length; i++) {
        console.log("cards.length", cards.length);
        cardsZIndex = cards[i].style.zIndex = +i;
        console.log("i", +i);
    }
    return cards;
}

window.onload = arrangeCards();

function nextCard() {
    showLastCardButton();
    let cards = document.querySelectorAll(".flip-card");
    cardArray = Object.entries(cards);
    console.log(cardArray);
    let topCard = cardArray.slice(-1).pop();
    console.log("topcard", topCard);
    topCard.classList.add("hidden");
    topCard.classList.remove("flip-card");
    return cardArray;
}

function showLastCardButton() {
    lastCardButton.classList.remove("hidden");
    lastCardButton.classList.add("fliplink");
}

function lastCard() {
    topCard = document.querySelector(".hidden");
    topCard.classList.add("flip-card");
    topCard.classList.remove("hidden");
}