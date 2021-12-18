// ECMA Script 2022
// at() - takes integer and returns the item at that index - string, array
// Top Level Await - Basic Example

const scores = [1,2,3,4];

const oldScr = scores.at(-1);
console.log(oldScr);

const channel = 'Just Test Example'
console.log(channel.at(2));

//Top level await - no need of having async front or invoking function, need to declare app as module

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);