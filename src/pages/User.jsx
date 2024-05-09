import Account from '../composants/Account'
import Title from '../composants/Title'

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
