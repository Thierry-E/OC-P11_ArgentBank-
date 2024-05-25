import { useDispatch, useEffect } from 'react'
import Account from '../composants/Account'
import Title from '../composants/Title'
//import Redux
import { useSelector } from 'react-redux'
import { setUser } from '../redux/authSlice'

const User = () => {
  const accountItem1 = {
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
    button: 'View transactions',
  }

  const accountItem2 = {
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
    button: 'View transactions',
  }

  const accountItem3 = {
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
    button: 'View transactions',
  }

  const token = useSelector((state) => state.auth.token)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête')
        }
        return response.json()
      })

      .then((data) => {
        dispatch(setUser(data.body))
        console.log('body :', data.body)
      })
  }, [token])

  return (
    <main className='bgDark'>
      <Title />
      {/* Passe l'objet accountItem en tant que prop */}
      <Account accountItem={accountItem1} />
      <Account accountItem={accountItem2} />
      <Account accountItem={accountItem3} />
    </main>
  )
}

export default User
