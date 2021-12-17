const state ={
    loading:true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key]=value;
}

updateState('name','Arjun');
updateState('job','Developer');
updateState('products',['Mobile','TV','Refrigerator']);

console.log(state);

const divTag = document.querySelector('div');
divTag.innerHTML=`<div>Name:${state.name}</div>
<div>Job:${state.job}</div>
<div>State:${state.loading}</div>
<div>Products:${state.products}</div>`;
console.log(divTag);