import './App.css'
import PageLayout from './components/layout/PageLayout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <div style={{minHeight: '100vh', display:'flex', flexDirection: 'column'}}>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </div>
    </>
  )
}

export default App
