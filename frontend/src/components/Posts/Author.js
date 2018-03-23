import React from 'react'

export const Author = (props) => {
  return(
    <p>
      <i class="fa fa-user-circle" aria-hidden="true"></i> {props.author}
    </p>
  )
}
