import PropTypes from 'prop-types'

const Account = ({ accountItem }) => {
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{accountItem.title}</h3>
        <p className='account-amount'>{accountItem.amount}</p>
        <p className='account-amount-description'>{accountItem.description}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <button className='transaction-button'>{accountItem.button}</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  accountItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
}

export default Account
