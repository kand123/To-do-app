//Todo app

//Basic starting data model

todos = [
    {
        name: "wash clothes",
        status: false,
        id: 1,
        category: "chores",
        date: ''
    }, 
    {
        name: "do dishes",
        status: false,
        id: 2,
        category: "chores",
        date: ''
    },
    {
        name: "email quote",
        status: false,
        id: 3,
        category: "work",
        date: ''
    }
    
    ]

    // Display todos 
     todos.map((todo) => {
         let item = document.createElement('li');
        item.innerText = todo.name
        document.querySelector('ul').appendChild(item)
         })
     
   
    // Add item to todo array

  // function addTodo (newItem){
    // const todo = {
    
    // }

    
  
    
    // todos.append(todo)
    // }
    
      