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

function arrangeCards() {
    console.log("arrangeCards ran");
    let cards = document.querySelectorAll(".flip-card");
    for (let i = 0; i < cards.length; i++) {
        console.log("cards.length", cards.length);
        cards[i].style.zIndex = +i;
        console.log("i", +i);
    }
}

function nextCard(arrangedCards) {
    showLastCardButton();

    let shuffledDeck = document.querySelectorAll(".flip-card");
    console.log("shuffledDeck:", shuffledDeck);
    for (let i = 0; i < shuffledDeck.length; i++) {
        let topCard = shuffledDeck.shift;
        console.log("topCard:", topCard);
        topCard.classList.add("hidden");
        topCard.classList.remove("flip-card");
        allCards = [];
        allCards.push(topCard);
        console.log(allCards);
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