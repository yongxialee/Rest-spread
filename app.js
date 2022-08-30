// ********************************
//Rest / Spread Operator Exercises
// ********************************


//refactor given function into ES2015 code
/*
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

*/

const filterOutOdds= (...nums) => nums.filter(num => num % 2 === 0);

//find Min
// white a function called findMin that accepts a variable number of argyuments and returns the smallest argumen.
//make sure to fo this suing rets and spread operator

function findMin(...arg){
 return Math.min(...arg);
}
//or
const findMin1 =(...args) =>Math.min(...args);


//mergeObjects
//write a function called mergeObjects that accpets two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects= (obj1,obj2) => ({...obj1,...obj2});

//double and return args
//white a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. the function should return a new array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr,...nums) => [...arr,...nums.map(agr =>agr *2)];

//slice and dice!
//*********************************/
//white the following function using rest, spread and refactor these functions to be arrow functions!

const removeRandom=items => {
    let ranIdx =Math.floor(Math.random() * items.length);
    console.log(`remove item at index ${ranIdx}`);
    return [...items.slice(0,ranIdx),...items.slice(ranIdx+1)];
}

//return a new array with every item in array1 and array2
const extend = (arr1,arr2) => {
    return [...arr1,...arr2];
}
//return a new object with all the keys and values from obj and a new key/value pair

const addKeyVal =(obj,key,val) => {
    let newObj={...obj};
    newObj[key]=val;
    return newObj;
}
//return a new object with a key removed

const removeKey = (obj,key) =>{
    let newObj={...obj};
    delete newObj[key];
    console.log(newObj);
    return newObj;

}

//combine two objects and return a new object
const combine = (obj1,obj2) => {
    return { ...obj1,...obj2}
}

//return a new object with modified key and value
const update =(obj,key,val) => {
    return {...obj,[key]:val};

}