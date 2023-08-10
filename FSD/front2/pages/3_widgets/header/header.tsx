'use client'
import { getPagePath } from '@nanostores/router'
import React from 'react'
import { $router } from '../../6_shared/router'
import ThemeToggle from '../../4_feature/themeToggle/themeToggle'

function Header() {
  return (
    <div className="flex flex-row justify-between space-x-6">
      <div>
        <a href={getPagePath($router, 'home')}>home</a>
        <a href={getPagePath($router, "tutorials")}>tutorials</a>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Header