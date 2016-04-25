var vehicle = {
    name: "Audi",

    drive: function () {
        console.log("Running");
    },

    stop: function () {
        console.log("Stopped");
    }
};

var myCar = Object.create(vehicle);

// Outputs: Audi
console.log(myCar.name);

// ===============================
var vehicle2 = {
    getModel: function () {
        console.log("The model of this vehicle is " + this.model);
    }
}

var car = Object.create(vehicle2, {
    model: {
        valuee: "Ford",
        enumerable: true
    }
});

console.log(car.getModel());
