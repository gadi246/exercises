/**
 * Created by Noa on 7/8/2016.
 */
/*
 You are creating an auto shop program. This program has several parts to build a vehicle. You will be able to set the currency, get the total price of the vehicle (sum of price cost), and calculate how long the vehicle can move, and how much it will cost for an amount of fuel.

 1. Create a `Part` constructor.
 Part will have a `setPrice` and `getPrice` methods.
 The `getPrice` method will accept a currency object and return a calculated price based on the currency value. (price * currency.value).

 2. Create an `NitroEngine` constructor.
 It will have a `Part` prototype, and a price of 1000.
 It will have a property of speed=140.

 3. Create an `JetEngine` constructor.
 It will have a `Part` prototype, and a price of 2000.
 It will have a property of speed=180.

 4. Create a `Wheel` constructor
 It will have a `Part` prototype, and a price of 200.

 4. Create a `FuelTank` constructor
 It will accept fuelType object, and amount in the constructor.
 It will have a `Part` prototype, it's price will be calculated when initiated (fuelType.price * amount).

 5. Create a `Vehicle` constructor.
 I will accept currency object, and parts array in the constructor.
 Its price will be calculated from the sum of the price of its parts.
 It will have a move method, which will accept fuel amount (integet).
 - The move method will print the moved distance (speed * fuelAmount)
 - If the vehicle has an Engine, it will print the price of the fuel tank in the vehicle's currency.
 - If the vehicle has no Engine, it will print `Vehicle has no engine!`


 */


//-----------------------------------
// Your code here
//-----------------------------------
function Part(_price) {
    this.price = _price || 0;
}
Part.prototype.setPrice = function(newPrice){
    this.price = newPrice;
}
Part.prototype.getPrice = function(currency){
    return this.price * currency.value;
}

function NitroEngine() {
    this.speed = 140;
}
function JetEngine() {
    this.speed = 180;
}
function Wheel() {}
function FuelTank(fuelType, amount) {
    this.amount = amount;
    this.fuelType = fuelType;
    this.price = fuelType.price * this.amount;
    }

    function extend(child, parent) {
        // Prototypical inheritance shortcut
        child.prototype = parent;
        child.prototype.constructor = child;
    }

    extend(NitroEngine, new Part(1000));
    extend(JetEngine, new Part(2000));
    extend(Wheel, new Part(200));
    extend(FuelTank, new Part());


    function Vehicle(currency, parts) {
        this.getPrice = function () {
            var sum = 0;
            for (var i = 0; i < parts.length; i++) {
                sum += parts[i].getPrice(currency);
            }
            return sum;
        }
        this.move = function (amount) {
            var hasEngine = false;
            for (var j = 0; j < parts.length; j++) {
                if (parts[j] instanceof NitroEngine || parts[j] instanceof JetEngine) {
                    hasEngine = true;
                    return  parts[j].speed * amount;
                }

            }
            if(!hasEngine){return "vehicle has no engine";}
        }

}


    var FUEL_TYPES = {
        Jet: { price: 5 },
        Nitro: { price: 3 }
    }

    var Currency = {
        Dollar: {value: 1, sign: "$"},
        Euro: {value: 1.2, sign: "€"},
        NIS: {value: 3.8, sign: "₪"}
    }



//-----------------------------------
// Your code should pass these tests
//-----------------------------------

    var raceCar = new Vehicle(Currency.NIS, [
        new NitroEngine(),
        new Wheel(),
        new Wheel(),
        new Wheel(),
        new Wheel()
    ]);

    console.log("Racecar:")
    console.log("price", raceCar.getPrice()) // 6840₪;
    console.log(raceCar.move(10)) // Moves 1400, Costs 114₪;

    var airPlane = new Vehicle(Currency.Dollar, [
        new JetEngine()
    ]);

    console.log("Airplane:")
    console.log("price", airPlane.getPrice()) // 2000$;
    console.log(airPlane.move(10)) // Moves 1800, Costs 50$;

    var brick = new Vehicle(Currency.Euro, [
        new Wheel(),
        new Wheel(),
        new Wheel(),
        new Wheel()
    ]);

    console.log("Brick:")
    console.log("price", brick.getPrice()) // 960€;
    console.log(brick.move(10))// Moves 0, Vehicle has no engine!;


