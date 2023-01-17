import react from "react";

function TodoList(props){
    return(
        <section className="TodoList-container">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};