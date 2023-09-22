import React, { useContext, useState } from 'react'
import { TodoContext } from './StoreTodos';

function TodoInput() {

  const [text, setText] = useState('');
  const ctx = useContext(TodoContext)

  return (
    <div className='w-full flex gap-4'>
        <input className='flex-auto w-64 h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900' onChange={e => { setText(e.currentTarget.value) }} value={text} />
        <button className='flex-auto w-32 h-10 px-6 font-semibold rounded-md bg-black text-white' onClick={() => { ctx.addTodo(text) }} >Add</button>
    </div >
  )
}

export default TodoInput