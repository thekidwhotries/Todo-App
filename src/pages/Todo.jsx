import React, { useEffect, useState } from 'react'

function Todo() {
  
  
  // create a new state variable to store all new todo data which we want to add
  const [todo, setTodo] = useState(
    {
      name: null,
      priority: null
    }
  )

  const [listtodo , setListTodo] = useState([])


  useEffect(()=>{
// call function to grab data 
// then setListTodo withat data 
const list = grabTodosfromLocalStorage()
setListTodo(list)

  },[])
 
  // create a function which will grab the todo's from the local storage
  const grabTodosfromLocalStorage = () => {
    // logic
    return JSON.parse(localStorage.getItem('todos'))
  }

  console.log(todo, "todo")

  const handleChange = (event) => {
    console.log(event, "event")
    // It tells us that some change happened meaniing user changes the text for todo
    // now we need to check is it the priority ot the name of the todo ?
    console.log(event.target.value, "data")
    console.log(event.target.name, "field")
    // console.log(event['name'].value , "target")
    setTodo(
      {
        name: event.target.name == 'name' ? event.target.value : todo.name,
        priority: event.target.name == 'priority' ? event.target.value : todo.priority
      }
    )

  }

  const deleteTodo = (todo_name) => {
    const oldTodos = grabTodosfromLocalStorage()
    const filteredTodos = oldTodos.filter((todo)=>(todo.name  != todo_name))
    localStorage.setItem('todos' , JSON.stringify(filteredTodos))
    const newTodo = grabTodosfromLocalStorage()
  setListTodo(newTodo)

  }

  const handleSubmit = (e) => {
    console.log('checks')
    e.preventDefault()

const isDataPresent =  todo.name !=  null  && todo.priority !=null
 
if(isDataPresent){

  console.log(todo, "todo in submit")
  // store this updated value in the local storage bu doing json.stringify
  const oldTodos = grabTodosfromLocalStorage()
  console.log(oldTodos, "old todos") 
  if(oldTodos){
    // concatenate and store
    const updated_data = [...oldTodos , todo]
    console.log(updated_data , "updated data ")
    localStorage.setItem('todos', JSON.stringify(updated_data))
  }else{
    localStorage.setItem('todos',JSON.stringify([todo]))
  }

  const newTodo = grabTodosfromLocalStorage()
  setListTodo(newTodo)

}
else{
  // show 
}

  }



  return (
    <div>
      {/* // let's center this text and make it bigger as heading/ */}
      <h1 className='heading'>My Todo App </h1>
      <form action="" onSubmit={handleSubmit}>
        {/* We need 2 inputs one for Todo Name and other one for Todo Priority (option selection) */}
        <div className='big-box'>


          <div className='todo-name'>
            <textarea name="name" onChange={handleChange} id="" placeholder='Enter Todo Here'></textarea>
          </div>
          <div className='todo-Priority' >
            <select name="priority" id="" className='priority' onChange={handleChange}>
              <option value="">Select the Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <input className='add-todo' type='submit' value='Add Todo'/> 

          </div>




        </div>

      </form>

      {/* Todo Listing */}
      <div className='parent'>
{
  listtodo?.map(todo=>(
    <div className='child'>
    <span>{todo.name}</span>
    <button className='priority-show' >{todo.priority}</button>
    <button className='delete' onClick={()=>{deleteTodo(todo.name)}}>Delete</button>
  </div>
  ))
}
       


      </div>




    </div>
  )
}

export default Todo
