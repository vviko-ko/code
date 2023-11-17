// concatinating strings //
let Name = "hello";
console.log(Name)
var myFirstName = "Olusanmi ";
    myLastName = '"Sogbein" "Emmanuel"';
console.log(myFirstName + "" + myLastName)    

var middleName = "emmanuel "
    middleName += " sanmi"
console.log(middleName);    
// appending variable to string//
 
var ourNames = "savior"
    ourSurnames = "Jesus our "
ourSurnames += ourNames;
console.log(ourSurnames);

// length of string
var myFirstName = 0
    ourNames = "victor"
myFirstName = ourNames.length;
console.log(myFirstName);   

myFirstName = ourNames[3]
console.log(myFirstName);

myFirstName = ourNames[ourNames.length - 1]
console.log(myFirstName);

//array
var myArray = [20,30,40,50];
    ourData = myArray[1];
console.log(ourData);    

var myArray = [20,30,40,50];
myArray[3] = 70;
console.log(myArray);

//manipulation of array with push
var myArray = [ "emma", "samuel"]
myArray.push("daniel",10);
console.log(myArray);
// pop removes the last elment in the array while shift removes the first element in the array
// unshift adds element to the beginning of an array


myArray = [["hello",10],["h1",20]]
myArray.pop();
console.log(myArray);

myArray = [["hello",10],["hi",20]];
myArray.shift();
console.log(myArray);


myArray = [10,20]
myArray.unshift(20);
console.log(myArray);




// for loop
const myData = [
    {name:"Victor", age: 17 , gender: "male"},
    {name: "kabir", age: 18 , gender: "male"},
    {name: "Mayowa", age: 17, gender: "male"}
]
for (let i = 0; i < myData.length; i++)
console.log(myData[i].name);


// let process = 10

var number = 0
function mySum(sum){
    return (sum += 20)/2
}
number = mySum(10)
console.log(number);

function myFame(myName){
    if (myName == 10){
    return "hello world";
}
    return "not eligible";
}
myFame(20)  ;


const myLogistics = [
    {name:"hello", age: 20, gender: "female"},
    {name:"samuel", age: 30, gender: "shemale"},
    {name:"ayokunle", age: 40, gender: "male"}
]
myLogistics.push({name:"emmanuel" , age :50, gender: "female"})
console.log(myLogistics);
for (i = 0; i < myLogistics.length; i++ )
console.log(myLogistics[i].name);

function myFunction(myName){
  if (myName == "emmanuel"){
    return "welcome";
  }
  return "you are not welcome";
}
console.log(myFunction("sanya"));

function addFive(num){
    return num * 5
}
console.log(addFive(10));
 








