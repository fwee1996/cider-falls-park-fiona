import { getDestinations, getGuestList } from "./database.js"

const allDestinations = getDestinations()
const allGuests= getGuestList()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a destination list item clicked?
        if  (itemClicked.dataset.type==="destination"){
        
            // Get the id of the destination clicked
            const destinationId =itemClicked.dataset.id
             // Start a counter variable at 0
             let counter = 0
            for (const guest of allGuests) {
                // Does the destinationId foreign key match the id?
                if (guest.destinationId === parseInt(destinationId)) {
                    // Increase the counter by 1
                    counter++
                }
            }

            // Display the number of  guest carried by the destination
            window.alert(`There are ${counter} guests in the area`);
        }
    }
)


export const destinationsList = () => {
    let html = "<ul>"

    for (const destination of allDestinations) {
        html += `<li data-id="${destination.id}" data-type="destination">${destination.name}</li>`
    }

    html += "</ul>"

    return html
}