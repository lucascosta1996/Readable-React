import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Title extends Component {

  render() {
    const { id, title, category } = this.props.post
    return(
      <h4>
        <Link className="h4-responsive description" to={`${category}/${id}`}>{title}</Link>
      </h4>
    )
  }
}

Title.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}
