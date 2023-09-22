import React, { useContext } from 'react'
import { TodoContext } from './StoreTodos'
import TodoItem from './TodoItem'

function TodoList() {
  const ctx = useContext(TodoContext)
  return (
    <div className="font-medium">
      {
        ctx.list.todos?.map( item => <TodoItem key={item.id} todo={item} />)
      }
    </div>
  )
}

export default TodoList