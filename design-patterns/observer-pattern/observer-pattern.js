// The list of dependent Observers
function ObserversList () {
    this.observerList = [];
}

ObserversList.prototype.add = function (obj) {
    return this.observerList.push(obj);
}

ObserversList.prototype.count = function () {
    return this.observerList.length;
}

ObserversList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

ObserversList.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList[i] === obj) {
        return i;
    }

    i++;
}

ObserversList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
}

// The Subject and the ability to add, remove or notify observers on the observers list
function Subject () {
    this.observers = new ObserversList();
}

Subject.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

Subject.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0) );
}

Subject.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
}

// The Observer
function Observer() {
    this.name = name;
}

Observer.prototype.notify = function (event, data) {
    console.log('The event was triggered');
}

// ===================================

// Extend an object with an extension
function extend(obj, extension) {
    for (var key in extension) {
        obj[key] = extension[key];
    }
}

// References to out DOM elements
var controlCheckbox = document.getElementById("mainCheckbox"),
    addBtn = document.getElementById("addNewObserver"),
    container = document.getElementById("observersContainer");

// Concrete Suboject

// Extend controlling checkbox with the Subject class
extend(controlCheckbox, new Subject() );

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function () {
    controlCheckbox.notify( controlCheckbox.checked);
}

addBtn.onclick = addNewObserver;

// Concrete Observer
function addNewObserver() {

    // Create a new checkbox to be added
    var check = document.createElement("input");
    check.type = "checkbox";

    // Extend the checkbox with the Observer class
    extend (check, new Observer() );

    // Override with custom update behaviour
    check.update = function (value) {
        this.checked = value;
    }

    // Add the new observer to our list of observers for our main subject
    controlCheckbox.addObserver(check);

    // Append the item to the container
    container.appendChild(check);
}
