console.log("hi");

window.onload = arrangeCards();

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
    let cards = document.querySelectorAll(".flip-card");
    loopedCards = [];

    for (let card of cards) {
        for (let i = 0; loopedCards.length <= cards.length; i++) {
            console.log("loopedCards.length", loopedCards.length);
            console.log("cards.length", cards.length);

            card.style.zIndex = +i;
            console.log("i", i);
            console.log("zindex", (card.style.zIndex = +i));
            console.log(("id", card.id));
            loopedCards.push(card);
            console.log(loopedCards);
        }
    }
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