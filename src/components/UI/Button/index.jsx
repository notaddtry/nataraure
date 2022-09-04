import React from 'react'

import moduleStyle from './button.module.scss'

const Button = ({
  children,
  onSubmit,
  styles,
  className,
  icon,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{ ...styles }}
      className={`${moduleStyle.button} ${className} waves-effect waves-light btn pink accent-2`}
      onClick={onSubmit}>
      {icon ? <i className='material-icons'>{icon}</i> : null}
      {children ? children : null}
    </button>
  )
}

export default Button
