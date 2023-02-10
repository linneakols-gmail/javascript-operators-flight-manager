"use strict"
function Prices() {

    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        const finalPrice = (basePrice + variationPassengerType) * (basePrice + variationFlightType) / 100
        return finalPrice
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let variationPassenger = 0
        let variationFlight = 0
        if (passengerType.toUpperCase() == "REGULAR") {
            variationPassenger = -5
        } else if (passengerType.toUpperCase() == "VIP") {
            variationPassenger = 5
        }

        if (flightType.toUpperCase() == "ECONOMY") {
            variationFlight = -3
        } else if (flightType.toUpperCase() == "BUSINESS") {
            variationFlight = 10
        }

        const finalPrice = (basePrice + variationPassenger) * (basePrice + variationFlight) / 100
        return finalPrice
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice) {
        const finalPrice = numberOfSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType)
        return finalPrice
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice}
}

module.exports = Prices()

