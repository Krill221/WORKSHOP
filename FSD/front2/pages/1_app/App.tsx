'use client'
import Home from "../2_pages/home/home"
import Tutorials from "../2_pages/tutorials/tutorials"
import { $router } from "../6_shared/router"
import { useStore } from '@nanostores/react'

function App() {

  const page = useStore($router)

  switch (page.route) {
    case 'home':
      return <Home />
    case 'tutorials':
      return <Tutorials />
    case 'track':
      return <Tutorials trackId={page.params.trackId} />
    default:
      return <Home />
  }
}

export default App
