import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <section className='Form'>
      <FontAwesomeIcon icon={faCircleUser} className='faCircleUser' />
      <h1>Sign In</h1>
      <form>
        <div className='inputWrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className='inputRemember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remeber-me'>Remember me</label>
        </div>
        <NavLink to='/User' className='submitButton'>
          Sign In
        </NavLink>
      </form>
    </section>
  )
}

export default Form
