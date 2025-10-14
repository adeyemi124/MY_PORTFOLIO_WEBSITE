import React from 'react'
import HomePage from './pages/HomePage'
import BlogPostPage from './pages/BlogPostPage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  )
}

export default App
