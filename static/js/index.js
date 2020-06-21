console.log("index js working");

const deck = document.querySelector(".deck");

const deleteButton = document.getElementById("delete-deck");

deleteButton.addEventListener("click", function(event) {
    confirmDelete();
});

function confirmDelete() {
    return confirm("Are you sure you want to delete this item?");
}

deck.addEventListener("mouseover", function(event) {
    revealButtons();
});

function revealButtons() {
    document.querySelector(".minilinks-container").classlist.remove("hidden");
}

item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

console.log("deck", deck);