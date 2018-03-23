import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deletePostAction,
  upVoteAction,
  downVoteAction
} from '../../actions';
import Vote from '../Vote/';
import { Title } from './Title';
import { Author } from './Author';
import { Count } from './Count';
import { Edit } from './Edit';
import { Delete } from './Delete';


class Post extends Component {
  state = { score: 0 }

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({
      score: this.state.score + 1
    })
  }

  onClickDownVote = (id) => {
   this.props.downVote(id)
   this.setState({
     score: this.state.score - 1
   })
 }

 componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({
      score: voteScore
    })
  }

  render() {
    const { body, title, author, id } = this.props.post
    const { score } = this.state
    const posts = this.props.posts
    const index= posts.findIndex(post => post.id === id)
    const count = posts[index].comments
                  ? posts[index].comments.length
                  : '&'

    return(
      <div className="mb-5">
          
            <Title
              post={this.props.post} />
            <div className="d-flex justify-content-between">
              <Author author={author} />
              <Count count={count} />
              <Vote
                id={id}
                score={score}
                onClickDownVote={this.onClickDownVote}
                onClickUpVote={this.onClickUpVote} />
            </div>
            <Edit id={id} />
            <Delete id={id} onDeleteClick={this.onDeleteClick}/>

          <hr class=" primary-color-dark wow fadeInLeft" data-wow-delay="0.3s"></hr>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
