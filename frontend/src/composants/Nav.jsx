import { NavLink } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  return (
    <nav>
      <NavLink to='/' className='navLogo'>
        <img src={logo} alt='Logo de la société ArgentBank' />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      <NavLink className='navSign'>
        <FontAwesomeIcon icon={faCircleUser} className='faCircleUser' /> Sign in
      </NavLink>
    </nav>
  )
}

export default Nav
