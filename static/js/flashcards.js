var ProgressBar = require("progressbar.js");
var line = new ProgressBar.Line(".container");

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
        console.log("topCard", topCard);
        console.log("length", length);
    } else {
        topCard.classList.add("hidden");
        showFinalCardMenu();
        hideFlipMenu();
        console.log("while loop ended");
    }
    return topCard, cards;
}

function showPreviousCard() {
    let cards = document.querySelectorAll(".card-container hidden");
    let length = cards.length;
    let topCard = cards[length - 1];
    if (length > 1) {
        topCard.classList.remove("hidden");
        console.log("topCard", topCard);
        console.log("length", length);
    } else {
        topCard.classList.add("hidden");
        topCard.classList.remove;
        showFinalCardMenu();
        hideFlipMenu();
        console.log("while loop ended");
    }
    return topCard, cards;
}

// progress bar
var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    from: { color: "#FFEA82" },
    to: { color: "#ED6A5A" },
    step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
    },
});

bar.animate(1.0);