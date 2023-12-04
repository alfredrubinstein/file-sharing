import { useState, useRef } from "react";
import plus from "../images/add.png";
import PostContentDiv from "../components/PostContentDiv";


export function Posts() {
  // const { isLoading, error, data } = useHttp(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );

  const [postsNum, setPostsNum] = useState(0);
  const [components, setComponents] = useState([]);
  const input = useRef();

  function addElement() {
    const inputValue = input.current.value;
    const newId = postsNum;
    setPostsNum((prevPostsNum) => prevPostsNum + 1);
    setComponents((prevComponents) => [
      ...prevComponents,
      <PostContentDiv
        key={newId}
        id={newId}
        contentText={inputValue}
        onDelete={deleteElement}
      />,
    ]);
    input.current.value = "";
  }

  function deleteElement(idToDelete) {
    setPostsNum((prevPostsNum) => prevPostsNum - 1);
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.props.id !== idToDelete)
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

        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && data && (
          <ul>
            {data.map((post) => (
              <li key={post.id}>
                <h6>TITLE</h6>
                {post.title} <h6>BODY</h6>
                {post.body}
              </li>
            ))}
          </ul>
        )} */}

        {components}
      </div>
    </>
  );
}

