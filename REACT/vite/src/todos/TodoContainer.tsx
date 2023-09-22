import React from 'react'
import StoreTodos from './StoreTodos'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

function TodoContainer() {
  return (
    <StoreTodos>
      <div className="flex-auto p-4">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </StoreTodos>
  )
}

export default TodoContainer