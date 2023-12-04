import { useState, useRef } from "react";
import plus from "../images/add.png";
import AlbumContentDiv from "../components/AlbumContentDiv";

export function Albums() {
  // const { isLoading, error, data } = useHttp(
  //   "https://jsonplaceholder.typicode.com/albums"
  // );

  const [albumsNum, setAlbumsNum] = useState(0);
  const [components, setComponents] = useState([]);
  const input = useRef();

  function addElement() {
    const inputValue = input.current.value;
    const newId = albumsNum;
    setAlbumsNum((prevAlbumsNum) => prevAlbumsNum + 1);
    setComponents((prevComponents) => [
      ...prevComponents,
      <AlbumContentDiv
        key={newId}
        id={newId}
        contentText={inputValue}
        onDelete={deleteElement}
      />,
    ]);
    input.current.value = "";
  }

  function deleteElement(idToDelete) {
    setAlbumsNum((prevAlbumsNum) => prevAlbumsNum - 1);
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.props.id !== idToDelete)
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

        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && (
          <ul>
            {data.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        )} */}

        {components}
      </div>
    </>
  );
}

