import React, { useContext } from 'react'
import { TodoContext } from './StoreTodos'

function TodoItem({ todo }) {
  const ctx = useContext(TodoContext)
  return (
    <div className="bg-slate-100 m-4 ml-0 mr-0 p-4 text-sm rounded-md">
      <div className="">
        <h1
        className={
          todo.completed ?
            'text-lg font-semibold text-slate-900 line-through'
            :
            'text-lg font-semibold text-slate-900'
        }
        >
          {todo.title}
        </h1>
        {/* <div className="text-lg font-semibold text-slate-500">
          id: {todo.id}
        </div> */}
      </div>
      <div className="flex-auto flex space-x-4">
        <button className={
          todo.completed ?
            'h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 bg-black text-white'
            :
            'h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900'
        }
          onClick={() => ctx.toggleTodo(todo.id)}
        >
          <svg width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 50 50">
            <path fillRule="evenodd" clipRule="evenodd" d="M 41.957031 8.9765625 A 2.0002 2.0002 0 0 0 40.333984 9.8945312 L 21.503906 38.279297 L 9.3261719 27.501953 A 2.0007191 2.0007191 0 1 0 6.6738281 30.498047 L 20.574219 42.796875 A 2.0002 2.0002 0 0 0 23.566406 42.40625 L 43.666016 12.105469 A 2.0002 2.0002 0 0 0 41.957031 8.9765625 z"></path>
          </svg>
        </button>
        <button className='h-10 px-6 font-semibold rounded-md rounded-md border border-slate-200 text-slate-900 bg-black text-white' onClick={() => ctx.removeTodo(todo.id)} >Remove</button>
      </div>
    </div>
  )
}

export default TodoItem