import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/ui/navigation'
import Home from './pages/Home'
import Submit from './pages/Submit'
import Feed from './pages/Feed'
import Simulate from './pages/Simulate'
import Vote from './pages/Vote'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/simulate" element={<Simulate />} />
            <Route path="/vote" element={<Vote />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App