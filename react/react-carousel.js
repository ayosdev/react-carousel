import React from 'react'
import Flickity from 'flickity'
import style from './react-carousel-local.css'

export default class reactCarousel extends React.Component {
  constructor(){
    super()
  }

  var flkty = new Flickity( className={ style.carousel }, {
      cellAlign: 'left',
      contain: true,
      freeScroll: true,
      autoPlay: true,
      wrapAround: true
    }
  );

  render() {
    let mainClass = cs( style.mainDiv )

    return(
      <div className={ mainClass }>
        <div className={ style.carousel }>
          <div className={ style.carouselCell }></div>
          <div className={ style.carouselCell }></div>
          <div className={ style.carouselCell }></div>
          <div className={ style.carouselCell }></div>
          <div className={ style.carouselCell }></div>
        </div>
      </div>
    )
  }
}