function Passengers() {

    function checkFlightCapacity(flightCapacity, passengersNumbers) {
        let numOfPassengers =  passengersNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        if (numOfPassengers < flightCapacity) {
            return numOfPassengers
        }
        throw new Error("No capacity")
    }

    function distributeAllSeatsToAllPassengers(VIPPassengers, regularPassengers, flights, businessSeats, economySeats) {
        let assignedVIPBusinessSeats = 0
        let assignedVIPEconomySeats = 0
        let assignedRegularBusinessSeats = 0
        let assignedRegularEconomySeats = 0

        const availableBusinessSeats = businessSeats * flights
        for (let seat = 0; seat < availableBusinessSeats; seat++) {
            let vip = false
            if (assignedVIPBusinessSeats == VIPPassengers && assignedRegularBusinessSeats == regularPassengers) { break }
            if (VIPPassengers - assignedVIPBusinessSeats > 0) {
                vip = true
                assignedVIPBusinessSeats++
            }
            if (!vip && (regularPassengers - assignedRegularBusinessSeats) > 0) {
                assignedRegularBusinessSeats++
            }
        }


        const availableEconomySeats = economySeats * flights
        for (let seat = 0; seat < availableEconomySeats; seat++) {
            let vip = false
            if (assignedVIPEconomySeats == VIPPassengers && assignedRegularEconomySeats == regularPassengers) { break }
            if (VIPPassengers - (assignedVIPEconomySeats + assignedVIPBusinessSeats) > 0) {
                vip = true
                assignedVIPEconomySeats++
            }
            if (!vip && regularPassengers - (assignedRegularEconomySeats + assignedRegularBusinessSeats) > 0) {
                assignedRegularEconomySeats++
            }
        }

        return {vipPassengersWithBusinessSeats: assignedVIPBusinessSeats,
            vipPassengersWithEconomySeats: assignedVIPEconomySeats,
            regularPassengersWithBusinessSeats: assignedRegularBusinessSeats,
            regularPassengersWithEconomySeats: assignedRegularEconomySeats}

    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}

}

module.exports = Passengers()

