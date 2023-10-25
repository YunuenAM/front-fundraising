import { useRoutes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import Home from '../Home'
import Dashboard from '../Dashboard'
import Login from '../Login.jsx'
import Notfound from '../Notfound'
import Signup from '../Signup'
import Navbar from '../../components/Navbar'
import Signoff from '../Signoff'
import '@/App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <Notfound /> },
    { path: '/sign-up', element: <Signup /> },
    { path: '/signoff', element: <Signoff /> }

  ])
  return routes
}

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>

  )
}
export default App
