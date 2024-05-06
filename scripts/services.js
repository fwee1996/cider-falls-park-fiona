import { getServices, getDestinations, getServiceDestinations } from "./database.js"

const services = getServices()
const serviceDestinations = getServiceDestinations()

// Function whose responsibility is to find the destination for an serviceDestination
export const findDestination = (serviceDestination, allDestinations) => {
    let serviceDestinationDestination = null
    for (const destination of allDestinations) {
        if (destination.id === serviceDestination.destinationId) {
            //correction: destination.name instead of the whole destination object
            serviceDestinationDestination = destination.name
            break // Exit the loop once the destination is found
        }
    }
    return serviceDestinationDestination
}


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.dataset.type === "service") {
        const serviceId = parseInt(itemClicked.dataset.id)
       
        let availableDestinations = []

        for (const serviceDestination of serviceDestinations) {
            if (serviceDestination.serviceId === serviceId) {
                const destination = findDestination(serviceDestination, getDestinations())
                availableDestinations.push(destination)
            }
        }


            window.alert(
                `${itemClicked.dataset.name} is available in ${availableDestinations.join(", ")}`
            )

    }
})

export const Services = () => {
    let html = "<ul>"

    for (const service of services) {
        html += `<li data-id="${service.id}" data-type="service" data-name="${service.name}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}
