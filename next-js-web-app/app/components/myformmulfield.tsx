"use client";
import { useState } from "react";


// 1. Define the interface for your form fields
interface FormInputs {
  firstname?: string;
  lastname?: string;
}

function MyFormMulField() { 
// 2. Pass the interface to useState
  const [inputs, setInputs] = useState<FormInputs>({});

  const handleChange = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
// 1. Prevent the page from refreshing
    e.preventDefault();

    // 2. Access the values directly from the state object
    console.log("Form Data Submitted:", inputs);
    
    // You can access individual properties like this:
    alert(`Hello, ${inputs.firstname} ${inputs.lastname}!`);
 
  }

   return (
    <form onSubmit={handleSubmit}>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
      <input type="submit" />

    </form>
  )
}   

export default MyFormMulField;