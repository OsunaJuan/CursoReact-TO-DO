import React from 'react'
import { TodoContext } from './TodoContext';

function TodoCounter() {
  const {completedTodos,searchedTodos}=React.useContext(TodoContext);
  return (    
    <h1 className='TodoCounter'>Has completado {completedTodos} de {searchedTodos.length} TODO's</h1>
  )
}

export {TodoCounter}
