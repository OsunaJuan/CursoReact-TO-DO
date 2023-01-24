import React from 'react'
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { Modal } from './Modal';
import { ModalCreateTodo } from './ModalCreateTodo';
import { TodoContext } from './TodoContext';

function TodoAPPUI() {

  const {
    loading,
    error,
    ToggleCompletedTodo,
    EliminateTodo,
    searchedTodos,
    modalIsOpen
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
        
        {!!modalIsOpen && (
          <Modal>
            <ModalCreateTodo/>
          </Modal>
        )}
      </section>
  )
}

export{TodoAPPUI}
