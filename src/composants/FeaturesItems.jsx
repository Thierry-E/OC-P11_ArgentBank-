import PropTypes from 'prop-types'

const FeaturesItems = ({ title, text, imageSrc }) => {
  return (
    <div className='F-items'>
      <h2 className='sr-only'>Features</h2>
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

FeaturesItems.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default FeaturesItems
