class Person {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName , lastName , phone , memberShip) {
        super(firstName , lastName);
        this.phone = phone ;
        this.membership = memberShip ;
    }

    static getMemberShipCost(){
        return 500;
    }
}

const john = new Customer ('john' , 'doe', '55555' , 'Vip');
console.log(john.greeting());
console.log(Customer.getMemberShipCost());
console.log(john.membership);
console.log(john.lastName);
console.log(john.phone);

console.log(john.greeting(), john.phone, john.membership)
