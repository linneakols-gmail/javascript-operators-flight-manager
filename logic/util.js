"use strict"
function Util() {

    function calculateTotalDistributedPassengers(passengerDistribution) {
        const sum = Object.values(passengerDistribution).reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0)
        return sum

    }

    function calculateTotalNumberOfPassengers(amountOfPassengers) {
        return amountOfPassengers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    function checkInput(input) {
        if (!Number.isInteger(input) || input == null) {
            throw new Error("Input is null or not a number")
        }
    }

    function calculateTotalDistance(distances) {
        let sum = 0
        for (let num = 0; num < distances.length; num++) {
            if(distances[num] < 0) {
                continue
            }
            sum += distances[num]
        }
        return sum
    }

    function calculateBonusPoints(businessDistances, economyDistances, businessBonus, economyBonus) {
        const businessPoints = calculateTotalDistance(businessDistances) * businessBonus
        const economyPoints = calculateTotalDistance(economyDistances) * economyBonus
        return (businessPoints + economyPoints) / 100
    }


    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers,
        checkInput, calculateTotalDistance, calculateBonusPoints}
}

module.exports = Util()
