import React from 'react'

export function Content(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <p>{props.description}</p>
    </div>
  )
}
