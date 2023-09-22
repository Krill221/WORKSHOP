import React, { useRef } from 'react'

function RefHook() {

  const ref = useRef(null)

  console.log(ref)

  const handleShow = () =>{
    console.log(ref)
    ref.current.value = 123
    ref.current.focus()
  }

  return (
    <div>
      <div>{ref.current}</div>
      <input ref={ref} type='text' />
      <button onClick={handleShow} >show</button>
    </div>
  )
}

export default RefHook