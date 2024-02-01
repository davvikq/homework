let arr = ['Alex', 'John', 'Bob', 'Amir', 'Azizbek', 'Tyler']
let arr2 = ['Davlat', 'Arslan', 'Steve', 32, true, 45]

let newArr = arr.concat(arr2);

console.log(newArr.slice(0, 0));

let newFilter = newArr.filter((item) => typeof(item) == 'string' && (item.charAt(0) == 'A' || item.charAt(0) == 'a'));

console.log(newFilter);