import './App.css'
import { useState } from "react"
import AddTodo from './Components/AddTodo/AddTodo'
import TodoList from './Components/TodoList/TodoList'
function App() {
  
  const [list,setTodoList] = useState([
    {id:1,tododata:"todo1",isFinished:false },
    {id:2,tododata:"todo2",isFinished:false},
    
])

  return (
    <>
     <AddTodo updateList = {(todo)=>setTodoList([
      ...list,
      {id: list.length+1,tododata:todo,isFinished:false}
     ])}/>
     
     <TodoList list={list} setTodoList={setTodoList} />
    </>
  )
}

export default App
