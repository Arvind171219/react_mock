import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount ]= useState(0);

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
  return (
    <div>
      <h2>Counter App </h2>
       <p>Count : {count}</p>
       <button onClick={increment}> Increments </button>
       <button onClick={decrement} > decrement </button>
    </div>
  )
}

  