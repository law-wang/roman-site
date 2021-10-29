import React, { useState, useEffect } from 'react'; 

const Cursor = () => {
    const [position, setPosition] = useState({ x: -200, y: -200 })
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove)
            document.addEventListener('mouseenter', mEnter)
            document.addEventListener('mouseleave', mLeave)
        }
    
        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove)
            document.removeEventListener('mouseenter', mEnter)
            document.removeEventListener('mouseleave', mLeave)
        }
    
        const mMove = (el) => {
            setPosition({ x: el.clientX, y: el.clientY })
        }

        const mLeave = () => {
            setHidden(true)
        }
      
        const mEnter = () => {
            setHidden(false)
        }
      
        addEventListeners()
        return () => removeEventListeners()
      }, [])

    return (
        <div className={"cursor" + (hidden ? 'hidden ' : ' ')} style={{ left: `${position.x}px`, top: `${position.y}px`}}></div>
    )
}

export default Cursor