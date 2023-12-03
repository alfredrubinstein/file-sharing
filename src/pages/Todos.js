import '../styles/Todos.css';
import { useHttp } from "../helpers/helperBook";


export function Todos(){
  const { isLoading, error, data } = useHttp(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("data:", data);

  return (
    <div>
      <h1>Todo List</h1>
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

