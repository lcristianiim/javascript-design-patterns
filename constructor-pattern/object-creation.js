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

console.log (person1.getDescription());
console.log (person2.getDescription());
console.log (person1.getName());
