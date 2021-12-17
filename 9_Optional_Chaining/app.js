const people = [
    {
        name:'bob',
        location:
        {
            street:'123 Main Street',
            timezone:
            {
                offSet:'+7.00'
            }
        }
    },
    {
        name:'peter',
        location:
        {
            street:'123 Pine Street'
        }
    },
    {
        name:'susan',
        location:
        {
            street:'123 Apple Street',
            timezone:
            {
                offSet:'+9.00'
            }
        }
    }
]

//To access timezone property 

//This will throw error
people.forEach((person)=>{
    //console.log(person.name.location.timezone);
})

//Before Optional Chaining we use && operator as below,
people.forEach((person)=>{
    console.log(
        person.location &&
            person.location.timezone &&
                person.location.timezone.offSet);
})

//Using Optional Chaining,
people.forEach((person)=>{
    console.log(person?.location?.timezone?.offSet);
})