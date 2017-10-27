import React, { Component } from 'react';

// CommentComponent

class CommentComponent extends Component {
  deleteComment =()=> {
    const idValue = this.props.comment.id;
    this.props.deleteComment(idValue);
  }

  render() {
    const commentNumber = this.props.commentNumber;
    return (
      <li id={'comment'+commentNumber}>
        <button id={'delButton'+commentNumber} className='close js-delete-comm-btn'
          onClick={this.deleteComment}>X</button>
        <div className='commenterImage'>
          <img src={this.props.comment.src} alt='SuperMario.jpg'/>
        </div>
        <div className='commentText'>
          <p className=''>{this.props.comment.text}</p>
          <span className='date sub-text'>{this.props.comment.email}</span>
        </div>
      </li>
    );
  }
}

export default CommentComponent;
