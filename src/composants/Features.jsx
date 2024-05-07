import FeaturesList from '../datas/FeaturesList.json'
import FeaturesItems from './FeaturesItems'

const Features = () => {
  return (
    <section className='features'>
      {FeaturesList.map((feature) => (
        <FeaturesItems
          key={feature.id}
          title={feature.title}
          text={feature.text}
          imageSrc={feature.imageSrc}
        />
      ))}
    </section>
  )
}

export default Features
