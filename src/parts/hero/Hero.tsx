import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import automaticTyping from "../../utlities/typewriter";

type Props = {};

function Hero({}: Props) {
  return (
    <main className='hero-container'>
      <motion.section
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 2.3,
          duration: 0.3,
          type: "spring",
          stiffness: 50,
        }}
        className='hero-title-container'
      >
        <h1 className='hero-title'>
          {" "}
          Setting <br />
          <span className='t-color'>t</span>
          <span className='h-color'>h</span>
          <span className='e-color'>e</span> standard
        </h1>
        <div className='hero-auto-subtitle'>
          <span className='IN_asBlock'>IN</span>
          {automaticTyping()}
        </div>
      </motion.section>
      <section className='hero-bar-container mobile-hidden'>
        <motion.div
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
            rotate: -90,
          }}
          transition={{
            delay: 0.4,
            x: {
              duration: 0.5,
              type: "spring",
              stiffness: 40,
            },
            rotate: {
              delay: 2,
              type: "spring",
              stiffness: 100,
            },
          }}
          className='hero-btn'
        >
          <motion.p
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 2.3,
            }}
            style={{ color: "white" }}
          >
            Request a Meeting
          </motion.p>
        </motion.div>
        <motion.div
          animate={{ y: -20 }}
          transition={{ delay: 2.1, type: "spring", bounce: 0.7 }}
          className='bar-one'
        >
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 50,
            }}
            className='round'
          />
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              type: "spring",
              stiffness: 50,
            }}
            className='circle'
          />
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: 0.1,

              duration: 0.3,
              type: "spring",
              stiffness: 50,
            }}
            className='round'
          />
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
            y: "-20px",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            y: { delay: 2.1 },
          }}
          className='bar-two'
        >
          <div className='circle medium'></div>
          <div className='circle small'></div>
        </motion.div>
      </section>
      <motion.div
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 2.6,
          duration: 0.3,
          type: "spring",
          stiffness: 50,
        }}
        className='btn-mobile'
      >
        <p> Request a Meeting</p>
      </motion.div>
    </main>
  );
}

export default Hero;
