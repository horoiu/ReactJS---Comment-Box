import React, { Component } from 'react';

// 1st component 'Share your location'

class TitleBoxComponent extends Component {
  render() {
    return (
      <div className='titleBox'>
        <label>{this.props.text}</label>
      </div>
    )
  }
}

export default TitleBoxComponent;
