class ElectricalAppliance {
    constructor(name, brand, power) {
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.unplugged = true;
    }

    getPower = function() {
        console.log(`${this.name} of ${this.brand} brand has power of ${this.power} W`)
        return this.power;
    }

    off = function () {
        this.unplugged = true;
        console.log(`${this.name} is switched off`);
        return this.unplugged
    }

    on = function () {
        this.unplugged = false;
        console.log(`${this.name} is switched on`);
        return this.unplugged
    }

    getBrand = function () {
        return this.brand
    }
}

class Computer extends ElectricalAppliance {
    constructor(brand, diagonal) {
        super('Computer', brand, 800);
        this.diagonal = diagonal;
    }
    getScreen = function () {
        console.log(`Diagonal of ${this.getBrand()} computer screen ${this.diagonal} inches`);
        return this.diagonal;
    }
}

class Fridge extends ElectricalAppliance {
    constructor(brand, hasFreezer) {
        super("Fridge", brand, 500);
        this.hasFreezer = hasFreezer;
    }
    getDefrost = function () {
        if (this.hasFreezer) {
            console.log(`${this.name} is unfrozen`);
        } else {
            console.log(`${this.name} cannot be unfrozen`);
        }
    }
}

const laptop = new Computer('HP', 15);
const fridge = new Fridge('LG', true);
laptop.getPower();
fridge.getPower();
laptop.off();
fridge.on();
laptop.getScreen();
fridge.getDefrost();
