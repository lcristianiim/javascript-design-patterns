var myModule = {
    name: 'fisherman',
    available: true,

    configuration: {
        color: 'red',
        accessories: 10
    },

    showStatus: function () {
        console.log ('The ' + this.name + ' is ' + (this.available ? "available " : "not available"));
    },

    changeAvailability: function (type) {
            myModule.available = type;
    }
}

// Outputs: The fisherman is available.
myModule.showStatus();

myModule.changeAvailability(false);

// Outputs: The fisherman is not available.
myModule.showStatus();

// Outputs: fisherman.
console.log(myModule.name);
