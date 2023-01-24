import React from "react";
import { TodoContext } from "./TodoContext";

function CreateTodoButtom(){
    const { modalIsOpen,setModalIsOpen} = React.useContext(TodoContext);

    function buttonOnClick(){
        setModalIsOpen(!modalIsOpen)
    }

    return(
        <button className="CreateTodoButtom" onClick={buttonOnClick}>Añadir</button>
    );
}

export { CreateTodoButtom};