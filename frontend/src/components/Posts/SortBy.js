import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSortAction } from '../../actions';


class SortBy extends Component {

  onChangeSort = (e) => {
    this.props.changeSort(e.target.value)
  }

  render() {
    return(
      <div className="mb-4">
        <select
          onChange={this.onChangeSort}
          name="sort"
          id="sort">
          <option value="popular">Most voted</option>
          <option value="unpopular">Less voted</option>
          <option value="date">Date</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = ({ sort }) => {
  return {
    sort: sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSort: (value) => dispatch(changeSortAction(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)
