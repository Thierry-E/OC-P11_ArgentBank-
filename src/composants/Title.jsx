import { useState } from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
  const [isEditingUser, setIsEditingUser] = useState(false)
  const userData = useSelector((state) => state.auth.user)

  // Ajouter une vérification pour s'assurer que userData est défini
  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <div className='userTitle'>
      {!isEditingUser && (
        <h1>
          Welcome back <br /> {userData.firstName} {userData.lastName}
        </h1>
      )}
      {isEditingUser && (
        <form className='userForm'>
          <input type='text' name='userName' value='userData.userName' />
          <input type='text' name='firstName' value='userData.firstName' />
          <input type='text' name='lastName' value='userData.lastName' />
          <input type='submit' value='Enregistrer' className='userFormSubmit' />
          <button
            type='button'
            onClick={() => setIsEditingUser(false)}
            className='userFormButton'
          >
            Annuler
          </button>
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
