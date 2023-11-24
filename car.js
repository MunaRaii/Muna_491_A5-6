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

    honk(){
        console.log('Tuut tuut');
        console.log(`The brand ${this.brand} ,${this.model} model came with astonishing ${this.color} color is priced at $${this.price} in ${this.year} year`);
    }

}

// invoking class through this objects
const honda = new Car('Honda', 'MN-E', 2020, 'White', 40000, 50);
honda.honk();