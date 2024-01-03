import './Home.css'

const Home = () => {
  return (
    <div id='intro'>
      <div className='intro-overlay' />
      <div className='intro-content'>
        <h5>Hello, World</h5>
        <h1>I'm Jorge Nahuel</h1>
        <p className='intro-position'>
          <span>Software Developer</span>
        </p>
        <a className='button' href='#resume' title=''>
          My Proyects
        </a>
      </div>
    </div>
  )
}

export default Home
