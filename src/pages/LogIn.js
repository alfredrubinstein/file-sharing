import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import '../styles/LogIn.css';

const initialForm = {
  name: "",
  password: "",
  id: null,
};

export const LogIn = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate(); // Change this line

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.password) {
      alert('נא למלא את כל השדות');
    } else {
      navigate('localhost:3002'); // Change this line
    }
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='הכנס את השם שלך'
          onChange={handleChange}
          value={form.name}
        />
        <br />
        <input
          type='text'
          name='password'
          value={form.password}
          onChange={handleChange}
          placeholder='הכנס את הסיסמה'
        />
        <br />
        <input type="submit" value="שלח" />
        <input type="reset" value="מחק" onClick={handleReset} />
      </form>
    </>
  );
};
