function Person(name, gender, age) {
  //   return {
  (this.name = name),
    (this.gender = gender),
    (this.age = age),
    (this.eat = function (food) {
      console.log(`${this.name} is eating ${food}`);
    }),
    (this.run = function () {
      console.log(`${this.name} is running`);
    }),
    (this.read = function (bookName) {
      console.log(`${this.name} is reading ${bookName}`);
    });
}

let person1 = new Person();
// console.log(person1.run());

function School(name, gender, age) {
  let allStudents = [];
  Person.call(this, name, gender, age);
  this.newStudents = allStudents.push(name);
  this.students = allStudents;
}

let daySchool = new School("Peter", "male", 13);
console.log(daySchool.students);
