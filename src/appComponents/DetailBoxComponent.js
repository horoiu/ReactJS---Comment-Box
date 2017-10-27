import React, { Component } from 'react';
import TitleBoxComponent from './detailBoxComponents/TitleBoxComponent';
import SubTitleComponent from './detailBoxComponents/SubTitleComponent';
import AddCommentComponent from './detailBoxComponents/AddCommentComponent';

// MAIN components Wrapper

class DetailBoxComponent extends Component {
  render() {
    return (
      <div className='detailBox'>
          <TitleBoxComponent text='Share your vacation' />              
          <SubTitleComponent text='Trip in Indonesia' />
          <AddCommentComponent />
      </div>
    )
  }
}

export default DetailBoxComponent;
