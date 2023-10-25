import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          Save the Axolotl
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/' exact className='nav-link' activeClassName='active'>
                All
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/dashboard' className='nav-link' activeClassName='active'>
                Dashboard
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-link' activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/sign-up' className='nav-link' activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/signoff' className='nav-link' activeClassName='active'>
                Sign Off
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
