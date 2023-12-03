import '../styles/Posts.css';
import { useHttp } from "../helpers/helperBook";

export function Posts(){


  const { isLoading, error, data } = useHttp(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("data:", data);

  return (
    <div>
<h1>Posts</h1>   
        { isLoading && <p>Loading...</p> }
        { error && <p>Error: {error}</p> }
        { !isLoading && data && (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}><h6>TITLE</h6>{todo.title} <h6>BODY</h6>{todo.body}</li>
            ))}
          </ul>
        )}
    </div>
  )
}
