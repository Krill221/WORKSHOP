import React, { useEffect, useState } from 'react'


export function useDebounce<T>(value: T, delay?: number): T {
  const [res, setRes] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout( () => setRes(value), delay || 500 )
    return () => { clearTimeout(timer) }
  }, [value, delay])

  return res
}

function PostSearch({ onSearch }) {
  const [text, setText] = useState<string>('')

  const debouncedValue = useDebounce<string>(text, 200)

  useEffect( () => { onSearch(debouncedValue) }, [debouncedValue] )

  return (
    <div className='w-full flex gap-4'>
      <input
        className='flex-auto w-64 h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900'
        onChange={e => setText(e.currentTarget.value) }
        value={text}
      />
    </div >
  )
}

export default PostSearch