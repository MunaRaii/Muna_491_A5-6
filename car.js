class Car{
    // initializing properties
    constructor(brand, model, year, color, price, gas){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    // display honk sound and information about car
    honk(){
        console.log('Tuut tuut');
        console.log(`The brand ${this.brand} ,${this.model} model came with astonishing ${this.color} color is priced at $${this.price} in ${this.year} year`);
    }

    // calculate the turns in the race
    race(){

        // calculate amount of gas to be deducted on the basis of car's age
        let gasLoss = 5;
        if(this.year < new Date().getFullYear()){
            gasLoss += (new Date().getFullYear() - this.year);
        }
        this.gas -= gasLoss;
        console.log(`${this.brand} of ${this.model} has {this.gas} liters of gas remaining`);
    }

}

// car objects
const honda = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const ford = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const bmw = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const mazda = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const audi = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const kia = new Car('Kia', 'Forte', 2020, 'blue', 21000, 56);

// invoking honk() for each car
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

// race for 7 turns
for(let turn = 1; turn <= 7; turn++){
    console.log(`\nTurn ${turn}: `);
    honda.race();
    ford.race();
    bmw.race();
    mazda.race();
    audi.race();
    kia.race();
}