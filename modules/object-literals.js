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

myModule.showStatus();
myModule.changeAvailability(false);
myModule.showStatus();
console.log(myModule.name);
