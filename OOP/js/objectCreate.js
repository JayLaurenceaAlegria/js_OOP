

const personPrototype = {
    greeting: function(){
        return `hello there ${this.firstName} ${this.lastName }`
    },
    getsMarried : function (newLastName){
        this.lastName = newLastName ;

    }
}

const mary = Object.create(personPrototype);

mary.firstName = 'Mary';
mary.lastName = 'williams';
mary.age = '30';

mary.getsMarried('Thompson') ; 
console.log(mary.greeting());
