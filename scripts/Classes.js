class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food === 0) {
            this.isHealthy = false
        }
        else {
            this.food -= 1
        }
    }
}

class Wagon {
    constructor(numberOfSeats) {
        this.capacity = numberOfSeats
        this.passengers = []
    }
    getAvailableSeatCount() {
        if (this.capacity > 0) {
            return this.capacity
        } else {
            return 0
        }
    }
    join(Traveler) {
        if (this.capacity > 0) {
            this.passengers.push(Traveler)
            this.capacity -= 1
        }
    }
    shouldQuarantine() {
        const checkForHealthy = this.passengers.some(Traveler => Traveler.isHealthy === false)
        if (checkForHealthy === true) {
            return true
        } else {
            return false
        }
    }
    totalFood() {
        const passengerFoodArray = this.passengers.map(Traveler => Traveler.food)
        let totalFood = 0
        for (let index = 0; index < passengerFoodArray.length; index++) {
            totalFood = totalFood += passengerFoodArray[index]
        }
        return totalFood
    }
}