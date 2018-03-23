import React, { Component } from 'react';

export class CommentForm extends Component {

  render() {
    return(
      <div className="form-group">
        <form
          onSubmit={this.props.onCommentSubmit}>
            <textarea
              className="form-control mt-3"
                placeholder="Comment on this post..."
                onChange={this.props.onInputChange}
                value={this.props.txtComment}
                name="comments"
                id=""
                cols="30"
                rows="5" />
            <input
              className="btn btn-default btn-sm"
              value="Add Comment"
              type="submit"/>
        </form>
      </div>
    )
  }
}
