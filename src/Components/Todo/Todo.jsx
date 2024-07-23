import { useState } from "react"
import "./Todo.css"

function Todo({tododata,changeFinished,deleteTodo,editTodo})
{
   const [finished,setFinished] = useState(false)
   const [isEditing, setIsEditing] = useState(false)
   const [inputText,setInputText] = useState("");

   return (
    <div className="Todo-ele">
        <input type="checkbox" 
                onChange={(e)=>changeFinished(e.target.checked)}
         />

        {
            isEditing ? <>
                <input type="text" name="" id="" onChange={(e)=>{
                    setInputText(e.target.value)
                }
                    }/>
                <button onClick={
                        ()=>{
                            editTodo(inputText)
                            setIsEditing(false);
                        }}>Save</button>
            </> : <>
            <p>{tododata}</p>
            <button onClick={()=>{
                setIsEditing(true);
            }}>Edit</button>
            </>
        }
        <button onClick={()=>deleteTodo()}>Delete</button>
    </div>
   )
}

export default Todo