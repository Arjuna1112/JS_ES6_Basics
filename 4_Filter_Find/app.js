// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    {name:'John', age:25, position:'developer',org:'JPMC'},
    {name:'Jawahar', age:30, position:'engineer',org:'JPMC'},
    {name:'Michael', age:35, position:'hardware',org:'Adobe'},
    {name:'Ramesh', age:20, position:'software',org:'Adobe'}
]

console.log(people.filter((person)=>person.age<25).map((person)=>person.name));

console.log(people.find((person)=>person.name=='Jawahar').position);

console.log(people.find((person)=>person.org=='JPMC').name);