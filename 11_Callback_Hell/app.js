// JS - Callback Hell
// After 1s first red, 2s third green, 4s second blue In Sequence



const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    setTimeout(()=>{
        first.style.color = 'red'
        setTimeout(()=>{
            second.style.color='blue'
            setTimeout(()=>{
                third.style.color='green'
            },2000)
        },4000)
    },1000)
})