import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";

import PostInfo from "./PostInfo";
import NotFound from "./NotFound";

class PostDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  render() {
    const { post } = this.props.post;

    return (
      <div className="PostDetail">
        <PostInfo post={post} />
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(fetchPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
