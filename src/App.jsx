import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes here as needed */}
    </Routes>
  )
}

export default App











