import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Newsletter from './components/Newsletter'
import Article2025 from './components/Article2025'
import ArticleKathy from './components/ArticleKathy'
import ArticleTenants from './components/ArticleTenants'
import ArticleRentalLaws from './components/ArticleRentalLaws'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/article-2025" element={<Article2025 />} />
          <Route path="/article-kathy" element={<ArticleKathy />} />
          <Route path="/article-tenants" element={<ArticleTenants />} />
          <Route path="/article-rental-laws" element={<ArticleRentalLaws />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 