const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })

}

// sendRequest('GET', requestURL)
//     .then(data => alert(   data ))
//     .catch(err => console.log(err))
let body = {
    name: 'Oksana',
    age: 26
}
sendRequest('POST', requestURL, body)
    .then(data => console.log(data, JSON.stringify(body)))
    .catch(err => console.log(err))


// describe("getUsers", function() {
//
//     it("gets users from GitHub", async function() {
//         let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
//         assert.equal(users[0].login, 'iliakan');
//         assert.equal(users[1].login, 'remy');
//         assert.equal(users[2], null);
//     });
//
// });


