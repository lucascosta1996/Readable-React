import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, addNewPostAction } from '../../actions'
import uuidv1 from 'uuid/v1'

class NewPost extends Component {
  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    notValid: false,
    success: false
  }

  componentDidMount() {
    this.props.getCategories();
  }

  onPostClick() {
    const { title, category, author, body } = this.state

    if (title && category && author && body) {
      const newPost = {
        id: uuidv1(),
        timestamp: Date.now(),
        title,
        category,
        author,
        body
      }
      this.props.addPost(newPost)
        .then(() => this.setState({
          success: true,
          title: '',
          category: '',
          author: '',
          body: '',
          notValid: false
        }))
    } else {
      this.setState({
        notValid: true,
        success: false
      })
    }
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  onAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })

  }

  render() {
    const { categories } = this.props
    const optionList = categories.map(category => (
        <option
          key={category.name}
          value={category.name}>{category.name}</option>
      ))

    return(
      <div className="New-Post">
        <div>
          {this.state.success && (
            <h3>New Post added...</h3>
          )}
        </div>
        <div>
          {this.state.notValid && (
            <h3>Please enter all values...</h3>
          )}
        </div>
          <div>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Title"
              onChange={(e) => this.onTitleChange(e)}
              value={this.state.title} />
        </div>

          <div>
            <textarea
              className="form-control mb-3"
              placeholder="Your post description..."
              onChange={(e) => this.onBodyChange(e)}
              value={this.state.body}
              name="comments"
              id=""
              cols="30"
              rows="8" />
        </div>

          <div>
            <input
              className="form-control mb-3"
              placeholder="Author"
              onChange={(e) => this.onAuthorChange(e)}
              type="text"
              value={this.state.author} />
        </div>

        <div>
            <select
              className="mb-3"
              value={this.state.category}
              onChange={this.onCategoryChange}>
              <option default selected>Categories</option>
              {optionList}
            </select>
        </div>

        <div>
          <input
            className="btn btn-indigo"
            type="button"
            value="Post"
            onClick={this.onPostClick.bind(this)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(addNewPostAction(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
