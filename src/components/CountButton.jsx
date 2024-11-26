import React, { useState } from 'react'

export default function TodoButton() {
    const [count,setCount] = useState(0)
    const pressHeandler = () =>{
        setCount(count + 1)
    }
  return (
    <>
    <div style={{userSelect:"none"}} className='todoItem' onClick={pressHeandler} >Count: {count}</div>
    </>
  )
}
