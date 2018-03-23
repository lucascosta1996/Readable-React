import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect  } from 'react-router-dom'

import Vote from '../Vote'

import {
  upVotePostAction,
  downVotePostAction,
  removePostAction
 } from '../../actions'

class PostInfo extends Component {

  state = {
    deleted: false
  }

  onDelete = (id) => {
    this.props.removePost(id)
      .then(() => {
        this.setState({
          deleted: true
        })
      })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render() {
    const { id, author, body, category, title, voteScore, timestamp } = this.props.post

    if (this.state.deleted) {
      return (<Redirect to='/' />)
    } else {
      return(
        <div className="Post-Info">

          <div className="Post-Info-Container">
            <div className="Post-Info-Title">
              <h3>{title}</h3>
            </div>
            <div className="Post-Info-Time-Author">
              <small><b>Posted on</b> {timestamp} by <b>{author}</b></small>
            </div>
            <hr class=" primary-color-dark wow fadeInLeft" data-wow-delay="0.3s"></hr>
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
                  onClickDownVote={this.onClickDownVote} />
              </div>
              <div className="d-flex align-items-center">
                    <Link to={`/edit/${id}`}><i className="fa fa-pencil light-blue-text mr-3" aria-hidden="true"></i></Link>
                    <i onClick={() => this.onDelete(id)} className="fa fa-close red-text" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVotePostAction(id)),
    downVote: (id) => dispatch(downVotePostAction(id)),
    removePost: (id) => dispatch(removePostAction(id))

  }
}

export default connect(null, mapDispatchToProps)(PostInfo)
