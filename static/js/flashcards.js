let cards = document.querySelectorAll(".card-container");
let length = cards.length;
let topCard = cards[length - 1];

function getTopCardInitial() {
    console.log("topcard initial ran");
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
    console.log("arrangeCards ran");
    console.log("cards", cards);
    for (let i = 0; i < cards.length; i++) {
        console.log("cards.length", cards.length);
        cardsZIndex = cards[i].style.zIndex = +i;
        console.log("i", +i);
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
        console.log("next Card's topCard", topCard);
        console.log("next Card length", length);
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
    console.log("prior card legnth", length);
    console.log("hidden cards", hiddenCards);

    if (hiddenCardsLength > 0) {
        topCard = hiddenCards[0];
        console.log("'last' topCard", topCard);
        topCard.classList.remove("hidden");
        topCard.classList.add("card-container");

        console.log("topCard leaving equation", topCard);
        return topCard;
    } else {
        alert("There are no prior cards!");
        topCard = getTopCardInitial();
        return TopCard;
    }
}

function flipTopCard(topCard) {
    let topCardChild = topCard.firstElementChild;
    console.log("topCardChild", topCardChild);
    let innerCard = topCardChild.children[0];
    console.log("innerCard", innerCard);

    if (innerCard.classList.contains("flip-with-js")) {
        innerCard.classList.remove("flip-with-js");
    } else {
        innerCard.classList.add("flip-with-js");
    }
    console.log("topCard flipping", topCard);
    console.log("topCard flipping class applied to innerCard", innerCard);
}

flipButton.addEventListener("click", function(event) {
    flipTopCard(topCard);
});