function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// function deck_is_favorite(id) {
//     console.log(id);
//     return fetch(`/deck_is_favorite/${id}/`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         }
//     }).then(response => response.json());
// }