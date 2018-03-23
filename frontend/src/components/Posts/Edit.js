import React from 'react';
import { Link } from 'react-router-dom';

export const Edit = (props) => {
  return(

      <Link className="white-text" to={`/edit/${props.id}`}>
      <button type="button" class="btn btn-info">Edit</button>
    </Link>

  )
}
