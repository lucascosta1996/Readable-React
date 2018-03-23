import React, { Component } from 'react';

class CommentDelete extends Component {

  onDelete = () => {
    const id = this.props.id
    this.props.onDelete(id)
  }

  render() {
    return(
        <i onClick={this.onDelete} className="fa fa-close red-text" aria-hidden="true"></i>
    )
  }
}

export default CommentDelete
