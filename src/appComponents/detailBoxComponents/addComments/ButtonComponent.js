import React, { Component } from 'react';

// AddButton component

class ButtonComponent extends Component {
  render() {
    return (
      <div className='form-group'>
        <button onClick={this.props.onClick} className='btn btn-default js-add-comment'>Add</button>
      </div> 
    )
  }
}

export default ButtonComponent;
