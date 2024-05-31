import { NavLink } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
//import redux
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/authSlice'

const Nav = () => {
  // Récupération des données utilisateur, du token et stockage des valeurs dans des variables.
  const userData = useSelector((state) => state.auth.user)
  // console.log('userData :', userData)

  const token = useSelector((state) => state.auth.token)

  // Initialisation des fonctions useDispatch et useNavigate

  const dispatch = useDispatch()

  //Fonction de deconnexion
  const handleSignOut = () => {
    // console.log('Déconnexion en cours...')
    dispatch(logOut())
  }

  return (
    <nav>
      <NavLink to='/' className='navLogo'>
        <img src={logo} alt='Logo de la société ArgentBank' />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      <div className='navSign'>
        {token && userData ? (
          <>
            <FontAwesomeIcon icon={faCircleUser} className='faCircleUser' />
            <NavLink to='/User' className='userName'>
              {userData.userName}
            </NavLink>
            <NavLink className='faSignOut' onClick={handleSignOut}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className='faSignOutIcon'
              />
              Sign out
            </NavLink>
          </>
        ) : (
          <NavLink to='/SignIn' className='faSignIn'>
            <FontAwesomeIcon icon={faCircleUser} className='faCircleUser' />
            Sign in
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default Nav
