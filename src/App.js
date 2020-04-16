import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';

const App = () => {
  const [{count, count2, randomCount}, setCount] = useState({count: 10, count2: 20, randomCount: 10});
  const [values, handleChange] = useForm({email:"", password: ""});
  const [showHello, setShowHello] = useState(true);
  const {apiData, loading} = useFetch(`http://numbersapi.com/${randomCount}/trivia`)


  return( <div className="container">
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
    <hr />

    <h2>API example</h2>
      <p>Number: {randomCount}</p>
      <p>{apiData}</p>
      <button onClick={
        () => setCount(c =>({
          ...c,
          randomCount: Math.floor(Math.random() * 1000)
        }))}>Get a new random number fact</button>
        <p>{loading ? "Loading..." : ""}</p>
    </div>
  )
}

export default App;
