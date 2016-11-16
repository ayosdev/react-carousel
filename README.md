# Flickity React
React Carousel Plugin based from Flickity

### Installation
```bash
  npm install flickity --save
  npm install carouselbox --save
  npm install glamor --save
  npm install babel-cli --save-dev
  npm install babel-preset-latest --save-dev
  npm install babel-plugin-transform-react-jsx
  npm run build
```

### Example
```js
import React from 'react';
import { style, merge } from 'glamor';
import ReactCarousel from 'carouselbox';

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

export default class Rawr extends React.Component {  
  render() {
    var flickityOptions = {
        cellAlign: 'center',
        contain: false,
        freeScroll: false,
        autoPlay: false,
        wrapAround: false
    } /* Override your Flickity Options Here */
    
    return (
      <ReactCarousel className={ carousel } /* options = { flickityOptions } */>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
        <div className={merge(carouselCell, carouselCellHover)}></div>
      </ReactCarousel>
    );
  }
}

export default Rawr;
```