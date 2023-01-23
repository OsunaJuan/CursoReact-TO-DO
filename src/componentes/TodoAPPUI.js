import React from 'react'
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { TodoContext } from './TodoContext';

function TodoAPPUI() {

  const {
    loading,
    error,
    ToggleCompletedTodo,
    EliminateTodo,
    searchedTodos,
   } = React.useContext(TodoContext)

  return (
    <section className="TodoMain">
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
          {loading && <p> Cargando</p>}
          {error && <p> Error! </p>}
          {searchedTodos.map((todo, index) => (
            <TodoItem
              TODO={todo}
              onComplete={() => ToggleCompletedTodo(todo.text)}
              onDelete={() => EliminateTodo(todo.text)}
              key={index}
            />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </section>
  )
}

export{TodoAPPUI}
