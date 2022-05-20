

// viet 1 van ban vao page
// Using document.write() after an HTML document is loaded, will delete all existing HTML
// The document.write() method should only be used for testing.
// document.write(5+6)

// hien thi thong bao
// document.alert(5+6)
// alert(12)

// print page
// print()

// lm tron
let x = 9.656
x.toFixed(0)
console.log(x)

//trả về string có độ dài xác định
//chỉ tính chỉ tính kí tự số
x.toPrecision(2)

// k thể tạo 1 object array 1 ptu


// xoá 1 ptu o đầu array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;


//them 1 ptu ở đầu
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");// return length array


// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(2, 2, "Lemon", "Kiwi");
fruits.splice(0, 1); // to remove elements


//gộp các mảng
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

//The slice() method slices out a piece of an array into a new array.
// The slice() method creates a new array. It does not remove any elements from the source array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

//max on an array
// Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//sort 1 object arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

cars.sort(function(a, b){return a.year - b.year});

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });



// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

//map
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

// The filter() method creates a new array with array elements that passes a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// new Date()

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// 6 numbers specify year, month, day, hour, minute, second
// 5 numbers specify year, month, day, hour, and minute
// 4 numbers specify year, month, day, and hour
// 3 numbers specify year, month, and day
// 2 numbers specify year and month

// One and two digit years will be interpreted as 19xx
const d = new Date(99, 11, 24);

// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
// Now the time is: 1637860422258 milliseconds past January 01, 1970
// new Date(milliseconds)

// new Date(date string)

d.toDateString()


Math.sign(-1);
//trả về -1 nếu âm null và 1

// random from min+1 to max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}

// RegExp
// /pattern/modifiers;
let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
// n=6
// modifiers:
// i: Perform case-insensitive matching
// g: Perform a global match (find all matches rather than stopping after the first match)
// m: Perform multiline matching

// pattern:
// [abc] [0-9] (x|y)
// \d	Find a digit
// \s	Find a whitespace character
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx


function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"


// Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;
// before 
hello = function() {
  return "Hello World!";
}
// with arrow
hello = () => {
  return "Hello World!";
}

hello = () => "Hello World!";

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";

// Trì hoãn tải JavaScript
// Đặt các tập lệnh của bạn ở cuối thân trang sẽ cho phép trình duyệt tải trang trước.
// Trong khi một tập lệnh đang tải xuống, trình duyệt sẽ không bắt đầu bất kỳ quá trình tải xuống nào khác. Ngoài ra, tất cả hoạt động phân tích cú pháp và hiển thị có thể bị chặn.
// Đặc tả HTTP xác định rằng các trình duyệt không được tải xuống nhiều hơn hai thành phần song song.
// Một giải pháp thay thế là sử dụng defer="true"trong thẻ script. Thuộc tính defer chỉ định rằng tập lệnh sẽ được thực thi sau khi trang hoàn tất quá trình phân tích cú pháp, nhưng nó chỉ hoạt động đối với các tập lệnh bên ngoài.
// Nếu có thể, bạn có thể thêm tập lệnh của mình vào trang bằng mã, sau khi trang tải xong:


{/* <script> */}
  
  window.onload = function() {
    const element = document.createElement("script");
    element.src = "myScript.js";
    document.body.appendChild(element);
  };
// </script>