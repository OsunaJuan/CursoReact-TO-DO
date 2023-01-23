import react from "react";
import ok from '../imgs/Check.png'
import close from '../imgs/Close.png'

function TodoItem(props){
    let {text,completed} = props.TODO;
    return(
        <li>
            <button className={completed&&"TodoCompletedCheck"} onClick={props.onComplete}>&#10004;</button>
            <p className={completed&&"TodoCompletedText"}>{text}</p>
            <button className="deleteTodo" onClick={props.onDelete}>&#10006;</button>
        </li>
    );
}

export { TodoItem };