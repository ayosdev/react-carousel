import React from 'react'
import ReactDom from 'react-dom'
import Flickity from 'flickity'
import { insertRule, style } from 'glamor'

insertRule(`.flickity-enabled { position: relative; }`)
insertRule(`.flickity-enabled:focus { outline: none; }`)
insertRule(`.flickity-viewport { overflow: hidden; position: relative; height: 100%; }`)
insertRule(`.flickity-slider { position: absolute; width: 100%; height: 100%; }`)
insertRule(`.flickity-enabled.is-draggable { -webkit-tap-highlight-color: transparent; tap-highlight-color: transparent; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}`)
insertRule(`.flickity-enabled.is-draggable .flickity-viewport { cursor: move; cursor: -webkit-grab; cursor: grab; }`)
insertRule(`.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down { cursor: -webkit-grabbing; cursor: grabbing; }`)
insertRule(`.flickity-prev-next-button { position: absolute; top: 50%; width: 44px; height: 44px; border: none; border-radius: 50%; background: white; background: hsla(0, 0%, 100%, 0.75); cursor: pointer; -webkit-transform: translateY(-50%); transform: translateY(-50%); }`)
insertRule(`.flickity-prev-next-button:hover { background: white; }`)
insertRule(`.flickity-prev-next-button:focus { outline: none; box-shadow: 0 0 0 5px #09F; }`)
insertRule(`.flickity-prev-next-button:active { opacity: 0.6; }`)
insertRule(`.flickity-prev-next-button.previous { left: 10px; }`)
insertRule(`.flickity-prev-next-button.next { right: 10px; }`)
insertRule(`.flickity-rtl .flickity-prev-next-button.previous { left: auto; right: 10px; }`)
insertRule(`.flickity-rtl .flickity-prev-next-button.next { right: auto; left: 10px; }`)
insertRule(`.flickity-prev-next-button:disabled { opacity: 0.3; cursor: auto; }`)
insertRule(`.flickity-prev-next-button svg { position: absolute; left: 20%; top: 20%; width: 60%; height: 60%; }`)
insertRule(`.flickity-prev-next-button .arrow { fill: #333; }`)
insertRule(`.flickity-page-dots { position: absolute; width: 100%; bottom: -25px; padding: 0; margin: 0; list-style: none; text-align: center; line-height: 1; }`)
insertRule(`.flickity-rtl .flickity-page-dots { direction: rtl; }`)
insertRule(`.flickity-page-dots .dot { display: inline-block; width: 10px; height: 10px; margin: 0 8px; background: #333; border-radius: 50%; opacity: 0.25; cursor: pointer; }`)
insertRule(`.flickity-page-dots .dot.is-selected { opacity: 1; }`)

let carouselContainer = style ({
  width: '100%',
  height: '100%'
})

let carouselCell = style ({
  width: '100%',
  height: '100%',
  margin: '0 auto',
})

const options = {
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  autoPlay: false,
  wrapAround: true,
  resize: false,
  setGallerySize: false
}

class ReactCarousel extends React.Component {
  constructor(){
    super()
    this.selected = this.selected.bind(this)
  }

  componentDidMount () {
    let carousel = ReactDom.findDOMNode(this.refs.carousel)
    this.reactCarousel = new Flickity(carousel, { ...options, ...this.props })

    // expose selected index
    this.reactCarousel.on('select', this.selected);
  }

  selected() {
    let index = this.reactCarousel.selectedIndex;
    this.setState({
      selected: index
    })
  }

  componentWillUnmount () {
    // guard if its instantiated
    if (this.reactCarousel) {
      this.reactCarousel.off('cellSelect', this.selected)
      this.reactCarousel.destroy()
    }

  }

  render () {
    const divCreate = React.Children.map(this.props.children, child => (
      <div className={ carouselCell }>
       { child }
      </div>
    ))
    return (
      <div className={ carouselContainer } ref='carousel'>
        { divCreate }
      </div>
    )
  }
}

ReactCarousel.defaultProps = {}
export default ReactCarousel
