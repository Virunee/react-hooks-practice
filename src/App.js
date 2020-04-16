import React, { useState } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello'

const App = () => {
  const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  const [values, handleChange] = useForm({email:"", password: ""});
  const [showHello, setShowHello] = useState(true);


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
    <input name="email" placeholder="example@example.com" value={values.email} onChange={handleChange}/>
    <input name="password" value={values.password} type="password" onChange={handleChange}/>
    <hr/>
    
    <h2>useEffect example</h2>
    <button onClick={() => setShowHello(!showHello)}>Toggle</button>
    {showHello && <Hello />}
    </div>
  )
}

export default App;
