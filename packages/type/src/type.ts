class Student {
  fullName: string;

  constructor(firstName: string, middleInitial: string, lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
