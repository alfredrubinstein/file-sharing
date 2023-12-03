import { useHttp } from "../helpers/helperBook";

import '../styles/Albums.css';
export function Albums(){
  
  const { isLoading, error, data } = useHttp(
    "https://jsonplaceholder.typicode.com/albums"
  );

  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("data:", data);




  return (
<div>
<h1>Albums </h1>
         { isLoading && <p>Loading...</p> }
        { error && <p>Error: {error}</p> }
        { !isLoading && data && (
          <ul>
            {data.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
</div>

  )
}

