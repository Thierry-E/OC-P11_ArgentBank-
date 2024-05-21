import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  // Ajout des états pour les données utilisateurs et le message d'erreur.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  //Ajout des fonctions "handleEmailChange" et "handlePasswordChange" permettant la mise à jour des états.
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    // console.log('email :', event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    // console.log('password :', event.target.value)
  }

  // Ajout de la fonction "handleAuth" pour envoyer à l'API les données d'authentification en utilisant la valeur actuelle des états.

  const handleAuth = (event) => {
    event.preventDefault()

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête')
        }
        return response.json()
      })
      .then((data) => {
        console.log("Réponse de l'API :", data)
        setLoginMessage('Connexion réussie !')
      })
      .catch((error) => {
        console.log('Error while signin in :', error)
        setLoginMessage(
          'Echec de la connexion, veuillez vérifiez vos identifiants.'
        )
      })
  }

  return (
    <section className='Form'>
      <FontAwesomeIcon icon={faCircleUser} className='faCircleUser' />
      <h1>Sign In</h1>
      <form>
        <div className='inputWrapper'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='inputWrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='inputRemember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button className='submitButton' onClick={handleAuth}>
          Sign In
        </button>
        {/* Message de connexion */}
        <p>{loginMessage}</p>
      </form>
    </section>
  )
}

export default Form
