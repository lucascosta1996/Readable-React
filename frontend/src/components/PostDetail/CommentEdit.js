import React, { Component } from 'react'

class CommentEdit extends Component {

  onEdit = () => {
    if(this.props.editId) {
      this.props.onEdit(null, this.props.editId)
    } else {
      this.props.onEdit(this.props.id, null)
    }
  }

  render() {
    let buttonValue
    if (this.props.editId === this.props.id) {
      buttonValue = this.props.editId ? 'Save' : 'Edit'
    } else {
      buttonValue = 'Edit'
    }

    return(

        <i className="fa fa-pencil light-blue-text mr-3" aria-hidden="true" onClick={this.onEdit} value={buttonValue}></i>

    )
  }
}

export default CommentEdit
