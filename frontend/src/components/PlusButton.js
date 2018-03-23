import React from 'react'
import { Link } from 'react-router-dom'
import './plus.css'

const PlusButton = () => {
  return(
    <div className="addpost">
      <div>
        <p>
          <Link to="/new">
            <i class="fa fa-plus-circle blue-text fa-3x" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default PlusButton
