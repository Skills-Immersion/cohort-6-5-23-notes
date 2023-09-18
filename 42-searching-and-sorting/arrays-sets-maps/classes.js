class Student {
    //attributes
    isCool = true;
    constructor(nameInput, ageInput) {
        this.name = nameInput;
        this.age = ageInput    
    }
    //methods
    sayHello() {
        console.log(`hi, I am ${this.name}`)
        return this;
    }
}


let Jacky = new Student("Jacky", 77);
let Mohammad = new Student("Mohammad", 88)
Jacky.sayHello().sayHello()
Mohammad.sayHello();

