const Hero = () => {
  return (
    <section className='hero'>
      <img
        src='../../src/assets/img/bank-tree.webp'
        srcSet="
        '../../src/assets/img/bank-tree-1100.webp 1100w'
        '../../src/assets/img/bank-tree-700.webp 700w'
        '../../src/assets/img/bank-tree-500.webp 500w'
        "
        alt="Photo d'une plante en pot"
        className='heroBanner'
      />
      <div className='heroTxt'>
        <h2 className='sr-only'>Promoted Content</h2>
        <p className='subtitle'>No fees.</p>
        <p className='subtitle'>No minimum deposit.</p>
        <p className='subtitle'>High interest rates.</p>
        <p className='text'>Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  )
}

export default Hero
