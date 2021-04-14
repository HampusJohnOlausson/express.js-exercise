window.addEventListener('load', main);

function main(){
    getAll();
    getSpecific(1);
    addTodo('lotr');
}

async function getAll(){
    const todos = await makeRequest('/todos', 'GET');
    console.log(todos);
}

async function getSpecific(id){
    const todo = await makeRequest('/todos/' + id, 'GET');
    console.log(todo);
}
 
async function addTodo(title) {
    const body = { title: title };
    const todo = await makeRequest("/todos/", "POST", body);
    console.log(todo, body);
}

async function makeRequest(url, method, body) {

    const response = await 
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const result = await response.json();

    return result;
}