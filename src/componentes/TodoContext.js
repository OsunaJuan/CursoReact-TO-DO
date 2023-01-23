import React from "react";
import {useLocalStorage} from "../Hooks/useLocalStorage"


const TodoContext = React.createContext();

function TodoProvider(props){

    //Declaracióon del estado y funciones que manejan el completar de un TODO y su eliminación. 

    const {item:ArrayTodos, 
    saveItemsToLocalStorage:saveTODOSToLocalStorage,
    loading, 
    error} = useLocalStorage("TODOS_V1",[
          {text: "¡Create Something Amazing!", completed: false},
    ]);

  function ToggleCompletedTodo(text){
    let todoIndex = ArrayTodos.findIndex(todo => todo.text === text);
    if(!ArrayTodos[todoIndex].completed){

      let newTodos = [...ArrayTodos];
      newTodos[todoIndex].completed = true;
      saveTODOSToLocalStorage(newTodos);

    }else if(!!ArrayTodos[todoIndex].completed){

      let newTodos = [...ArrayTodos];
      newTodos[todoIndex].completed = false;
      saveTODOSToLocalStorage(newTodos);
      
    }
  }

  function EliminateTodo(text){
    let newTodos = ArrayTodos.filter(todo => !(todo.text === text));
    saveTODOSToLocalStorage(newTodos);
  }

  //Declaración del estado utilizado por el buscador de TODO'S.
  const [searchedValue,setSearchedValue] = React.useState("");
  
  let searchedTodos = ArrayTodos.filter(todo => 
    todo.text.toLowerCase().includes(searchedValue.toLowerCase())
  );
    
  let completedTodos = searchedTodos.filter(todo => todo.completed).length;
  console.log(completedTodos, "CONTEXTRT")

    return(

        <TodoContext.Provider value={{ArrayTodos,
            loading,
            error,
            ToggleCompletedTodo,
            EliminateTodo,
            searchedValue,
            setSearchedValue,
            searchedTodos,
            completedTodos
        }}>

        {props.children}

        </TodoContext.Provider>


    )

}

export {TodoContext,TodoProvider};


