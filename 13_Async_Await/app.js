//Async/await
//async must be present, always returns a promise
//await wait till promise is settled
//error handling - try/catch block

const users = [
    {id:1,name:'John'},
    {id:2,name:'Jawahar'},
    {id:3,name:'Raju'}
]

const articles = [
    {userId:1, articles:['one','two','three']},
    {userId:2, articles:['four','five']},
    {userId:3, articles:['six','seven','eight']}
]

function getUser(name){
    return new Promise((resolve,reject)=>{
        const user = users.find((user)=>user.name==name)
        if(user){
            resolve(user)
        }else{
            reject(`No such with user name : ${name}`)
        }
    })
}

function getArticles(userId){
    return new Promise((resolve,reject)=>{
        const userArticle = articles.find((article)=>article.userId==userId)
        if(userArticle){
            resolve(userArticle.articles)
        }else{
            reject(`No such article for user id : ${userId}`)
        }
    })
}

getUser('Raju')
    .then((user)=>getArticles(user.id)
    .then((article)=>console.log(article)))
    .catch((err)=>console.log(err))

const getData = async ()=>{
    const user = await getUser('John')
    console.log(await getArticles(user.id));
    try {
        const user = await getUser('Johns')
        console.log(await getArticles(user.id));
    } catch (error) {
        console.log(error);
    }
}

getData()