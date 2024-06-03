import { useState, useEffect } from 'react'
// Import redux
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/authSlice'

const Title = () => {
  const [isEditingUser, setIsEditingUser] = useState(false)
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const userData = useSelector((state) => state.auth.user)
  const token = useSelector((state) => state.auth.token)
  // console.log('profileToken :', token)
  const dispatch = useDispatch()

  // Vérification de la présence du token ou des données utilisateurs avant l'appel à l'API et Mise à jour des données utilisateurs lorsque l'un des élément du tableau de dépendance change.
  useEffect(() => {
    if (!token || !userData) {
      return
    }

    if (userData && isEditingUser) {
      setUserName(userData.userName || '')
      setFirstName(userData.firstName || '')
      setLastName(userData.lastName || '')
    }
  }, [userData, isEditingUser, token])

  if (!userData) {
    return <div>Loading...</div>
  }

  // Soumission du formulaire à l'API via l'envoie d'une requête, si cette dernière est réussie l'état de Redux est mise à jour avec les nouvelles informations utilisateurs.

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = {
      userName,
      firstName,
      lastName,
    }

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        dispatch(setUser({ userName, firstName, lastName }))
        setIsEditingUser(false)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

  return (
    <div className='userTitle'>
      {!isEditingUser && (
        <h1>
          Welcome back <br /> {userData.firstName} {userData.lastName}
        </h1>
      )}
      {isEditingUser && (
        <form className='userForm' onSubmit={handleSubmit}>
          <h2 className='userFormTitle'>Edit user info</h2>
          <div>
            <label htmlFor='username' className='userFormLabel'>
              User Name:
            </label>
            <input
              type='text'
              id='username'
              name='userName'
              value={userName}
              className='userFormInput'
              //Gère les changements dans le champ de saisie de l'utilisateur.
              // À chaque modification du contenu du champ, la fonction setUserName est appelée
              // pour mettre à jour la valeur du champ userName dans le composant.
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='firstname' className='userFormLabel'>
              First name:
            </label>
            <input
              type='text'
              id='firstname'
              name='firstName'
              value={firstName}
              disabled='true'
              className='userFormInput'
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='lastname' className='userFormLabel'>
              Last name:
            </label>
            <input
              type='text'
              id='lastname'
              name='lastName'
              value={lastName}
              disabled='true'
              className='userFormInput'
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className='userFormButton'>
            <input
              type='submit'
              value='Enregistrer'
              className='userFormSubmit'
            />
            <button
              type='button'
              onClick={() => setIsEditingUser(false)}
              className='userFormCancel'
            >
              Annuler
            </button>
          </div>
        </form>
      )}
      <button className='editButton' onClick={() => setIsEditingUser(true)}>
        Edit Name
      </button>
      <h2 className='sr-only'>Accounts</h2>
    </div>
  )
}

export default Title
