class Person {
    constructor(Name, Age, Email)
    {
        this.name = Name;
        this.age = Age;
        this.email = Email;

    }
    getPersonInfo()
    {
        return `My Name:${this.name} and age is ${this.age}, Email:${this.email}`
    }
}

module.exports =Person;