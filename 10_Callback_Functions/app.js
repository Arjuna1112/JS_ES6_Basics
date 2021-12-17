function makeUpperCase(value){
    console.log(value.toUpperCase());
}

//makeUpperCase('Peter');

function reverseString(value){
    console.log(value.split(' ').reverse().join(''));
}

function handleName(name,cb){
    const fullName = `${name} smith`;
    cb(fullName)
}

handleName('Peter',makeUpperCase)
handleName('Peter',reverseString)

handleName('susan',(value)=>console.log(value.toUpperCase()))
