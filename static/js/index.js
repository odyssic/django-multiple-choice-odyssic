const deck = document.querySelectorAll(".deck");
console.log(deck);
console.log("type of ", typeof deck);
console.log(deck.children);

deck.addEventListener("mouseover", function(event) {
    showMenu();
});

deck.addEventListener("mouseout", function(event) {
    hideMenu();
});

const deckLinks = document.querySelector(".minilinks-container");

function showMenu() {
    deckLinks.classList.remove("hidden");
    console.log("showmenu ran");
}

function hideMenu() {
    deckLinks.classList.add("hidden");
    console.log("hideMenu ran");
}