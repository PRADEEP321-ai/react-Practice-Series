import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    // const addValue = () =>{
    //   setCount(count + 1);
    // }

    // const removeValue =  () => {
    //   setCount(count - 1);
    // }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() =>{setCount(count + 1)}}>Increment</button>
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
    </> 
  )
}

export default App
