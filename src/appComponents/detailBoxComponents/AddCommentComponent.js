import React, { Component } from 'react';
import CommentListComponent from './addComments/CommentListComponent';
import InputComponent from './addComments/InputComponent';
import ButtonComponent from './addComments/ButtonComponent';

// AddCommentCommponent Wrapper, for CommentList and form elements

class AddCommentComponent extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [
        {
          id: Date.now(),
          text: 'This is a really cool place to be!',
          email: 'john.doe@gmail.com',
          src: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWJmZmE1YWItYjBjYi00ODU4LTg2MDUtOTQyNWY2NjFlOGM5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR2,0,214,317_AL_.jpg',
        },{
          id: Date.now()+1,
          text: 'I agree we should be there!',
          email: 'marry.ane@gmail.com',
          src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_4hXwuiFBBoORtirhEU0JQ9YviYZUAFZ9qk1u47BC7K7b_C5H',
        },{
          id: Date.now()+2,
          text: "Personally I didn't like it! Bleah!",
          email: 'kevin.martin@gmail.com',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Putin_with_flag_of_Russia.jpg/220px-Putin_with_flag_of_Russia.jpg',
        },
      ],
    };
  }

  onNewCommentChange =(ev)=> {
    const inputText = ev.currentTarget.value;
    this.setState({
      newComment: inputText
    });
  }
 
  addComment =(ev)=> {
    ev.preventDefault();
    const id = Date.now();
    const brandNewComment = {
      id: id,
      text: this.state.newComment,
      email: 'user'+id+'@fakemail.com',
      src: 'https://s-media-cache-ak0.pinimg.com/236x/b0/28/a9/b028a9a2f6dc9c378cf34dcaee9109af.jpg',
    }
    const copyComments = [...this.state.comments];
    copyComments.push(brandNewComment);
    this.setState({
      newComment: '',
      comments: copyComments
    });
  }

  deleteComment =(idValue)=> {
    let oldCommentList = this.state.comments;
    let newCommentsList = [];
    oldCommentList.forEach((comment)=> {
      if (comment.id !== idValue) {
        newCommentsList.push(comment);
      }
    })
    this.setState({
      comments: newCommentsList
    });
  }

  render() {
    return (
      <div className='actionBox'>
        <CommentListComponent comments={this.state.comments} deleteComment={this.deleteComment} /> 
        <form className='form-inline js-comm-form'>
          <InputComponent value={this.state.newComment} onChange={this.onNewCommentChange} />
          <ButtonComponent onClick={this.addComment} />
        </form>  
      </div>  
    )
  }
}

export default AddCommentComponent;
