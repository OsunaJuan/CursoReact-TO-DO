import React from "react";
import { TodoContext } from "./TodoContext";
import searchIcon from '../imgs/SearchIcon.png'

function TodoSearch(){
    const {setSearchedValue} = React.useContext(TodoContext)
    
    function inputOnChnage(event){
        setSearchedValue(event.target.value)
    }

    return(
        <span className="SearchInput">
            <input
                onChange={e => inputOnChnage(e)}
            /> 
            <button>
                <img src={searchIcon}/>
            </button>
        </span>
        
    );
}
export {TodoSearch};