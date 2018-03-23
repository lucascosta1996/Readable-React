import React from 'react';

export const Delete = (props) => {
  return(
    <button type="button" class="btn btn-danger"
      onClick={() => props.onDeleteClick(props.id)}
      >
      Delete
    </button>
  )
}
