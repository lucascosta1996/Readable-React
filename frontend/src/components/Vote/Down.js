import React from 'react';

const Down = (props) => {
  return(
    <div
      className="ml-3"
      onClick={() => props.onClickDownVote(props.id)}>
      <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
    </div>
  )
}

export default Down
