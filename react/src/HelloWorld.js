import React from 'react';
import { style, merge } from 'glamor';
import Flickity from 'flickity';

let carousel = style ({ 
  background: '#EEE',
  margin: '0 auto',
  width: '300px'
})

let carouselCell = style ({
  width: '300px',
  height: '200px',
  margin: '0 auto',
  background: '#8C8',
  borderRadius: '5px',
  counterIncrement: 'gallery-cell'
})

let carouselCellHover = style({
  ':before': {
    display: 'block',
    textAlign: 'center',
    content: 'counter(gallery-cell)',
    lineHeight: '200px',
    fontSize: '80px',
    color: 'white'
  }
})

var options = {
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  autoPlay: true,
  wrapAround: true
}

export default class HelloWorld extends React.Component {
  
  getInitialState() {
      return {
          selectedIndex: 0
      }
  }
    
  componentDidMount() {
    var carousel = this.refs.carousel.getDOMNode();
    this.flkty = new Flickity(carousel, this.props.options);
    this.flkty.on('cellSelect', this.updateSelected);
  }

  componentWillUnmount() {
    if (this.flkty) {
        this.flkty.off('cellSelect', this.updateSelected);
        this.flkty.destroy();
    }
  }
  
  
  render() {
    return (
      <div ref='carousel' className={ carousel } options={ options }>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
      </div>
    );
  }
}

export default HelloWorld;
HelloWorld.defaultProps = { options: '' }