// import background from "../../assets/intro-bg.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div id='intro'>
        
      <div className='intro-overlay'></div>
      <div className='intro-content'>
        <div className='row'>
          <div className='col-twelve'>
            <h5>Hello, World</h5>
            <h1>I'm Jorge Nahuel</h1>
            <p className='intro-position'>
              <span>Software Developer</span>
            </p>
            <a className='button' href='#about' title=''>
              More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
