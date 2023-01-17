import React from 'react'

function TodoCounter(props) {
  const {completedTodo,todoCount}=props;
  return (    
    <h1 className='TodoCounter'>Has completado {completedTodo} de {todoCount} TODO's</h1>
  )
}

export {TodoCounter}
