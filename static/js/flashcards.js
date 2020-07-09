let cards = document.querySelectorAll(".card-container");
let length = cards.length;
let topCard = cards[length - 1];

function getTopCardInitial() {
    cards = document.querySelectorAll(".card-container");
    length = cards.length;
    topCard = cards[length - 1];
    return topCard;
}

const flipButton = document.getElementById("flip-button");
const flipLinkContainer = document.getElementById("fliplink-container");

function $(selector) {
    return document.querySelector(selector);
}

const nextCardButton = document.querySelector("#next");
const lastCardButton = $("#last");

nextCardButton.addEventListener("click", function(event) {
    nextCard();
});

lastCardButton.addEventListener("click", function(event) {
    showPreviousCard();
});

window.onload = arrangeCards();

const lastCardMenu = document.getElementById("last-card");

function showFinalCardMenu() {
    lastCardMenu.classList.remove("hidden-last-card-menu");
}

function hideFlipMenu() {
    flipLinkContainer.classList.add("hidden");
}

function arrangeCards() {
    for (let i = 0; i < cards.length; i++) {
        console.log("cards.length", cards.length);
        cardsZIndex = cards[i].style.zIndex = +i;
    }
    return cards, topCard, length;
}

function nextCard() {
    cards = document.querySelectorAll(".card-container");
    length = cards.length;
    topCard = cards[length - 1];
    if (length > 1) {
        topCard.classList.add("hidden");
        topCard.classList.remove("card-container");
    } else {
        topCard.classList.add("hidden");
        showFinalCardMenu();
        hideFlipMenu();
    }
    cards = document.querySelectorAll(".card-container");
    length = cards.length;
    topCard = cards[length - 1];

    return topCard, length;
}

function showPreviousCard() {
    hiddenCards = document.querySelectorAll(".hidden");
    hiddenCardsLength = hiddenCards.length;

    if (hiddenCardsLength > 0) {
        topCard = hiddenCards[0];
        topCard.classList.remove("hidden");
        topCard.classList.add("card-container");

        return topCard;
    } else {
        alert("There are no prior cards!");
        topCard = getTopCardInitial();
        return TopCard;
    }
}

function flipTopCard(topCard) {
    let topCardChild = topCard.firstElementChild;
    let innerCard = topCardChild.children[0];

    if (innerCard.classList.contains("flip-with-js")) {
        innerCard.classList.remove("flip-with-js");
    } else {
        innerCard.classList.add("flip-with-js");
    }
}

flipButton.addEventListener("click", function(event) {
    flipTopCard(topCard);
});