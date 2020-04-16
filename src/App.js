import React, { useState } from 'react';
import './App.css';
import { useForm } from './useForm';

const App = () => {
  const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  const [values, handleChange] = useForm({email:"", password: ""});
  const [password, setPassword] = useState("");

  return( <div>
    <h2>useState Counter example</h2>
    <p>Current count1 is: {count}</p>
    <p>Current count2 is: {count2}</p>

    <button onClick={() => 
      setCount(currentState => ({
        ...currentState,
        count: currentState.count + 1
        }))}>Click me!
    </button>
    <hr/>
    <h2>Form example</h2>
    <input name="email" value={values.email} onChange={handleChange}/>
    <input name="password" value={values.password} type="password" onChange={handleChange}/>
    </div>
  )
}

export default App;
