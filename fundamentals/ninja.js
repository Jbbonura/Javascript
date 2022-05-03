class Ninja {
    constructor (name, health) {
        this.speed = 3
        this.strength = 3
        this.name = name
        this.health= health
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log("Name", this.name)
        console.log("Strength", this.strength)
        console.log("Speed", this.speed)
        console.log("Health", this.health)
    }

    drinkSake() {
        this.health += 10
    }
}


class Sensi extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10

    }

    speakWisdom() {
        this.drinkSake()
        console.log("One fish two fish, my fish is not you fish...")
    }


}

const me = new Sensi("James")
me.speakWisdom()
me.showStats()