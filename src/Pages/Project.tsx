import {IoIosArrowBack} from 'react-icons/Io'
import { SiGithub } from 'react-icons/Si'
import pcImg from './pc-home.webp'
import login from './login.webp'
import home from './home.webp'
import profile from './profile.webp'
import cart from './cart.webp'
import { Link } from 'react-router-dom'
import {  useState } from 'react'
import ImageViewer from 'react-simple-image-viewer';
import {motion} from 'framer-motion'

const Project = () => {
  const [preview,setPreview] = useState(false);
  const images = [login, home, profile, cart];


  return (
    <main className="project">
        <motion.header animate={{y : "0", opacity : '1'}} transition={{type : "tween", duration : .6}} initial={{y : "-40vh", opacity : '0'}}>
            <section className="back-icon">
                <Link to="/">
                <IoIosArrowBack/>
                </Link>
            </section>
            <section className="title-project">
                Project's
            </section>
        </motion.header>

        <motion.main className="container-project" animate={{opacity : 1, x : 0}} initial={{x : '-20vw', opacity : '0'}} transition={{type : "tween", duration : .5, delay : .4}}>
          <section onClick={() => setPreview(prev => !prev)} className="project-image">
            <img src={pcImg} alt="project-image" />
          </section>
        </motion.main>

        {preview && <>
          <div className="git-container">
            <a href="https://github.com/petersahanaya/e-commerce" target={'_blank'}>
              <SiGithub className='git'/>
            </a>
          </div>

          {<ImageViewer disableScroll={true} onClose={() => setPreview(false)} closeOnClickOutside={true}  src={images} backgroundStyle={{backgroundColor : '#00000092'}}/>}
        </>}
    </main>
  )
}

export default Project