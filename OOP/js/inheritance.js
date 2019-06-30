// Prototype inheritance 
// Person Constructior 

function Person(firstName , LastName){
    this.firstName = firstName;
    this.LastName = LastName;
}

// greeting 

Person.prototype.greeting = function () {
    return `hello there ${this.firstName}`;
}

const person1 = new Person('john', 'Doe');
// console.log(person1.greeting());



// Customer constructor 
function Customer(firstName , LastName , phone , memberShip){
Person.call(this, firstName , LastName);
this.phone = phone ;
this.memberShip = memberShip ;

}

// inherit the Person prototype methos 
Customer.prototype = Object.create(Person.prototype);

// make Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer 
const customer1 = new Customer('jay', 'Law', '123' , 'Vip');


Customer.prototype.greeting = function(){
    return `hello there ${this.firstName} welcome to the jungle`
}
console.log(customer1.greeting());
