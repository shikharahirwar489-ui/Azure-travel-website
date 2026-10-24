```javascript
// Mobile navigation
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}


// Search destinations
function searchDestinations() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const destination =
            card.getAttribute("data-name").toLowerCase();

        if (destination.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Book trip
function bookTrip(destination) {

    alert(
        "Great choice! 🌍\n\n" +
        "You selected: " + destination +
        "\n\nOur travel team will help you plan your trip."
    );
}


// Contact form
function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! ✈️\n\n" +
        "Your travel enquiry has been received."
    );

    event.target.reset();
}
```
