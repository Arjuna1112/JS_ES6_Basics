// Use Set to store unique values
// Use ... to convert to array
// Append All to formed array
const menu = [
    {
        name:`Idli`,
        cateogary:'Breakfast'
    },
    {
        name:`Dosa`,
        cateogary:'Breakfast'
    },
    {
        name:`Rice`,
        cateogary:'Lunch'
    },
    {
        name:`Sambar`,
        cateogary:'Lunch'
    },
    {
        name:`Curd Rice`,
        cateogary:'Lunch'
    },
    {
        name:`Cuttlet`,
        cateogary:'Starter'
    },
    {
        name:`Samosa`,
        cateogary:'Starter'
    }
]

const cateogaries = [`All`,...new Set(menu.map((item)=>item.cateogary))];
console.log(cateogaries);
const resultTag = document.querySelector('.result');
resultTag.innerHTML = cateogaries.map((cateogary)=>{
    return `<button>${cateogary}</button>`;
}).join('');