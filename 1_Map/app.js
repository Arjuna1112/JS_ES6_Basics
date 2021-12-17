// Use of map function to pass call back function, to perform any operation on all items of array
const people = [
    {
        name:`Arjun`,
        salary:100,
        position:`Developer`
    },
    {
        name:`Divya`,
        salary:70,
        position:`Software`
    },
    {
        name:`Reetu`,
        salary:200,
        position:`Engineer`
    },
    {
        name:`Raju`,
        salary:250,
        position:`Hardware`
    }
]
console.log(people);
const salaryList = people.map((person)=>person.salary);
console.log(salaryList);

const stmtList = people.map((person)=>`${person.name} works as ${person.position} and earns ${person.salary}`);
console.log(stmtList);

const htmlEle = people.map((person)=>`<div>
<span>${person.name}</span> works as 
<span>${person.position}</span> and earns 
<span>${person.salary}</span>
</div>`);
document.write(htmlEle.join(''));