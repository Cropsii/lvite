import React, { useState } from 'react'

export default function TodoButton() {
    const [count,setCount] = useState(0)
    const pressHeandler = () =>{
        setCount(count + 1)
    }
  return (
    <>
    <l className='todoItem' onClick={pressHeandler}>Count: {count}</l>
    </>
  )
}
