var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;
  console.log(i); //1,2,3...
}
console.log("i:" + i); //10,var
//console.log(i);//err
return sum;
//var is functional level
//let is block level

//object
var student = {
  rollno: 102,
  fname: "malyala",
  lname: "hyndhavi",
  talk: function() {
    console.log("talk");
  },
  //another way for declaring function in es
  walk() {
    console.log(this);
  },
  subjects: ["mathametics", "hindi", "telugu", "tamil"],
  marks: {
    mathametics: 100,
    hindi: 80,
    telugu: 70,
    tamil: 80
  }
};
console.log(student.fname);
console.log(student.talk());
console.log(student.subjects[2]);
console.log(student.subjects[0]);
console.log(student.walk()); //student properities

//in standalone function, 'this' refers 'window'
var std = student.walk(); //standalone function
/*var std=function(){
    console.log(this)
}
*/

console.log(std);
console.log(std()); //window properties

//binding object to function
var std = student.walk.bind(student);
console.log(std());

//class
class student {
  marks = {};
  subjects = [];
  constructor(name, rollno) {
    this.name = name;
    this.rollno = rollno;
  }
  talk() {
    console.log("talk");
  }
  walk() {
    console.log("walk");
  }
}
//creating a object
var std1 = new student("hyndhavi", 101);
console.log(std1.name);
console.log(std1.rollno);
std1.walk();

class person {
  constructor(name) {
    this.name = name;
  }
}

//class
class student extends person {
  constructor(rollno, name) {
    super(name); //intializes parent class
    this.rollno = rollno;
  }
  talk() {
    console.log("talk");
  }
  walk() {
    console.log("walk");
  }
}

//arrow functions
function add(num1, nm2) {
  return num1 + num2;
}
//var sum = (num1, num2) => { return num1 + num2; }
var sum = (num1, num2) => num1 + num2;
console.log(sum(10, 20));

var square = num1 => num1 * num1;
console.log(square(10));

var cube = () => 10 * 10 * 10;
console.log(cube());
//map(x=>f(x))-applies function on every
console.log(arr.map(num => num * num));

//filter
console.log(arr.filter(num => num > 20));

//reduce
console.log(arr.reduce());

//spread operator..
var arr1 = [10, 20, 30];
var arr2 = [5, 15, 25];

var arr3 = [...arr1, ...arr2];
console.log(arr3);
//array clone
var arr4 = [...arr1];
console.log(arr4);
//adding elements in betwwen array elements
var arr3 = [3, 6, ...arr1, 66, 77, ...arr2, 88, 99, ...arr3];
console.log(arr3);
//object clone
var student1 = {
  rollno: 102,
  name: "ram"
};
var student2 = { ...student1 };
console.log(student2);
student2.schoolname = "raghava school";
console.log(student2);
var student3 = {
  rollno: 103,
  name: "sam"
};
var std = { ...student2, ...student3 };
console.log(std);

//modules concept
//import and export-is used for making public for class and functions also keyword defalut-is used with export keyword
//when defalut is used we should not use the {} braces otherwise not need
//import {person} from '../myFunction';
//export defalut class person{
// constructor(name){
//  this.name=name;
//  }
//}

//javascript object notation
