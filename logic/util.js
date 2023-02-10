function Util() {

    function calculateTotalDistributedPassengers(passengerDistribution) {
        const sum = Object.values(passengerDistribution).reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0)
        return sum

    }

    function calculateTotalNumberOfPassengers(amountOfPassengers) {
        return amountOfPassengers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util()
