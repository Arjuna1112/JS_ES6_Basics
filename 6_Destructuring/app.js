// faster/easier way to access/unpack variables from arrays, objects

const fruits = ['orange','banana','apple'];
const friends = ['john','ragu','ramesh','raju'];

const [fruit1, fruit2, fruit3, fruit4] = fruits;

console.log(fruit1,fruit2,fruit3,fruit4);

let first = 'bob', second = 'john';

[second,first]=[first,second];

console.log(first,second);

const perosn = {
    firstNm:'arjun',
    lastNm:'balaji',
    city:'Blr',
    siblings:{
        sister:'Dia'
    }
}

const lastNm = 'some random';

const {lastNm:shakeAndBake,firstNm,city,zip,siblings}=perosn;

console.log(lastNm, firstNm, shakeAndBake,city, zip, siblings);