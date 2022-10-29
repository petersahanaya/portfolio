import { useState, useEffect, lazy } from "react";
const Header = lazy(() => import( "../component/header"))
const Sidebar = lazy(() => import("../component/Sidebar"))
const Email = lazy(() => import("./Email"))
const About = lazy(() => import("./About"))
import { HiReply } from "react-icons/Hi";
import scribel from "./scribble.png";
import { Link } from "react-router-dom";
import UseInView from "../functions/UseInView";
import { useAnimationControls, motion } from "framer-motion";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const { ElementRef, inView } = UseInView("HTMLSectionElement", {
    root: null,
    threshold : .50
  });
  const animationParent = useAnimationControls();

  const parentVariant = {
    hidden : {
      opacity : 0,
      y : "-40vh",
      transition : {type : "tween",  duration : .5, when : "beforeChildren"}
    },
    visible : 
      {
        opacity : 1,
        y : 0,
        transition : {type : "tween", duration : .5}
      }
  }

  useEffect(() => {
      if(inView){
          animationParent.start("visible")
      }

      if(!inView){
        animationParent.start("hidden") 
      }
  }, [inView]);

  return (
    <>
      <Sidebar  toggle={toggle} setToggle={setToggle} />
      <main id='home' className="home">
        <Header  toggle={toggle} setToggle={setToggle} />
        <motion.section  animate={animationParent} variants={parentVariant} ref={ElementRef} className="main">
          <motion.div ref={ElementRef}className="self">
            <h3>Hi! I Am </h3>
            <h3>
              Peter <span className="parker">Parker</span>
            </h3>
            <span className="dev">
              <h4>Front End</h4>
            </span>
            <div ref={ElementRef} className="desc">
              <p>
                I have <span className="experience">experience</span> build an
                e-commerce, social media, & corporate websites.
              </p>
            </div>
            <div ref={ElementRef} className="hire">
              <a href="#email">
              <button className="btn-hire">Hire me</button>
              </a>
              <div className="btn-project">
                <Link to="/project">
                <button>Project's</button>
                </Link>
                <span className="icon-project">
                  <HiReply />
                </span>
              </div>
            </div>
            <div className="arrow-hire">
              <img src={scribel} alt="arrow" />
            </div>
          </motion.div>
        </motion.section>
      </main>
      <About />
      <Email/>
    </>
  );
};

export default Home;
