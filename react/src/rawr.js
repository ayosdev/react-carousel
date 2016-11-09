import React from 'react';
import HelloWorld from './HelloWorld.js';

export default class Rawr extends React.Component {  
  render() {
    var flickityOptions = {
        cellAlign: 'right',
        contain: false,
        freeScroll: false,
        autoPlay: false,
        wrapAround: false
    }
    
    console.log(flickityOptions);
    
    return (
      <div><HelloWorld options={ flickityOptions } /></div>
    );
  }
}

export default Rawr;