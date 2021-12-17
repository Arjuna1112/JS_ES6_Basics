// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

//Array
const fruits = ['apple','banana','cheeku','graphes','orange'];
const [first,second,...restOfFruits] = fruits;
console.log(first,second,restOfFruits);

//Object
const person = {name:'Kevin',lastName:'Peter',job:'developer'};
const {job,...restOfPerDtl} = person;
console.log(job,restOfPerDtl);

//function
const getAverage = (personNm,...score)=>{
    console.log(personNm);
    console.log(score);
    const avg = score.reduce((total,acc)=>{return total+=acc},0)/score.length;
    console.log(avg);
}

getAverage('Arjun',23,56,45,78,89,56);

//Spread Operator...
//Allows and iterable to spread/expand individually inside reciever
//Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['Ramesh','Raghu','Raju'];
const girls = ['Ramya','Roopa'];
const bestFriend = 'Arnold';
const friends = [boys,girls,bestFriend];
console.log(friends);
const properJoinedArr = [...boys,...girls,bestFriend];
console.log(properJoinedArr);

//reference
//Both old and new array changes, but expected only refernce array to change
//const newFriends = properJoinedArr;
//newFriends[0]='Nancy';
//console.log(properJoinedArr);
//console.log(newFriends);

//copy
//Proper way of doing it
const properNewFriends = [...properJoinedArr]
properNewFriends[0]='Nancy';
console.log(properJoinedArr);
console.log(properNewFriends);

//ES2018-ES8 Objects
//Similar to perform above function with object
const items = {name:'Gadget',price:'100'};
const newItem = {...items,tax:'12%'};
console.log(items);
console.log(newItem);