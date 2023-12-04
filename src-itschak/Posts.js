import "./Todos.css";
import PostContentDiv from "./PostContentDiv.js";
import { useState, useRef } from "react";
import plus from "./img/add.png";

function Posts() {
    const [postsNum, setPostsNum] = useState(0);
    const [components, setComponents] = useState([]);
    const input = useRef();

    function addElement() {
        const inputValue = input.current.value;
        const newId = postsNum;
        setPostsNum(prevPostsNum => prevPostsNum + 1);
        setComponents(prevComponents => [
            ...prevComponents,
            <PostContentDiv
                key={newId}
                id={newId}
                contentText={inputValue}
                onDelete={deleteElement}
            />
        ]);
        input.current.value = "";
    }

    function deleteElement(idToDelete) {
        setPostsNum(prevPostsNum => prevPostsNum - 1);
        setComponents(prevComponents =>
            prevComponents.filter(component => component.props.id !== idToDelete)
        );
    }

    return (
        <>
            <div id="container">
                <div>
                    <center>
                        <h1>מאמרים</h1>
                    </center>
                </div>
                <input type="text" placeholder="הכנס מאמר חדש" ref={input} />
                <img src={plus} onClick={addElement} width="30px" title="הוסף" />

                <div>מספר המאמרים שלך הוא: {postsNum}</div>

                {components}
            </div>
        </>
    );
}

export default Posts;
