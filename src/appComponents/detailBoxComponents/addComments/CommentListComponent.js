import React, { Component } from 'react';
import CommentComponent from './CommentComponent';

// CommentList Wrapper, for all CommentComponent's

class CommentListComponent extends Component {
  render() {
    const comments = this.props.comments.map((currentComment,i)=> {
      return (<CommentComponent commentNumber={i+1} comment={currentComment} 
        deleteComment={this.props.deleteComment} key={i+1} />);  
    });
    return (
      <ul className='commentList'>
        {comments}
      </ul> 
    );
  }
}

export default CommentListComponent;