import '@/App.css'
import Home from '../Home'
import Dashboard from '../Dashboard'
import Login from '../Login.jsx'
import Notfound from '../Notfound'
import Signup from '../Signup'

const App = () => {
  return (
    <div className='bg-pink'>
      <Home />
      <Dashboard />
      <Login />
      <Notfound />
      <Signup />
    </div>
  )
}
export default App
