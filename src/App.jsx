
import { useState } from "react"

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id : 1, 
    title : "Todo 1", 
    description : "Todo 1 description",
    completed: false
  }, {
    id : 2, 
    title : "Todo 2", 
    description : "Todo 2 description",
    completed: false
  },{
    id : 3, 
    title : "Todo 3", 
    description : "Todo 3 description",
    completed: false
  }])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random(),
      completed: false
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      {/* {todos.map( function(todo){
        return <>
        <Todo title={todo.title} description={todo.description} />
        <ButtonClick />
        </>
      })} */}
      
    </>
  )
}

// function ButtonClick() {
//   return <div>
//     <button>Mark as Complete</button>
//   </div>
// }

function Todo({title, description}) {

  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
