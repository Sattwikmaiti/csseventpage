import React from 'react'
import Timeline from './components/Timedekho/Timeline.js'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Timeline />}/>       
          
           </Routes>
      </Router>
    </div>
  )
}

export default App
