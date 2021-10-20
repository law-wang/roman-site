import React, { useRef } from "react"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/three.scss"

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
      <meshStandardMaterial color="#eab203" />
    </mesh>
  )
}

const Text = () => {
  return (
    <section>
      <div id="intro">
        Lawrence Wang studies Computer Science & Economics and Political Science at Yale and is intersted in the intersection of design and computing. He aspires to be someone who draws, codes, and writes.
      </div>
  
      <div>
        
      </div>

      <footer>
        time:time
        quote:quote
      </footer>
    </section>
  )
}

// Main render function
const Three = () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <Layout>
      <SEO title="Home" />
      {isBrowser && (
          <main id="canvas">
              <Canvas
                camera={{ position: [0, 0, 50], fov: 75, near: 0.1, far: 1000 }}
                onCreated={({ gl }) => {
                    // gl.shadowMap.enabled = true
                    // gl.shadowMap.type = THREE.PCFSoftShadowMap
                }}
              >

                <ambientLight intensity={0.8} />
                <spotLight position={[5, 20, 20]} intensity={1} penumbra={1} castShadow />
                {/* <fog attach="fog" args={["black", 10, 25]} /> */}
                <Controls />

                <mesh rotation={[20, 10, 50]}>
                    <sphereGeometry args={[15, 100, 100]}  />
                    <meshStandardMaterial color="#E91C23" wireframe={true} />
                </mesh>

                {Array(300).fill().map((key) => (
                  <Star key={key}/>
                ))}

              </Canvas>
          </main>
      )}
      <main id="text">
        <Text />
      </main>
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