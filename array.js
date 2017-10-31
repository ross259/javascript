const printResult = require('./helpers/print-result');

console.clear();

let arr1 = [
  { id: 'a', name: 'Tony', color: 'Red' },
  { id: 'b', name: 'Jennifer', color: 'Green' },
  { id: 'c', name: 'Paul', color: 'Blue' },
  { id: 'd', name: 'Sam', color: 'Yellow' },
  { id: 'e', name: 'Rick', color: 'Red' },
];
let arr2 = [
  { id: 'b', name: 'Pablo' },
  { id: 'd', name: 'Sam' },
  { id: 'a', name: 'Tony' },
];

// ******************************
// *********** FILTER ***********
// ******************************

// Filter array by object property

const filteredArr = arr1.filter(element => element.color === 'Red' || element.id === 'c');
printResult('Filter array by object property.', filteredArr);

// Compare two arrays and filter out elements with identical ids. (C and E are removed)

const filteredArr2 = arr1.filter(o1 => !arr2.some((o2) => {
  return o1.id === o2.id;
}));
// .map((o)=>{
//     // use reduce to make objects with only the required properties
//     // and map to apply this to the filtered array as a whole
//     return props.reduce(function(newo, name){
//         newo[name] = o[name];
//         return newo;
//     }, {});
// });

printResult('Compare two arrays and filter out elements with identical ids. (C and E are removed)', filteredArr2);

// Remove duplicates from array

const myArr = [{ id: 3, color: 'red' }, { id: 2, color: 'red' }, { id: 3, color: 'blue' }];

const getUnique = function (arrayTo, prop) {
  return arrayTo.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

printResult('Return array with only unique object properties', getUnique(myArr, 'id'));
printResult('Return array with only unique object properties', getUnique(myArr, 'color'));

// ******************************
// ************ MAP *************
// ******************************

// Remove properties of array of objects.

let myArray1 = [{ id: 1, qty: 3, description: 'red' }, { id: 2, qty: 3, description: 'blue' }, { id: 3, qty: 789, description: 'yellow' }];

myArray1 = myArray1.map(element => ({ id: element.id, description: element.description }));
printResult('Remove properties of array of objects.', myArray1);

// ******************************
// ********* FOR EACH ***********
// ******************************

// Merge properties from one array to another.
arr1 = [
  { id: 'a', color: 'Red', career: 'Ninja' },
  { id: 'b', name: 'Jennifer', color: 'Green' },
  { id: 'c', name: 'Paul', color: 'Blue' },
  { id: 'd', name: 'Sam', color: 'Yellow' },
  { id: 'e', name: 'Rick', color: 'Red' },
];
arr2 = [
  { id: 'b', name: 'Pablo' },
  { id: 'd', name: 'Sam' },
  { id: 'a', name: 'Ralph' },
];

const findPerson = id => arr1.find(person => person.id === id);
arr2.forEach(person => Object.assign(person, findPerson(person.id)));
printResult('Merge properties from one array to another.', arr2);

// *************************************************
// ***** SORT BY FREQUENCY OF OBJECT PROPERTY ******
// *************************************************

function sortByFrequency(arr) {
  return Array.from(
    arr.reduce((acc, o) => {
      const key = Object.keys(o)[0];
      const obj = acc.get(key) || Object.assign({ key, count: 0 }, o[key]);
      obj.count += 1;
      return acc.set(key, obj);
    }, new Map()),
    ([key, obj]) => obj).sort((a, b) => b.count - a.count || b.price - a.price);
}

// Sample input
let prices = [
  { X: { price: '5' } },
  { Y: { price: '3' } },
  { Y: { price: '3' } },
  { Z: { price: '4' } },
  { Q: { price: '2' } },
  { X: { price: '5' } },
  { Z: { price: '4' } },
  { X: { price: '5' } },
];

let res = sortByFrequency(prices);
printResult('Get count of objects with same property value.', res);

function sortByFrequency2(arr) {
  return Array.from(
    arr.reduce((acc, o) => {
      const id = o.id;
      // const obj = acc.get(id) || Object.assign({ id, count: 0 }, o);
      const obj = acc.get(id) || Object.assign({ id, count: 0 });
      obj.count += 1;
      return acc.set(id, obj);
    }, new Map()), ([id, obj]) => obj).sort((a, b) => b.count - a.count || b.score - a.score);
}

const players = [
  { id: 123, score: '5', ape: false },
  { id: 345, score: '3' },
  { id: 123, score: '3' },
  { id: 123, score: '4' },
  { id: 345, score: '2' },
  { id: 567, score: '5' },
  { id: 765, score: '4' },
  { id: 123, score: '5' },
];

// Perform transformation & output
res = sortByFrequency2(players);
printResult('Get count of objects with same property value.', res);

// ******************************
// ****** SORT BY PROPERTY ******
// ******************************

const arr5 = [
  { id: 'a', name: 'Tony', color: 'Red' },
  { id: 'b', name: 'Jennifer', color: 'Green' },
  { id: 'h', name: 'Jennifer', color: 'Blue' },
  { id: 'c', name: 'Paul', color: 'Blue' },
  { id: 'd', name: 'Sam', color: 'Yellow' },
  { id: 'j', name: 'Andrew', color: 'Yellow' },
  { id: 'e', name: 'Rick', color: 'Red' },
];

function sortByProp(arr, prop) {
  return arr.sort((a, b) => {
    return a[prop] === b[prop] ? 0 : +(a[prop] > b[prop]) || -1;
  });
}

res = sortByProp(arr5, 'name');
printResult('Sort by object property of array of objects.', res);

res = sortByProp(arr5, 'color');
printResult('Sort by object property of array of objects.', res);

function sortBy2Props(arr, prop1, prop2) {
  return arr.sort((a, b) => {
    if (a[prop1] === b[prop1]) return a[prop2] > b[prop2];
    else return a[prop1] > b[prop1];
  });
}

res = sortBy2Props(arr5, 'color', 'name');
printResult('Sort by 2 object properties of array of objects.', res);

res = sortBy2Props(arr5, 'name', 'color');
printResult('Sort by 2 object properties of array of objects.', res);