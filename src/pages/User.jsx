import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Account from '../composants/Account'
import Title from '../composants/Title'
//Import Redux
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/authSlice'

const User = () => {
  const accountItems = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
      button: 'View transactions',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
      button: 'View transactions',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
      button: 'View transactions',
    },
  ]

  //Récupération de la valeur du token et appel de la fonction dispatch pour envoyer des actions au store.
  const token = useSelector((state) => state.auth.token)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Récupération des données utilisateurs, appel à l'api lors du rendu initial et à chaque fois que le token ou le dispach change via le tableau de dépendance.
  useEffect(() => {
    const fetchUserProfile = () => {
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
          dispatch(setUser(data.body)) // demande à Redusx d'uriliser l'action "setUser" pour mettre à jour l'état global.
          console.log('body :', data.body)
        })
        .catch((error) => {
          console.error('Erreur:', error)
        })
    }

    fetchUserProfile()
  }, [token, dispatch]) // Tableau de dépendance.

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <main className='bgDark'>
      <Title />
      {accountItems.map((accountItem, index) => (
        <Account key={index} accountItem={accountItem} />
      ))}
    </main>
  )
}

export default User
