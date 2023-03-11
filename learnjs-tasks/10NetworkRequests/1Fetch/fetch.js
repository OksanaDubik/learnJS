const requestURL = "https://jsonplaceholder.typicode.com/todos";

function sendRequest(method, url, body= null) {

    const headers = {
        'Content-Type' : 'application/json'
    }
   return fetch (url
   //     ,
   //     {
   //     method: method,
   //     body: JSON.stringify(body),
   //     headers: headers
   // }).then( response => {
   //     if(response.ok){
   //         return response.json()
   //     }else {
   //         return response.json().then( error => {
   //             const e = new Error ("Что-то пошло не так")
   //             e.data = error
   //             throw e
   //         })
   //     }
   //
   // }
    )

}

sendRequest('GET', requestURL)
    .then(data => console.log(   data ))
    .catch(err => console.log(err))

let body = {
    name: 'Oksana',
    age: 26
}
sendRequest('POST', requestURL, body)
    .then(data => console.log(data ))
    .catch(err => console.log(err))




