const personPrototype = {
  firstName: 'Giovanni',
  lastName: 'Fernandes',
  age: 22,

  fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Juliana';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullname());
