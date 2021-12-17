//Reduce
//iterates, callback function
//reduce to a single value - number, array, object
//1st parameter ('acc') - total of all calculation
//2nd parameter ('curr') - current iterations/value

const people = [
    {name:'John', age:25, position:'developer',org:'JPMC', salary:100},
    {name:'Jawahar', age:30, position:'engineer',org:'JPMC', salary:400},
    {name:'Michael', age:35, position:'hardware',org:'Adobe', salary:300},
    {name:'Ramesh', age:20, position:'software',org:'Adobe', salary:200}
]

console.log(`Total Salary of all people : `+people.reduce((total,person)=>{
   return total+= person.salary;
},0));

console.log(people.reduce((total,person)=>{
    total.totalAge+=person.age;
    total.totalSalary+=person.salary;
    return total;
},{totalAge:0,totalSalary:0}));



