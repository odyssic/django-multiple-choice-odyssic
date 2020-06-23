console.log("hi");

function $(selector) {
    return document.querySelector(selector);
}

const nextCardButton = document.querySelector("#next");
const lastCardButton = $("#last");
const flipButton = document.getElementById("flip-button");

nextCardButton.addEventListener("click", function(event) {
    nextCard();
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

function revealDiv() {
    x.classlist.remove("hidden");
}

const lastCardMenu = document.getElementById("last-card");

function finalCard() {
    lastCardMenu.classList.remove("hidden");
}

function nextCard() {
    showLastCardButton();
    let cards = document.querySelectorAll(".card-container");
    let length = cards.length;
    let topCard = cards[length - 1];
    if (length > 1) {
        topCard.classList.add("hidden");
        topCard.classList.remove("card-container");
        console.log("topCard", topCard);
        console.log("length", length);
    } else {
        topCard.classList.add("hidden");
        topCard.classList.remove;
        lastCard();
        nextCardButton.classList.add("hidden");
        lastCardButton.classList.add("hidden");

        console.log("while loop ended");
    }
    return topCard, cards;
}

flipButton.addEventListener("click", function(event) {
    flipCard(topCard);
});

function flipCard(topCard) {
    topCard.classlist.add("flip-with-js");
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