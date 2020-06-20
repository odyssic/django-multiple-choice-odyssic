console.log("hi");

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

function nextCard() {
    showLastCardButton();
    let cards = document.querySelectorAll(".card-container");
    console.log("cards type", typeof cards);
    // topCard = cards.slice(-1).pop();
    let length = cards.length;
    console.log(length);
    let topCard = cards[length - 1];
    topCard.classList.add("hidden");
    topCard.classList.remove("card-container");
    console.log("topCard", topCard);

    console.log("cards", cards);

    // cardArray = Object.entries(cards);
    // console.log(cardArray);
    // console.log("type of", typeof cardArray);
    // let topCard = cardArray.slice(-1).pop();
    // console.log(topCard, "topCard");
    // console.log("typeof topCard", typeof topCard);

    return cards;
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