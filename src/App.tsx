import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import type { PageKey } from './types/navigation'

function App() {
  const [page, setPage] = useState<PageKey>('home')

  return (
    <Layout onNavigate={setPage} activePage={page}>
      {page === 'home' ? <Home /> : <Dashboard />}
    </Layout>
  )
}

export default App
