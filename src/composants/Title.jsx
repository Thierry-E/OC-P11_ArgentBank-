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
          <h2 className='userFormTitle'>Edit user info</h2>
          <div>
            <label htmlFor='username' className='userFormLabel'>
              User Name:
            </label>
            <input
              type='text'
              id='username'
              name='userName'
              value={userData.userName}
              className='userFormInput'
            />
          </div>
          <div>
            <label htmlFor='firstname' className='userFormLabel'>
              Firts name:
            </label>
            <input
              type='text'
              id='firstname'
              name='firstName'
              value={userData.firstName}
              className='userFormInput'
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
              value={userData.lastName}
              className='userFormInput'
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
