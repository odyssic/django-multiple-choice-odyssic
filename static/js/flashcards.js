const flipButton = document.getElementById("flip-button");
const flipLinkContainer = document.getElementById("fliplink-container");

flipButton.addEventListener("click", function(event) {
    flipTopCard();
});

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

// sets z index for all loaded cards on page and get top card

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

const lastCardMenu = document.getElementById("last-card");

function showFinalCardMenu() {
    lastCardMenu.classList.remove("hidden-last-card-menu");
}

function hideFlipMenu() {
    flipLinkContainer.classList.add("hidden");
}

function nextCard() {
    let cards = document.querySelectorAll(".card-container");
    let length = cards.length;
    let topCard = cards[length - 1];
    if (length > 1) {
        topCard.classList.add("hidden");
        topCard.classList.remove("card-container");
        console.log("next Card's topCard", topCard);
        console.log("next Card length", length);
    } else {
        topCard.classList.add("hidden");
        showFinalCardMenu();
        hideFlipMenu();
        console.log("while loop ended");
    }
    return topCard, cards;
}

function showPreviousCard() {
    let cards = document.querySelectorAll(".hidden");
    let topCard = cards[0];
    console.log("card at index 0", cards[0]);
    console.log("'last' topCard", topCard);
    topCard.classList.remove("hidden");

    console.log(cards.length);

    return topCard, cards;
}

function flipTopCard() {
    console.log("flip top card ran");
    let cards = document.querySelectorAll(".card-container");
    let length = cards.length;
    let topCard = cards[length - 1];

    let topCardChild = topCard.firstElementChild;
    console.log("topCardChild", topCardChild);
    let innerCard = topCardChild.children[0];

    if (innerCard.classList.contains("flip-with-js")) {
        innerCard.classList.remove("flip-with-js");
    } else {
        innerCard.classList.add("flip-with-js");
    }

    console.log("innerCard", innerCard);
    console.log("topCard", topCard);
    console.log("length", length);

    return topCard, cards;
}