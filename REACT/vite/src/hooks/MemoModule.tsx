import React, { useMemo, useState } from 'react'

const hardCalc = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) { num += 1;  }
  return num;

}


function MemoModule() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const calc = useMemo( () => hardCalc(count) , [count] )

  return (
    <>
      <div>{calc}</div>
      <div>{count}</div>
      <button onClick={() => setCount(prev => prev+1)}>add</button>
      <div>{count2}</div>
      <button onClick={() => setCount2(prev => prev+1)}>add</button>
    </>
  )
}

export default MemoModule