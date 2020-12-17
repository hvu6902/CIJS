class Person{
    name;
    age;
    address;
    gender;
    constructor(name, age, address, gender){
        
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
speak (){
    console.log(`Hello, my name is  ${this.name}
I'm ${this.age}
I live in ${this.address}
    `);
}
}
const HoangVu = new Person('Vu', 18, "Hanoi", 'Male')
console.log(HoangVu);

// const abc = new Person('Abc', 18, "Montreal", 'Female')
// HoangVu.speak()

// Class Animal
// Species, Color, numberOfLeg, gender, name
// eat => con + name + dang an
// keu => con + name + dang keu
// isDangerous => so chan lon hon 4 or so chan =  0 
// in ra co nguy hiem hay k

class Animal{
    species;
    color;
    numberOfLegs;
    gender;
    name;
    constructor(species, color, numberOfLegs, gender, name){

        this.species = species;
        this.color = color;
        this.numberOfLegs = numberOfLegs;
        this.gender = gender;
        this.name = name;
    }
speak(){
    console.log(`Con ${this.name} đang ăn
Con ${this.name} đang chịch 
    `);
}
isDangerous(){
    // if(this.numberOfLegs > 4 || this.numberOfLegs === 0){
    //     console.log('Rất nguy hiểm')
    // }
    console.log(this.numberOfLegs > 4 || this.numberOfLegs === 0 ? 'Rất nguy hiểm':'Không nguy hiểm');
}
}
const spider = new Animal('insect', 'black', 8, 'male', 'Peter Parker')
console.log(spider);
spider.speak()
spider.isDangerous()

class MyMath{
    static sum(a,b){
        return a + b
    }
    static div(a,b){
        return a/b
    }
}
console.log(MyMath.sum(1, 2));

// kế thừa

class Employee extends Person{
    constructor(name, age, address, gender, salary){
        super(name, age, address, gender)
        // this.salary = salary
    }
speak(){
    console.log('Make America Great Again');
}
// showOff(){
//     console.log(`My salary is ${salary}`);
// }
}
const myEmployee = new Employee('Trump', 74, 'Washington D.C', 'Male', '$1m')
// console.log(myEmployee.speak());

// Kế thừa
// Tạo class dog kế thừa Animal, khi speak() in ra gâu gâu

class Dog extends Animal{
    constructor(species, color, numberOfLegs, gender, name){
        super (species, color, numberOfLegs, gender, name)
    }
speak(){
    console.log(`Con chó ${this.name} sủa gâu gâu`);
}
}
const myDog = new Dog('Puddle', 'blue', 4, 'male', 'lqm')
myDog.speak()
