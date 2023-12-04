import "./ContentDiv.css";
import trashCan from "./img/trash-can.svg";
import pen from "./img/pen.png";

function AlbumContentDiv(props) {
    function updateElement() {
        alert("update!");
    }

    function deleteElement() {
        props.onDelete(props.id);
    }

    return (
        <div className="ContentDiv" key={props.id}>
            <span id="content">{props.contentText}</span>
            <div className="buttonsContainer">
               <div>
                    <img src={pen} onClick={updateElement} width="20px" title="עדכן"/>
                    <img src={trashCan} onClick={deleteElement} width="20px" title="מחק"/>
                </div>
            </div>
        </div>
    );
}

export default AlbumContentDiv;

