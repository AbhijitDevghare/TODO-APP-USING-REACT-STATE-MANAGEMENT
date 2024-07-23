import Todo from "../Todo/Todo"

function TodoList({list,setTodoList})
{
   return ( 
    <>  
      {
      list.length>0 &&  
        
      list.map((todo)=> <Todo 
                        key={todo.id} 
                        id={todo.id} 
                        isFinished={todo.isFinished} 
                        tododata={todo.tododata}

                        changeFinished={(finished)=>{
                            console.log("Change Finished ",finished)
                            console.log("Todo",list)
                            const updatedList = list.map(t=>{
                              if(t.id == todo.id){
                                todo.isFinished=finished;
                              }
                              return t
                            })

                          }
                        }

                        deleteTodo={()=>{
                          console.log("DELETE")
                          const updatedList = list.filter((t)=>
                            {
                              return t.id!=todo.id
                            })
                            setTodoList(updatedList)
                            console.log("PRINITNG LIST : ",list)
                        }}

                        editTodo={
                          (inputText)=>{
                          const updatedList = list.map(t=>{
                            if(t.id == todo.id)
                            {
                              console.log(inputText)
                              t.tododata=inputText
                            }
                            return t;
                          })
                          setTodoList(updatedList)

                        }
                      }

        

            />)
        }
    </>
   )
}

export default TodoList