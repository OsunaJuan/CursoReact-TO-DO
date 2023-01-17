import React from 'react';
import {TodoCounter} from "./componentes/TodoCounter"
import {TodoSearch} from './componentes/TodoSearch'
import {TodoList} from './componentes/TodoList'
import {TodoItem} from './componentes/TodoItem'
import {CreateTodoButtom} from './componentes/CreateTodoButtom'

let Todos = [
  {text: "Llamar Mama", completed: true},
  {text:"Sacar Perro", completed: true}
]

function App() {

  const [searchedValue,setSearchedValue] = React.useState("");

  let searchedTodos = Todos.filter(todo => 
    todo.text.toLowerCase().includes(searchedValue.toLowerCase())
  );
  
  let completedTodos = searchedTodos.filter(todo => todo.completed).length;


  return (
    <section className="TodoMain">
      <TodoCounter
      completedTodo = {completedTodos}
      todoCount = {searchedTodos.length}
      />
      <TodoSearch
       searchedValue = {searchedValue}
       setSearchedValue = {setSearchedValue}
      />

      <TodoList>
        {searchedTodos.map((todo,index) => (
          <TodoItem TODO={todo} key={index}/>
        ))}
      </TodoList>
      <CreateTodoButtom/>
    </section>
      
    
  );
}

export default App;
