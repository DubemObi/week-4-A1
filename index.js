function Person() {
  return {
    name: "Anthony",
    gender: "male",
    age: 14,
    eat: function (food) {
      console.log(`${this.name} is eating ${food}`);
    },
    run: function () {
      console.log(`${this.name} is running`);
    },
    read: function (bookName) {
      console.log(`${this.name} is reading ${bookName}`);
    },
    location: function () {
      console.log(`${this.name} is currently in School`);
    },
  };
}

let person1 = new Person();
// console.log(person1.age);
// console.log(person1.run());

function School() {
  return Person.call(this);
}

let newSchool = new School();
newSchool.location();
