import React, { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber"

import "../styles/general.scss"

extend({ OrbitControls })

const Controls = () => {
    const orbitRef = useRef() // assign it to a variable
    const { camera, gl } = useThree()
  
    useFrame(() => {
      orbitRef.current.update() // append it to the render hook from react-fiber
    })
    
    return (
      <orbitControls
        autoRotate
        // maxPolarAngle={Math.PI / 3}
        // minPolarAngle={Math.PI / 3}
        minDistance={10}
        maxDistance={150}
        rotateSpeed={0.3}
        autoRotateSpeed={1.5}
        enablePan={false}
        args={[camera, gl.domElement]}
        ref={orbitRef} // returning ref to control
      />
    )
}

const Star = () => {
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300))
  const size = Math.random() + 1

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={[size, 25, 25]} />
      <meshStandardMaterial color="#EAA206" />
    </mesh>
  )
}

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID)
    }
  })

  function tick() {
    setTime(new Date());
  }

  return (
    <div id="clock">{time.toLocaleTimeString()}</div>
  )
}

// Main render function
const Layout = ({ children }) => {

    // checking broswer size for three.js zoom
    const isBrowser = typeof window !== "undefined"
    let fov
    if (isBrowser) {
      fov = window.innerWidth > 500 ? 40 : 75
    }

    const greetingArray = [
        "The waves come after midnight.",
        "Fall asleep to revolution, then wake up next to a sad excuse.",
        "Isn't it pretty to think so?",
        "The lies I weave are all so intricate.",
        "We could follow the sparks, I'll drive.",
        "Don't you know there's a part of me that longs to go.",
        "Why settle for less when there's more?",
        "To be honest, what I liked, were the things I didn’t know.",
        "Pray for everything we lost, buy back the secrets.",
        "Would you believe me now, if I say I got caught up in a wave, almost gave it away.",
        "But I'm still not sure if fear's a rival or close relative to truth.",
        "There's no going back against this California feeling.",
        "I guess you win some and lose some, 'long as the outcome's income. I want it all, and then some.",
        "The mess we made on Fridays gave me Sundays on my knees.",
        "Either way, we're not alone. I'll find a new place to be from.",
        "On a hard dry surface, you have to engrave the truth.",
        "Look at the world, so close, and I'm halfway to it.",
        "But now, more will go with age.",
        "You are what you love, not who loves you.",
        "In my darkest hours I stumbled on a secret power.",
        "Some days I run for cover some I only run my mouth, don't know what that's about.",
        "Try to shine. Stay wild.",
        "When it rains it pours, so stay thirsty like before.",
        "In the meantime we let it go, at the roadside we used to know.", 
        "I hope this summer breeze would last more than a season.",
        "It’s a train wreck, but I won’t crash it.",
        "Turn around and you’ll see what I see.",
        "If it's all in my head tell me now.",
        "It is no bad thing to celebrate a simple life."
    ]
    let randomIndex = Math.floor(Math.random() * greetingArray.length)
    let greetingText = greetingArray[randomIndex]

    return (
        <main>
            <Helmet>
                <body style={{overflow: "hidden"}} />
            </Helmet>
    
            <header>
                <div className="navigation">
                    <nav>
                        <a href="/">info</a>
                    </nav>
                    <nav>
                        <a href="/blog">writing</a>
                    </nav>
                    <nav>
                        <a href="/art/traditional">art</a>
                    </nav>
                </div>
            </header>
            
            <section id="content">
                {children}
            </section>

            <footer>
                <div id="bottom">
                <Clock />
                <div id="greeting">&ldquo;{greetingText}&rdquo;</div>
                </div>
            </footer>
        
            {isBrowser && (
                <section id="canvas">
                    <Canvas
                    camera={{ position: [0, 0, 90], fov: fov, near: 0.1, far: 1000 }}
                    onCreated={({ gl }) => {
                        gl.shadowMap.enabled = true
                        gl.shadowMap.type = THREE.PCFSoftShadowMap
                    }}
                    >
        
                    <ambientLight intensity={0.8} />
                    <spotLight position={[0, 200, 0]} intensity={1} penumbra={1} castShadow />
                    <Controls />
        
                    <mesh rotation={[20, 10, 50]}>
                        <sphereGeometry args={[15, 100, 100]}  />
                        <meshStandardMaterial color="#E91C23" wireframe={true} />
                    </mesh>
        
                    {Array(300).fill().map((key) => (
                        <Star key={key}/>
                    ))}
        
                    </Canvas>
                </section>
            )}
        </main>
    )
}
  
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default Layout
