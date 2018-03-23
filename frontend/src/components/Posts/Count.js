import React, { Component } from 'react'

export class Count extends Component {
  render() {
    const { count } = this.props
    return(
      <p>
      <i class="fa fa-comment-o" aria-hidden="true"></i> {count}
    </p>
    )
  }
}
