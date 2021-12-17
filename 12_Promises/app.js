// Javascript - Promises : It replaces call back functions in more systematic way
// async await
// consume/use promises
// Pending, Rejected, Fulfilled

const value = 2

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random()*3)
    if(random==value){
        resolve('You Guessed Correctly')
    }else{
        reject('Wrong Number')
    }    
})

console.log(promise);

promise.then((data)=>console.log(data))
    .catch((err)=>console.log(err))


// Above call back hell done using promises

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addColor(1000,'.first','red')
    .then(addColor(3000,'.second','green')
    .then(addColor(4000,'.third','blue')))
    .catch((err)=>console.log(err));
})

function addColor(time,selector,color){
    const elmnt = document.querySelector(selector)
    return new Promise((resolve,reject)=>{
        if(elmnt){
            setTimeout(()=>{
                elmnt.style.color = color
                resolve('')
            },time)          
        }else{
            reject('No Such Element Found');
        }
    })
}