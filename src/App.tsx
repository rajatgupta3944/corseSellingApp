import { useState } from 'react'
import './App.css'
import PageLayout from './components/layout/PageLayout'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </div>
    </>
  )
}

export default App
