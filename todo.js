//Todo app

//Basic starting data model

todos = [
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

    // Display todos 
     todos.map((todo) => {
         let item = document.createElement('li');
        item.innerText = todo.name
        document.querySelector('ul').appendChild(item)
         })
     
   
    // Add item to todo array with button click
    const todoButton = document.querySelector("button")
    todoButton.addEventListener("click", (event) => {todos.push(newItem.value)});
  function addItem (){
    let newItem = {
        name: document.getElementById("inputtodo").value,
    status: false,
    id: todos.length + 1
    }
    todos.push(newItem)
    console.log(todos)
    }

    
   

    
    
    

   
      