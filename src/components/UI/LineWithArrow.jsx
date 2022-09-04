import { motion } from 'framer-motion'
import React from 'react'

const LineWithArrow = ({
  triangleAnimation,
  drawAnimation,
  id,
  linePath,
  custom,
  width,
}) => {
  return (
    <motion.svg
      width={width < 767 ? 300 : 576}
      height='200'
      viewBox={`0 0 ${width < 767 ? 300 : 576} 210`}
      style={{ display: 'block', margin: '0 auto' }}>
      <defs>
        <marker
          id={`triangle${id}`}
          viewBox='0 0 10 10'
          refX='0'
          refY='5'
          markerUnits='strokeWidth'
          markerWidth='5'
          markerHeight='5'
          orient='auto'>
          <motion.path
            d='M 0 0 L 10 5 L 0 10 z'
            fill='rgba(0,0,0,0.5)'
            stroke='rgba(0,0,0,0.2)'
            variants={triangleAnimation}
            custom={custom}
          />
        </marker>
      </defs>
      <motion.path
        fill='none'
        stroke='rgba(0,0,0,0.5)'
        strokeWidth='5'
        d={linePath}
        variants={drawAnimation}
        custom={custom}
        markerEnd={`url(#triangle${id})`}
      />
    </motion.svg>
  )
}

export default LineWithArrow
