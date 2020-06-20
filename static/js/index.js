console.log("index js working");

const deck = document.querySelector(".deck");

deck.addEventListener("mouseover", function(event) {
    revealButtons();
});

function revealButtons() {
    document.querySelector(".minilinks-container").classlist.remove("hidden");
}

item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

console.log("deck", deck);