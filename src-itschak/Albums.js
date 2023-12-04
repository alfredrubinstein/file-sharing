// import "./Albums.css";
import AlbumContentDiv from "./AlbumContentDiv.js";
import { useState, useRef } from "react";
import plus from "./img/add.png";

function Albums() {
    const [albumsNum, setAlbumsNum] = useState(0);
    const [components, setComponents] = useState([]);
    const input = useRef();

    function addElement() {
        const inputValue = input.current.value;
        const newId = albumsNum;
        setAlbumsNum(prevAlbumsNum => prevAlbumsNum + 1);
        setComponents(prevComponents => [
            ...prevComponents,
            <AlbumContentDiv
                key={newId}
                id={newId}
                contentText={inputValue}
                onDelete={deleteElement}
            />
        ]);
        input.current.value = "";
    }

    function deleteElement(idToDelete) {
        setAlbumsNum(prevAlbumsNum => prevAlbumsNum - 1);
        setComponents(prevComponents =>
            prevComponents.filter(component => component.props.id !== idToDelete)
        );
    }

    return (
        <>
            <div id="container">
                <div>
                    <center>
                        <h1>אלבומים</h1>
                    </center>
                </div>
                <input type="text" placeholder="הכנס אלבום חדש" ref={input} />
                <img src={plus} onClick={addElement} width="30px" title="הוסף" />

                <div>מספר האלבומים שלך הוא: {albumsNum}</div>

                {components}
            </div>
        </>
    );
}

export default Albums;

