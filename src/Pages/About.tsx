import {
  SiTypescript,
  SiReact,
  SiGit,
  SiMysql,
  SiGithub,
  SiNodedotjs,
} from "react-icons/Si";
import { motion, useAnimationControls } from "framer-motion";
import UseInView from "../functions/UseInView";
import { useEffect } from "react";

const questions = [
  {
    numbers: "01",
    question: "What's Your Name?",
    answer: "Peter Sahanaya",
  },
  {
    numbers: "02",
    question: "What's Your Expertise?",
    answer: ["Typescript", "React Js", "Nodejs"],
  },
  {
    numbers: "03",
    question: "How's Your Journey?",
    answer:
      "I started learning about web development since 2021, I seek to create minimalist's, and focus on performance & problems to solve user problems.",
  },
];
const About = () => {
  const { ElementRef, inView } = UseInView('HTMLMainElement', {
    root : null,
    threshold : .40
  })

  const parentVariant = {
    hidden : {
      opacity : 0,
      y : "40vh",
      transition : {type : "tween", duration : .5}
    },
    visible : {
      opacity : 1,
      y : "0",
      transition : {type : "tween", duration : .5, when : "beforeChildren"} 
    }
  }  

  const questionVariant = {
    hidden : {
      opacity : 0,
      x : "40vw",
      transition : {type : "tween", duration : .5}
    },
    visible : {
      opacity : 1,
      x : "0",
      transition : {type : "tween", duration : .5} 
    }
  }  
  const animationParent = useAnimationControls();

  useEffect(() => {
    if(inView){
      animationParent.start("visible")
    }

    if(!inView) {
      animationParent.start("hidden");
    }
  },[inView])
  return (
    <motion.main id={'about'} variants={parentVariant} ref={ElementRef} animate={animationParent} className="about">
      <section className="about-content">
        <nav className="introduce-content">
          <div className="hey-content">
            <p>Hey there.</p>
            <span className="self-content">
              <h3>Let me introduce</h3>
              <h5>My self</h5>
            </span>
            <span className="from-content">
              i' Am a front end developer for over 1 years of experience. I'm
              from Ambon, Indonesia
            </span>
          </div>
          <footer className="icons-about">
            {" "}
            <span className="icon-1">
              {" "}
              <SiTypescript />{" "}
            </span>{" "}
            <span className="icon-2">
              {" "}
              <SiReact />{" "}
            </span>{" "}
            <span className="icon-3">
              {" "}
              <SiGit />{" "}
            </span>{" "}
            <span className="icon-4">
              {" "}
              <SiGithub />{" "}
            </span>{" "}
            <span className="icon-5">
              {" "}
              <SiNodedotjs />{" "}
            </span>{" "}
            <span className="icon-6">
              {" "}
              <SiMysql />{" "}
            </span>{" "}
          </footer>
        </nav>
        <motion.nav ref={ElementRef} animate={animationParent} variants={questionVariant} className="questions">
          {questions.map((s, i) => (
            <>
              <span key={i * 8} className={`question-${i + 1}`}>
                <div className="number-question">
                  <span className="span">
                    <p>{s.numbers}</p>
                    <h4>{s.question}</h4>
                  </span>
                  {Array.isArray(s.answer) ? (
                    <h3>{`${s.answer[0]}, ${s.answer[1]}, ${s.answer[2]}`}</h3>
                  ) : (
                    <h3>{s.answer}</h3>
                  )}
                </div>
              </span>
            </>
          ))}
        </motion.nav>
      </section>
    </motion.main>
  );
};

export default About;
