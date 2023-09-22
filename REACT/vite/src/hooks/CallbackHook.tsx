import React, { useCallback, useState } from 'react'

function CallbackHook() {

  const [count, setCount] = useState(0)
  const handleLoad = useCallback(()=> {
    async function load() {
      const ans = await fetch('https://jsonplaceholder.typicode.com/todos/' + count).then( res => res.json())
      console.log(ans)
    }
    load()
  }, [count])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(prev => prev + 1)} >add</button>
      <button onClick={handleLoad} >load</button>
    </>
  )
}

export default CallbackHook