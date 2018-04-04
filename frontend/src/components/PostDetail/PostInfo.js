import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import Vote from "../Vote";
import uuidv1 from "uuid/v1";
import { CommentForm } from "./CommentForm";
import CommentList from "./CommentList";
import {
  upVotePostAction,
  downVotePostAction,
  removePostAction,
  addCommentAction
} from "../../actions";

class PostInfo extends Component {
  state = {
    deleted: false,
    txtComment: ""
  };

  onDelete = id => {
    this.props.removePost(id).then(() => {
      this.setState({
        deleted: true
      });
    });
  };

  onClickDownVote = id => {
    this.props.downVote(id);
  };

  onClickUpVote = id => {
    this.props.upVote(id);
  };

  onInputChange = e => {
    this.setState({
      txtComment: e.target.value
    });
  };

  onCommentSubmit = e => {
    e.preventDefault();
    if (this.state.txtComment) {
      const newComment = {
        id: uuidv1(),
        timestamp: Date.now(),
        body: this.state.txtComment,
        author: this.props.post.author,
        parentId: this.props.post.id
      };
      // POST new comment
      this.props.addComment(newComment).then(() => {
        this.setState({
          txtComment: ""
        });
      });
    }
  };

  render() {
    const {
      id,
      author,
      body,
      category,
      title,
      voteScore,
      timestamp
    } = this.props.post;
    const { comments } = this.props.post;

    if (this.state.deleted) {
      return <Redirect to="/" />;
    } else {
      return title == "" || title == null ? (
        <NotFound />
      ) : (
        <div className="Post-Info">
          <div className="Post-Info-Container">
            <div className="Post-Info-Title">
              <h3>{title}</h3>
            </div>
            <div className="Post-Info-Time-Author">
              <small>
                <b>Posted on</b> {timestamp} by <b>{author}</b>
              </small>
            </div>
            <hr
              class=" primary-color-dark wow fadeInLeft"
              data-wow-delay="0.3s"
            />
            <p className="grey-text">{body}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span class="badge badge-info">{category}</span>
              </div>
              <div>
                <Vote
                  id={id}
                  score={voteScore}
                  onClickUpVote={this.onClickUpVote}
                  onClickDownVote={this.onClickDownVote}
                />
              </div>
              <div className="d-flex align-items-center">
                <Link to={`/edit/${id}`}>
                  <i
                    className="fa fa-pencil light-blue-text mr-3"
                    aria-hidden="true"
                  />
                </Link>
                <i
                  onClick={() => this.onDelete(id)}
                  className="fa fa-close red-text"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <CommentForm
            txtComment={this.state.txtComment}
            onCommentSubmit={this.onCommentSubmit}
            onInputChange={this.onInputChange}
          />
          <CommentList comments={comments} />
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upVote: id => dispatch(upVotePostAction(id)),
    downVote: id => dispatch(downVotePostAction(id)),
    removePost: id => dispatch(removePostAction(id)),
    addComment: comment => dispatch(addCommentAction(comment))
  };
};

export default connect(null, mapDispatchToProps)(PostInfo);
