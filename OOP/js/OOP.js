// object literal ----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const person = {
//     name: 'Jhon Yow'
// }

// Person Constructor 
// function hello (){

// }

// function Person(name){
// this.name = 'John';
// }

// const john = new Person();


// function Person (name, age){
//     this.name = name ;
//     this.age = age;
//     // console.log(this);
// }
// this.alert('hey');

// const john = new Person('john' , '26');
//  console.log(john.name);
//  console.log(john.age);
// console.log(john);

// constructor and this keyword -------------------------------------->>>>>>>>>>>>>>>>>>>>>
// person constructor ------------------------------------------------>>>>>>>>>>>>>>>>>>>>>
function Person(name , dob) {
    this.name = name;
    this.birthday = new Date(dob); 
    this.calculatorAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const agesDate = new Date(diff);
        return Math.abs(agesDate.getUTCFullYear() - 1970);
    } 
}

const jay = new Person('jay', '9-21-1997');
const bob = new Person('bob', '5-13-1950');

console.log(bob.name ,bob.calculatorAge());
