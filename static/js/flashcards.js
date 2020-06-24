console.log("hi");

const flipButton = document.getElementById("flip-button");
const flipLinkContainer = document.getElementById("fliplink-container");

flipButton.addEventListener("click", function(event) {
    flipTopCard();
});

function flipTopCard() {
    console.log("flip top card ran");
    let cards = document.querySelectorAll(".card-container");
    let length = cards.length;
    let topCard = cards[length - 1];

    let topCardChild = topCard.firstElementChild;
    console.log("topCardChild", topCardChild);
    let innerCard = topCardChild.children[0].classList.add("flip-with-js");
    console.log("innerCard", innerCard);
    console.log("topCard", topCard);
    console.log("length", length);

    return topCard, cards;
}

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

function finalCard() {
    lastCardMenu.classList.remove("hidden");
}

function hideFlipMenu() {
    flipLinkContainer.classList.add("hidden");
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
        hideFlipMenu();
        console.log("while loop ended");
    }
    return topCard, cards;
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