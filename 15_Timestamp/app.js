// Timestamps
console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000

//Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now());
},1000)

//create/get dates
const now = Date.now();
const oneDay = 1000*60*60*24;
const futureDate = new Date(now+oneDay)
console.log(new Date());
console.log(futureDate);

//Time Difference
const firstDate = new Date();
const secondDate = new Date(2021,12,17);

const timeDiff = secondDate - firstDate;

//diff in mins
console.log(timeDiff/1000*60);
//diff in hrs
console.log(timeDiff/1000*60*60);
//diff in days
console.log(timeDiff/1000*60*60*24);