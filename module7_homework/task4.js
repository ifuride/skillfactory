function ElectricalAppliance(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.unplugged = true;
}

ElectricalAppliance.prototype.getPower = function() {
    console.log(`${this.name} of ${this.brand} brand has power of ${this.power} W`)
    return this.power;
}

ElectricalAppliance.prototype.off = function () {
    this.unplugged = true;
    console.log(`${this.name} is switched off`)
}

ElectricalAppliance.prototype.on = function () {
    this.unplugged = false;
    console.log(`${this.name} is switched on`)
}

function Computer(brand, diagonal) {
    this.name = "Computer";
    this.brand = brand;
    this.diagonal = diagonal;
    this.power = 800;
}

Computer.prototype = new ElectricalAppliance();

Computer.prototype.getScreen = function () {
    console.log(`Diagonal of ${this.brand} computer screen ${this.diagonal} inches`);
    return this.diagonal;
}

function Fridge(brand, hasFreezer) {
    this.name = "Fridge";
    this.brand = brand;
    this.power = 500;
    this.hasFreezer = hasFreezer;
}

Fridge.prototype = new ElectricalAppliance();

Fridge.prototype.unfreeze = function () {
    if (this.hasFreezer) {
        console.log(`${this.name} is unfrozen`);
    } else {
        console.log(`${this.name} cannot be unfrozen`);
    }
}

const laptop = new Computer('HP', 15);
const fridge = new Fridge('LG', false);
laptop.getPower();
fridge.getPower();
laptop.off();
fridge.on();
laptop.getScreen();
fridge.unfreeze();
