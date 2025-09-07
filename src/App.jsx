import { useState } from 'react'

// components, css
import Header from './components/header/Header'
import Intro from './components/Intro'
import '../src/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Intro/>
    </>
  )
}

export default App
