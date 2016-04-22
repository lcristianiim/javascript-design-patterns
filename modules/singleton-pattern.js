var mySingleton = (function () {
    var instance;

    function init() {
        var privateVariable = 'I am a private variable';
        var privateRandomNumber = Math.random();

        function privateMethod () {
            console.log(privateRandomNumber);
        }

        return {
            privateVariable: privateVariable,
            privateMethod: privateMethod
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }

})();

var var1 = mySingleton.getInstance();

// var2 is a reference to the var1 object
var var2 = mySingleton.getInstance();

// var3 is a reference to the var1 object
var var3 = mySingleton.getInstance();

// var4 is a reference to the var1 object
var var4 = mySingleton.getInstance();

var1.privateMethod();
var2.privateMethod();
var3.privateMethod();
var4.privateMethod();
