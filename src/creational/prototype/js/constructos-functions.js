function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Giovanni',
  lastName: 'Fernandes',
  age: 22,

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

SubPerson.prototype = Object.create(personPrototype);
SubPerson.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Ola';
}

const person1 = new Person('Giovanni', 'Fernandes', 22);

console.log(person1);
console.log(person1.fullname());

const person2 = new SubPerson('Lucas', 'Carvalho', 33);
console.log(person2);
console.log(person2.fullname());
