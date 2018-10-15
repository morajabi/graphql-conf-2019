import React from 'react'

export const X = props => (
  <svg width="79" height="70" viewBox="0 0 79 70" fill="none" {...props}>
    <g opacity={props.opacity || 0.2}>
      <path d="M77 1.5L1.5 68.5" stroke="white" strokeLinecap="square" />
      <path d="M2 1.5L77.5 68.5" stroke="white" strokeLinecap="square" />
    </g>
  </svg>
)

export default X
