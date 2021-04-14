const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const todos = [
    {
        id: 1,
        title: 'eat',
    },
     {
        id: 2,
        title: 'sleep',
    }
]

app.use(express.static('./public'));

app.use(express.json());

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const findTodo = todos.find((todo) => { 
        return todo.id == id;
    })

     if (!findTodo) {
       return res.status(404).json("couldnt find id");
     }

    res.json(findTodo);
})

app.post('/todos', (req, res) => {

    if(!req.body.title) {
        return res.json('not found');
    }
    const titleToSave = req.body.title

    let idToSave = 0;
    todos.forEach((todo) => {
        if(todo.id > idToSave ) {
            idToSave = todo.id;
        }
    })
    idToSave++;

    todos.push({
        id: idToSave,
        title: titleToSave,
    })

    res.json({
        status:  'ny todo tillagd'
    });
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});