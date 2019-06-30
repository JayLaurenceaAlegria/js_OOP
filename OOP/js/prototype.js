// prototype 
// Object.protoype
// person.prototype 

// Person Constructor 
// function Person(firstName , lastName , dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// }


// // Calculate age 
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get fullName 
// Person.prototype.getFullName = function(newLastName){
// return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getsMaried = function(newLastName){
// this.lastName = newLastName;
// }

// const john = new Person('jay','laurence','9-21-1997');
// const Jane = new Person('jane','Doe','march 31 1990');
// console.log(john.calculateAge());

// Jane.getsMaried('Alegria');
// console.log(Jane.getFullName());
// console.log(Jane.hasOwnProperty('firstname'));
// console.log(Jane.hasOwnProperty('fullName'));


