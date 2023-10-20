import { NavLink } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'navbar__item-link navbar__item-link--is-active' : 'navbar__item-link'
  }
  return (
    <nav className=' d-flex justify-content-between items-center top-0 z-10 w-full py-2 px-8 text-md'>
      <ul className='d-flex items-center  list-unstyled list-inline text-black   gap-3'>
        <li className='navbar__list-item'>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)}

          >
            Save the Axolotl
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            All
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>

      <ul className='d-flex items-center list-unstyled list inline text-decoration-none gap-3'>
        <li className='navbar__list-item'>
          <NavLink
            to='/login'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Login
          </NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink
            to='/sign-up'
            className={({ isActive }) => linkIsActive(isActive)}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
