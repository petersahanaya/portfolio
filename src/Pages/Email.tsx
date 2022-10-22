import { motion, useAnimationControls } from "framer-motion"
import { FormEvent, useEffect, useRef, useState } from "react"
import UseInView from "../functions/UseInView"
import emailjs from '@emailjs/browser';

const Email = () => {
    const [result, setResult] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement>(null);

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

        emailjs.sendForm('service_1r0xt8t', 'template_6k3lrhf', formRef?.current!, 'tWDas_H0Jb4j3tzPT')
        .then((result) => {
                setResult(true);
                setTimeout(() => {
                    setResult(false)
                }, 1500)
        }, (error) => {
        });
       
    }

  return (
    <div className="email-container">
    <motion.main id='email' animate={animation} variants={parentVariant} ref={ElementRef} className='email'>
        <header className='header-email'>
            <h3>Chat with me 👋</h3>
        </header>
        <form ref={formRef} onSubmit={handleForm}>
            <input name="from_name" placeholder="eg john doe" type='text' required/>
            <input name="email" placeholder="eg jhon@example.com" type='email' required/>
            <textarea name="message" placeholder="message's" required/>
            {!result ? <motion.button whileTap={{scale : .8}}>Send</motion.button> : <button disabled={result} style={{opacity : '.8'}}>Loading....</button>}
        </form>
        {result && <p style={{color : '#353535', textAlign : 'center', fontSize : '.9rem',marginTop : '1rem'}}>Email Has Been Send..</p>}
    </motion.main>
    </div>
  )
}

export default Email