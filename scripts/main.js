import { guestList } from "./guests.js";
import { Services } from "./services.js";
import { destinationsList } from "./destinations.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Cider Falls Park</h1>

<main class="main-content">
    <section class="services">
        <h2>Park Services:</h2>
        ${Services()}
    </section>

    <section class="destinations">
        <h2>Destinations</h2>
        ${destinationsList()} 
    </section>

    <section class="guests">
        <h2>Guests</h2>
        ${guestList()}
    </section>
</main>
`

mainContainer.innerHTML = applicationHTML;


// mainContainer.innerHTML = Services()
// mainContainer.innerHTML += destinationsList()
// mainContainer.innerHTML += guestList()