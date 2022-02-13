import React, { useState, useEffect, useRef } from "react"
import { Helmet } from "react-helmet"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        maxDistance={100}
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

const Text = () => {
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
    <>
      <div>
        <span id="intro" style={{whiteSpace:"pre-wrap", padding: "1px 0 1px 0"}} className="highlight">Lawrence Wang studies Computer Science, Political Science, and Economics at Yale and is intersted in the intersction of design and computing. He aspires to be somone who draws, codes, and writes. </span>
      </div>

      <footer>
        <div className="links">
          <a href="https://www.instagram.com/rencewang/" target="_blank" rel="noopener noreferrer">instagram&#x2197;&#xFE0E;</a>
          <a href="https://www.linkedin.com/in/lawrence-c-w/" target="_blank" rel="noopener noreferrer">linkedin&#x2197;&#xFE0E;</a>
          <a href="https://thoughts.rence.la/" target="_blank" rel="noopener noreferrer">thoughts&#x2197;&#xFE0E;</a>
          <a href="https://inmydefense.glitch.me/" target="_blank" rel="noopener noreferrer">inmydefense&#x2197;&#xFE0E;</a>
        </div>
        <div id="bottom">
          <Clock />
          <div id="greeting">&ldquo;{greetingText}&rdquo;</div>
        </div>
      </footer>
    </>
  )
}

// Main render function
const Three = () => {
  const isBrowser = typeof window !== "undefined"
  let fov
  if (isBrowser) {
    fov = window.innerWidth > 500 ? 50 : 75
  }

  return (
    <Layout>
      <Helmet>
        <body style={{overflow: "hidden"}} />
      </Helmet>
      <SEO title="Home" />
      
      <section id="text">
        <Text />
      </section>
      
      {isBrowser && (
        <section id="canvas">
          <Canvas
            camera={{ position: [0, 0, 50], fov: fov, near: 0.1, far: 1000 }}
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
    </Layout>
  )
}

export default Three;

// Extras: ===================================================================

// const Controls = () => {
//     const { camera, gl } = useThree()
//     const controls = new OrbitControls(camera, gl.domElement);

//     useFrame(() => {
//       controls.update() // append it to the render hook from react-fiber
//     })

//     controls.autoRotate = true
//     controls.minDistance = 10
//     controls.maxDistance = 300
//     controls.rotateSpeed = 0.1

//     useEffect(() => {

//       return () => {
//         controls.dispose()
//       }
      
//     },[camera, gl])

//     return null
// }

// const Background = () => {
//   const { scene } = useThree()
//   const texture = new THREE.TextureLoader().load(bg)
//   // const loader = new THREE.CubeTextureLoader()
//   // const texture = loader.load([bg, bg, bg, bg, bg, bg])
//   scene.background = texture

//   return null
// }


/* <fog attach="fog" args={["black", 10, 25]} /> */
