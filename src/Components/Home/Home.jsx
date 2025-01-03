import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './home.scss'

const Home = () => {
  return (
    <motion.div className='home'
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{duration:1.5}}
    exit={{x:-100, opacity: 0}}
    >
      <img src="/HERO.jpg" alt="hero img" />
      <div className="overlay"></div>
      <header>
        <h2><span className='veri'>Veri</span>Scan</h2>
      </header>

      <div className="texts">
        <p className='title'>
          Image <span className='deepfake'>Deepfake</span> <span className='detection'>Detection AI</span>
        </p>
        <p className='slogan'>
          A simple App to verify the authenticity of your photos with our deepfake detection tool.
        </p>

        <Link to='isdeepfake'>
          <button>
            Try this!
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
export default Home