class Person {
    constructor(name = "anonymous", age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super();
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Rom S.', 25, "Information Systems");
console.log(me);

const other = new Student();
console.log(other);