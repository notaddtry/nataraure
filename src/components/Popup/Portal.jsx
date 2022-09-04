import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const [container] = useState(() => document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.removeChild(container)
      document.body.style.overflow = 'visible'
    }
    // eslint-disable-next-line
  }, [])

  return ReactDOM.createPortal(children, container)
}

export default Portal
