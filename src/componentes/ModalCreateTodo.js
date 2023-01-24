import React from 'react'
import { TodoContext } from './TodoContext'

function ModalCreateTodo() {

    const {ArrayTodos,
        saveTODOSToLocalStorage,
        modalIsOpen,
        setModalIsOpen} = React.useContext(TodoContext);

    function getValue(){
        return document.getElementById('textAreaModal').value
    }

    function addNewTODO(texto){
        if(!!texto){
            let newTodos = [...ArrayTodos]
            newTodos.push({text: texto, completed: false})
            saveTODOSToLocalStorage(newTodos)
            setModalIsOpen(!modalIsOpen)
        }else{
            setModalIsOpen(!modalIsOpen)
        }
        
    }

  return (
    <div className='ModalCreateTodo'>
        <h2>Crea un nuevo TODO</h2>
        <textarea id='textAreaModal'></textarea>
        <div className='modalButtons'>
            <button className='buttonCancellModal' onClick={()=>setModalIsOpen(!modalIsOpen)}>Cancelar</button>
            <button className='buttonAddTODO' onClick={()=>addNewTODO(getValue())}>Añadir</button>
        </div>
    </div>
  )
}

export  {ModalCreateTodo}