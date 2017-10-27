import React, { Component } from 'react';

// 2nd component 'Trip in Indonesia'

class SubTitleComponent extends Component {
  render() {
    return (
      <div className='commentBox'>
        <p className='taskDescription'>{this.props.text}</p>
      </div>  
    )
  }
}

export default SubTitleComponent;
