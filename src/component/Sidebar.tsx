interface SidebarProps {
  toggle: boolean;
  setToggle: Function;
}
import { motion, AnimatePresence } from "framer-motion";
import {AiFillInstagram, AiFillGithub} from 'react-icons/Ai'

const Sidebar = ({ toggle, setToggle }: SidebarProps) => {
  const parentVariant = {
    hidden : {
      x : '100vw',
      opacity : .9,
      transition : {type : "tween", duration : .4, ease : "easeOut", when : "beforeChildren"}
    },
    visible : {
      x : 0,
      opacity : 1,
      transition : {type : "tween", duration : .4, ease : "easeOut", when : "beforeChildren"}
    }
  }

  return (
    <>
        <AnimatePresence>
    {toggle && <>
        <>
        <motion.main variants={parentVariant} animate={"visible"} initial={"hidden"} exit={{x : "100vw", opacity : .9,  transition : {duration : .4, ease : "easeIn"}}} className="sidebar">
        <header>
          <section className='circle-box'>
            <div className='circle'></div>
          </section>
          <div
            onClick={() => setToggle(false)}
            className="burger burger-toggle"
            >
            <span></span>
            <span></span>
          </div>
        </header>
        <section className="sidebar-content">
          <a onClick={() => setToggle(false)} href={'#home'}>
          <h3>HOME</h3>
          </a>
          <a onClick={() => setToggle(false)} href={"#about"}>
          <h3>ABOUT</h3>
          </a>
          <a onClick={() => setToggle(false)} href={"#email"}>
          <h3>CONTACT</h3>
          </a>

          <section className="side-icons">
          <span className="instagram">
            <a target={"_blank"} href="https://www.instagram.com/p3tr_shny/?next=%2F">
            <AiFillInstagram/>
            </a>
          </span>
          <span className="github">
            <a target={"_blank"} href="https://github.com/petersahanaya/e-commerce">
            <AiFillGithub/>
            </a>
          </span>
        </section>
        </section>

      </motion.main>
      </>
    </>}
      </AnimatePresence>
    </>
  )
}
  

export default Sidebar;
