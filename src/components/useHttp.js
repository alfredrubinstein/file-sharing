//creacion de el useState personalizado

import { useState, useEffect } from 'react';

 export const useHttp = (url) => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
 setIsLoading(true);
 setError(null)
 fetch(url)
 .then(response => {
 if (!response.ok) {
 setError('Failed to fetch.');
 throw new Error('Failed to fetch.');
 }
 return response.json();
 })
 .then(data => {
 setIsLoading(false);
 setError(null);
 setData(data);
 })
 .catch(err => {
 setError(err);
 setIsLoading(false);
 });
 }, [url]);

 return { isLoading, error, data };
 };







//AHORA SE PUEDE USAR ESTE HOOK
//  import { useHttp } from "./useHttp";
 
//      function App() {
//      const { isLoading, error, data } = useHttp(
//       "https://jsonplaceholder.typicode.com/Albums"
//       );
     
//       return (
//       <div className="App">
//       <h1>Todo List</h1>
//       { isLoading && <p>Loading...</p> }
//       { error && <p>Error: {error}</p> }
//       { !isLoading && data && (
//       <ul>
//       {data.map((todo) => (
//       <li key={todo.id}>{todo.title}</li>
//       ))}
//       </ul>
//       )}
//       </div>
//       );
//       }
//        export default App;
    
    
    



//        PARA HACER UNA PETICION POST
//        import { useState, useCallback } from 'react';
      
//        export const useHttp = () => {
//        const [isLoading, setIsLoading] = useState(false);
//        const [data, setData] = useState(null);
//        const [error, setError] = useState(null);
      
//        const sendRequest = useCallback(
//        async (url, method = 'GET', body = null) => {
//        setIsLoading(true);
//        setError(null);
//        try {
//        const response = await fetch(url, {
//        method: method,
//        body: body ? JSON.stringify(body) : null,
//        headers: body ? { 'Content-Type': 'application/json' } \
//        : {},
//        });
      
//        if (!response.ok) {
//        throw new Error('Request failed!');
//        }
      
//        const data = await response.json();
//        setData(data);
//        } catch (err) {
//        setError(err.message || 'Something went wrong!');
//        }
//        setIsLoading(false);
//        }, []
//        );
      
//        return { isLoading, data, error, sendRequest };
//       };









//Y AQUI COMO USAR ESTA FUNCION PARA HACER UNA PETICION POST CUANDO SE ENVIAN DATOS DE UN FORMULARIO
// import { useState } from "react";
//  import { useHttp } from "./useHttp";

//  function App() {
//  const [title, setTitle] = useState("");
//  const [completed, setCompleted] = useState(false);
//  const { isLoading, error, data, sendRequest } = useHttp();
//  const handleSubmit = (event) => {
//  event.preventDefault();
//  sendRequest(
//  "https://jsonplaceholder.typicode.com/todos",
//  "POST",
//  { title, completed }
//  );
//  };

//  return (
//  <div className="App">
//  <h1>Create Todo</h1>
//  <form onSubmit={handleSubmit}>
//  <label>
//  Title:
//  <input
//  type="text"
//  value={title}
//  onChange={(e) => setTitle(e.target.value)}
//  />
//  </label>
//  <label>
//  Completed:
//  <input
//  type="checkbox"
//  checked={completed}
//  onChange={(e) => setCompleted(e.target.checked)}
//  />
//  </label>
//  <button type="submit">Create</button>
//  </form>
//  {isLoading && <p>Loading...</p>}
//  {error && <p>Error: {error}</p>}
//  {!isLoading && data && <p>Todo created with ID: {data.id}</\
//  p>}
//  </div>
//  );
//  }

//  export default App;








// OTRO CUSTOM HOOK PARA PETICIONES PUT



//ME PARECE MEJOR USAR LA FUNCION GENERAL DE CABALLO QUE INCLUYE TODO LOS TIPOS DE MANEJOS PUT...


















//200
//AUTENTICACION 
// const login = async (username, password) => {
//      const response = await fetch('/api/login', {
//      method: 'POST',
//      headers: { 'Content-Type': 'application/json' },
//      body: JSON.stringify({ username, password }),
//      });
//      const data = await response.json();
    
//      if (response.ok) {
//      return data.token;
//  } else {
//      throw new Error(data.message);
//      }
//      };





//ALMACENAMIENTO DE EL TOKEN
// const [token, setToken] = useState(null);

//  const handleLogin = async (username, password) => {
//  try {
//  const token = await login(username, password);
//  setToken(token);
//  } catch (error) {
//  console.error('Login failed:', error.message);
//  }
//  };




//MANDANDO EL TOKEN PARA REALIZAR ALGO QUE NECESITA AUTORIZACION
//  const fetchPrivateData = async (token) => {
//      const response = await fetch('/api/private', {
//      headers: { Authorization: `Bearer ${token}` },
//      });
    
//      if (response.ok) {
//      return response.json();
//      } else {
//      throw new Error('Failed to fetch private data');
//      }
//      };






//GUARDAR EL TOKEN EN EL LOCAL STORAGE
// const handleLogin = async (username, password) => {
//      try {
//      const token = await login(username, password);
//      localStorage.setItem('token', token);
//      } catch (error) {
//      console.error('Login failed:', error.message);
//      }
//      };



//RECUPERAR EL TOKEN DE EL LOCAL STORAGE
// const token = localStorage.getItem('token');



//LOGICA ENCAPZULADA PARA EL USO Y ALMACENAMIENTO DE EL TOKEN
// import { useState, useEffect } from 'react';

//  const useToken = () => {
//  const [token, setToken] = useState(null);

//  useEffect(() => {
//  const storedToken = localStorage.getItem('token');
//  if (storedToken) {
//  setToken(storedToken);
//  }
//  }, []);
//   const saveToken = (newToken) => {
//      localStorage.setItem('token', newToken);
//      setToken(newToken);
//      };
    
//      return {token, saveToken};
//      };
    
//      export default useToken;



//EJEMPLO DE USO DE ESTE HOOK AL INICIO DE LA SECION
// import useToken from './useToken';

//  const Login = () => {
//  const { token, saveToken } = useToken();

//  const handleLogin = async (username, password) => {
//  try {
//  const newToken = await login(username, password);
//  saveToken(newToken);
//  } catch (error) {
//  console.error('Login failed:', error.message);
//  }
//  };

//  // ...
//  };




//!!!Firebase Auth BIBLIOTECA PARA AUTENTICAZION USANDO GOOGLE Y CODIGOS DE OTRAS APLICACIONES
//Auth0





