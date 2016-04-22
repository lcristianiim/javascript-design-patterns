// Constructor with prototype
function People (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.consoleSomething = function () {
        console.log('I am a method');
    }
}

People.prototype.getDescription = function () {
    return this.name + ' is ' + this.age + ' years old and it is a ' + this.gender + '.';
}

People.prototype.getName = function () {
    return 'The name of this person is ' + this.name + '.';
}

var person1 = new People ('Jenny', 21, 'female');
var person2 = new People ('Jack', 29, 'male');

// Outputs: Jenny is 21 years old and it is a female.
console.log (person1.getDescription());

// Outputs: Jack is 29 years old and it is a male.
console.log (person2.getDescription());

// Outputs: The name of this person is Jenny.
console.log (person1.getName());
