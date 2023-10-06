import { useState } from 'react'
import Bio from "./Bio";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
          <h1 id="title">
          Jascha Heifetz, The Greatest Violinist!
          </h1>
      <Bio />
    </div>
    </>
  )
}

export default App
