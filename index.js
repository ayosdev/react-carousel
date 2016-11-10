var React = require('react')
var Flick = require('flickity')
var refName = 'carousel'

var Flickity = React.createClass ({

  propTypes: {
    options: React.PropTypes.object,
    className: React.PropTypes.string,
    elementType: React.PropTypes.string,
    children: React.PropTypes.array
  },

  getInitialState: function () {
    return {
      selectedIndex: 0
    }
  },

  componentDidMount: function() {
    var carousel = this.refs.carousel.getDOMNode();
    this.flkty = new Flickity(carousel, this.props.options);
    this.flkty.on('cellSelect', this.updateSelected);
  }

  getDefaultProps: function () {
    return {
      options: {},
      className: '',
      elementType: 'div'
    }
  },

  updateSelected: function () {
    var index = this.flkty.selectedIndex
    this.setState({
      selectedIndex: index
    })
  },

  componentWillUnmount: function () {
    if (this.flkty) {
      this.flkty.off('cellSelect', this.updateSelected)
      this.flkty.destroy()
    }
  },

  render: function () {
    return React.createElement(this.props.elementType, {
      className: this.props.className,
      ref: refName
    }, this.props.children)
  }
});

module.exports = Flickity;

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
