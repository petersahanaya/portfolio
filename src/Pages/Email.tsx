import { motion, useAnimationControls } from "framer-motion"
import { FormEvent, useEffect } from "react"
import UseInView from "../functions/UseInView"
const Email = () => {
    const {ElementRef, inView} = UseInView('HTMLMainElement', {
        root : null,
        threshold : .65
    })

    const animation = useAnimationControls();

    const parentVariant = {
        hidden : {
            y : '-30vh',
            opacity : 0,
            transition : {type : 'tween', duration : .6, ease : "easeOut"}
        },
        visible : {
                y : '0',
                opacity : 1,
                transition : {type : 'tween', duration : .6, ease : "easeOut"}
        }
    }

    useEffect(() => {
        if(inView){
            animation.start('visible')
        }
        if(!inView){
            animation.start('hidden')
        }
    }, [inView]);

    const handleForm = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  return (
    <div className="email-container">
    <motion.main id='email' animate={animation} variants={parentVariant} ref={ElementRef} className='email'>
        <header className='header-email'>
            <h3>Chat with me 👋</h3>
        </header>
        <form onSubmit={handleForm}>
            <input placeholder="eg jhon@example.com" type='text'/>
            <textarea placeholder="message's"/>
            <motion.button whileTap={{scale : .8}}>Send</motion.button>
        </form>
    </motion.main>
    </div>
  )
}

export default Email