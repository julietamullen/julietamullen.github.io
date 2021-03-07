import React from "react";
import Todo from "./Todo"

const Todolist = ({todos, setTodos, todo, filtered}) => {
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filtered.map((todo) => (
                <Todo 
                text={todo.text} 
                key={todo.id} 
                todos={todos} 
                todo={todo} 
                setTodos={setTodos}
                filtered={filtered}
                />
            ))
            }
        </ul>
        </div>
    );
};

export default Todolist;
