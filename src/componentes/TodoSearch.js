import react from "react";
import searchIcon from '../imgs/SearchIcon.png'

function TodoSearch({searchedValue,setSearchedValue}){

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