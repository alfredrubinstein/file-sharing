import "./Todos.css";
import TodoContentDiv from "./TodoContentDiv";
import { useState, useRef } from "react";
import plus from "./img/add.png";

function Todos() {
    const [todosNum, setTodosNum] = useState(0);
    const [components, setComponents] = useState([]);
    const input = useRef();

    function addElement() {
        const inputValue = input.current.value;
        const newId = todosNum;
        setTodosNum(prevTodosNum => prevTodosNum + 1);
        setComponents(prevComponents => [
            ...prevComponents,
            <TodoContentDiv
                key={newId}
                id={newId}
                contentText={inputValue}
                onDelete={deleteElement}
            />
        ]);
        input.current.value = "";
    }

    function deleteElement(idToDelete) {
        setTodosNum(prevTodosNum => prevTodosNum - 1);
        setComponents(prevComponents =>
            prevComponents.filter(component => component.props.id !== idToDelete)
        );
    }

    return (
        <>
            <div id="container">
                <div>
                    <center>
                        <h1>מטלות</h1>
                    </center>
                </div>
                <input type="text" placeholder="הכנס משימה חדשה" ref={input} />
                <img src={plus} onClick={addElement} width="30px" title="הוסף" />

                <div>מספר המטלות שלך הוא: {todosNum}</div>

                {components}
            </div>
        </>
    );
}

export default Todos;


