import React, { createContext, useEffect, useReducer } from 'react'

const ACTIONS = {
  INIT: 'INIT',
  ADD: 'ADD',
  TOGGLE: 'TOGGLE',
  REMOVE: 'REMOVE'
}

const initState = { todos: [] }
const reduce = (state: any, action: any) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return { todos: action.payload}
    case ACTIONS.ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: new Date().valueOf(),
            title: action.payload,
            completed: false,
          }
        ]
      }
    case ACTIONS.TOGGLE:
      return {
        todos: state.todos.map( (item: any) => {
          if (item.id === action.payload) {
            item.completed = !item.completed
          }
          return item
        })
      }
    case ACTIONS.REMOVE:
      return {
        todos: state.todos.filter((item: any) => {
          return item.id !== action.payload
        })
      }
    default:
      return state
  }
}
const TodoContext = createContext(null);



function StoreTodos({ children }) {

  const [state, dispatch] = useReducer<any>(reduce, initState)

  useEffect(() => {

    async function load(){
      const ans = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
      dispatch({ type: ACTIONS.INIT, payload: ans })
    }
    //load()

  }, [])

  const value = {
    list: state,
    addTodo: (text) => {
      dispatch({ type: ACTIONS.ADD, payload: text })
    },
    removeTodo: (id) => {
      dispatch({ type: ACTIONS.REMOVE, payload: id })
    },
    toggleTodo: (id) => {
      dispatch({ type: ACTIONS.TOGGLE, payload: id })
    }
  }

  return (
    <TodoContext.Provider value={value} >{children}</TodoContext.Provider>
  )
}

export default StoreTodos
export { TodoContext }