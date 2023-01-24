import React from 'react'
import ReactDOM  from 'react-dom'
import { TodoContext } from './TodoContext'

function Modal({children}) {

    const { modalIsOpen,setModalIsOpen} = React.useContext(TodoContext);

    function ModalOnClick(e){
        if(e.target.matches(".modalBackGround") && !(e.target.matches(".modalButtons"))){
            
            setModalIsOpen(!modalIsOpen)
        }
    }

    return ReactDOM.createPortal(
    <div className='modalBackGround' onClick={e=>ModalOnClick(e)}>
        {children}
    </div>,
    document.getElementById("modal")
  )
}

export {Modal}