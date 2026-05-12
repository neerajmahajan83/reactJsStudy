"use client"; // This line is the fix!

import { useState } from 'react';


function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e:any) {
    setName(e.target.value);
  }

  function handleSubmit(e:any) {
    e.preventDefault();
    alert(name);
  }

  return (
    <div>
      <h1>Example of useState controlled component!</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text" 
            value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
    </div>
  )
}


export default MyForm;