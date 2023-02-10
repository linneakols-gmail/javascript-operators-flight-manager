"use strict"

function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity) {
        if (!Number.isInteger(numberOfPassengers) || numberOfPassengers < 0) {
            throw new Error("The number of passengers must be a positive integer value")
        }
        if (!Number.isInteger(flightCapacity) || flightCapacity < 0) {
            throw new Error("The capacity of the flight must be a positive integer value")
        }

        return Math.ceil(numberOfPassengers / flightCapacity)
    }

    function checkAircraftRevision(distanceLimit, distances) {
        let totalDistance = distances.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        if (totalDistance <= distanceLimit / 2) {
            return "The revision needs to be done within the next 3 months"
        }
        if (totalDistance > (distanceLimit / 2) && totalDistance <= (distanceLimit * 0.75)) {
            return "The revision needs to be done within the next 2 months"
        }
        if (totalDistance >= (distanceLimit * 0.75) && totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month"
        }
        if (totalDistance > distanceLimit) {
            throw new Error("Distance is over the limit!")
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision}
}

module.exports = Flights()

