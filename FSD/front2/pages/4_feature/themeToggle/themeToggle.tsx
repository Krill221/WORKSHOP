'use client'

import React from 'react'
import { toggleTheme } from './model'

function ThemeToggle() {
  return (
    <div>
      <button onClick={toggleTheme}>theme</button>
    </div>
  )
}

export default ThemeToggle