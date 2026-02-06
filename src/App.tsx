import './App.css'
import PageLayout from './components/layout/PageLayout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div style={{minHeight: '100vh', display:'flex', flexDirection: 'column'}}>
          <AppRoutes />
      </div>
    </>
  )
}

export default App
