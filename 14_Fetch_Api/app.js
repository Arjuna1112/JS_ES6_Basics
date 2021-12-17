// Fetch Api - Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

let url = 'https://www.course-api.com/react-tours-project'

fetch(url)
    .then((resp)=>resp.json())
    .then((resp)=>console.log(resp))
    .catch((err)=>console.log(err))


url = 'https://www.course-api.com/react-tours-projects'

const fetchResp = async () =>{
    try {
        const resp = await fetch(url)
        if(!resp.ok)
            throw new Error(`There was an error ${resp.status} with text ${resp.statusText}`)
        const respJson = await resp.json()
        console.log(respJson);
    } catch (err) {
        console.log(err);
    }    
}

fetchResp();