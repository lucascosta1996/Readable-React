import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchPost, fetchCategories, editPostAction } from '../actions'


class EditPost extends Component {

  state = {
    id: '',
    title: '',
    author: '',
    body: '',
    category: '',
    notValid: false,
    success: false,
    edited: false
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
      .then(() => {
        const { title, author, body, category, voteScore } = this.props.post.post
        this.setState({
          id,
          title,
          author,
          body,
          category
        })
      })
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  onEditClick = () => {
    const { id, title, category, body, author } = this.state
    this.props.editPost(id, {
      title,
      category,
      body,
      author
    })
    .then(() => {
        this.setState({
          success: true
        })
    })
  }

  render() {
    const { categories } = this.props.categories
    const { id, category } = this.state
    const categoryList = categories.map(category => {
      return (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      )
    })

    return(
      <div className="New-Post">
        <div>
          {this.state.success && (
            <Redirect
              from={`/edit/${category}/${id}`}
              to={`/${category}/${id}`}  />
          )}
        </div>
        <div>
          {this.state.notValid && (
            <h3>Please enter all values...</h3>
          )}
        </div>
          <div>
            <label>Title</label>
            <input
              className="form-control mb-3"
              type="text"
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title} />
        </div>

          <div>
            <label for="comments">Description</label>
            <textarea
              value={this.state.body}
              onChange={(e) => this.onBodyChange(e)}
              name="comments"
              id=""
              cols="30"
              rows="8"
              className="form-control mb-3"/>
        </div>

        <div>
            <label>Author</label>
            <input
            className="form-control mb-3"
              type="text"
              onChange={(e) => this.onAuthorChange(e)}
              value={this.state.author} />
        </div>

        <div className="mb-4">
            <select
              onChange={this.onCategoryChange}
              value={this.state.category}
              className>
              <option default disabled selected>Categories</option>
              {categoryList}
            </select>
        </div>

        <div>
          <input
            className="btn btn-indigo"
            type="button"
            onClick={this.onEditClick}
            value="Edit" />
        </div>
    </div>
    )
  }
}

const mapStateToProps = ({ post, categories }) => {
  return {
    post,
    categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, post) => dispatch(editPostAction(id, post)),
    getPost: (id) => dispatch(fetchPost(id)),
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
