import React from 'react'
import {motion} from 'framer-motion'
import {FcGoogle} from 'react-icons/fc'

function Login() {
  return (
    <section className="login">
        <motion.button
        initial={{
            y:'-100vh'
        }}
        animate={{
            y:0
        }}
        >
        <FcGoogle />    
        </motion.button>
    </section>
  )
}

export default Login