import React, { Component } from 'react';

// InputField component

class InputComponent extends Component {  
  render() {
    return (
      <div className='form-group'>
        <input id='inputField' className='form-control js-comm-text' type='text' 
          value={this.props.value} placeholder='Your comment here...'
          onChange={this.props.onChange} />
      </div>  
    )
  }
}

export default InputComponent;
