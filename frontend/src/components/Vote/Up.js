import React from 'react';

const Up = (props) => {
  return(
    <div
      className="Up"
      onClick={() => props.onClickUpVote(props.id)}>
      <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
    </div>
  )
}

export default Up
