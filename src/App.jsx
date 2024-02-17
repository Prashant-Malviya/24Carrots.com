import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import VideoWrapper from './Components/VideoWrapper'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <Navbar />
          <Body />
          <Footer />

    </div>
  )
}

export default App
