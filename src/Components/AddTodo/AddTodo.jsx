import { useState } from "react"
import "./AddTodo.css"
function AddTodo({updateList})
{
    const [inputText,setInputText] = useState("")
    return (
        <div className="Add-Todo">
        <input type="text" placeholder="Add List..."  onChange={(e)=>{setInputText(e.target.value)}} />
        <button onClick={()=>updateList(inputText) }>Add Todo</button> 
        </div>
    )   

}

export default AddTodo