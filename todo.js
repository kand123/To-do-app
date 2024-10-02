//Todo app

//Basic starting data model

let todos = [
    {
        name: "wash clothes",
        status: false,
        id: 1,
    }, 
    {
        name: "do dishes",
        status: false,
        id: 2,
    },
    {
        name: "email quote",
        status: false,
        id: 3,
    }
    
    ]

  
    
    // Add item to todo array with button click
    
  function addItem (){
    const inputField = document.getElementById("inputtodo");
    let newItem = {
        name: inputField.value,
    status: false,
    id: todos.length + 1
    }
    todos.push(newItem)
    
    const todoButton = document.querySelector("button")
    todoButton.addEventListener("click", (event) => {todos.push(newItem.value), inputField.value = ""
       
    });
    console.log(todos)
    return todos
    }




      //  Display todos 

    
   todos.forEach((todo) => {
    if (todo.status === false) {
    let item = document.createElement('li')
    item.innerText = todo.name
  document.querySelector('ul').appendChild(item)
    }
});

    // todos.map((todo) => {
    //     let item = document.createElement('li');
    //     item.innerText = todo.name
    //     document.querySelector('ul').appendChild(item)
    //      })




   
    

    
    
    

   
      