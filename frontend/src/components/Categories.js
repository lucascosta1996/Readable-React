import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <div key={index} className="d-flex justify-content-center">
          <Link to={`/${item.name}`}>
          <button type="button" className="btn btn-outline-info waves-effect">{item.name}</button>
        </Link>
      </div>
      )
    })
    return(
      <div className="d-flex justify-content-center">
          <All />
          {list}
      </div>
    )
  }
}
const All = () => {
  return(
    <Link to='/'>
    <button type="button" className="btn btn-outline-primary waves-effect" key="All">All categories</button>
  </Link>
  )
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
