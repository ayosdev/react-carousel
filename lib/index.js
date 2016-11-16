'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flickity = require('flickity');

var _flickity2 = _interopRequireDefault(_flickity);

var _glamor = require('glamor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _glamor.insertRule)('.flickity-enabled { position: relative; }');
(0, _glamor.insertRule)('.flickity-enabled:focus { outline: none; }');
(0, _glamor.insertRule)('.flickity-viewport { overflow: hidden; position: relative; height: 100%; }');
(0, _glamor.insertRule)('.flickity-slider { position: absolute; width: 100%; height: 100%; }');
(0, _glamor.insertRule)('.flickity-enabled.is-draggable { -webkit-tap-highlight-color: transparent; tap-highlight-color: transparent; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}');
(0, _glamor.insertRule)('.flickity-enabled.is-draggable .flickity-viewport { cursor: move; cursor: -webkit-grab; cursor: grab; }');
(0, _glamor.insertRule)('.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down { cursor: -webkit-grabbing; cursor: grabbing; }');
(0, _glamor.insertRule)('.flickity-prev-next-button { position: absolute; top: 50%; width: 44px; height: 44px; border: none; border-radius: 50%; background: white; background: hsla(0, 0%, 100%, 0.75); cursor: pointer; -webkit-transform: translateY(-50%); transform: translateY(-50%); }');
(0, _glamor.insertRule)('.flickity-prev-next-button:hover { background: white; }');
(0, _glamor.insertRule)('.flickity-prev-next-button:focus { outline: none; box-shadow: 0 0 0 5px #09F; }');
(0, _glamor.insertRule)('.flickity-prev-next-button:active { opacity: 0.6; }');
(0, _glamor.insertRule)('.flickity-prev-next-button.previous { left: 10px; }');
(0, _glamor.insertRule)('.flickity-prev-next-button.next { right: 10px; }');
(0, _glamor.insertRule)('.flickity-rtl .flickity-prev-next-button.previous { left: auto; right: 10px; }');
(0, _glamor.insertRule)('.flickity-rtl .flickity-prev-next-button.next { right: auto; left: 10px; }');
(0, _glamor.insertRule)('.flickity-prev-next-button:disabled { opacity: 0.3; cursor: auto; }');
(0, _glamor.insertRule)('.flickity-prev-next-button svg { position: absolute; left: 20%; top: 20%; width: 60%; height: 60%; }');
(0, _glamor.insertRule)('.flickity-prev-next-button .arrow { fill: #333; }');
(0, _glamor.insertRule)('.flickity-page-dots { position: absolute; width: 100%; bottom: -25px; padding: 0; margin: 0; list-style: none; text-align: center; line-height: 1; }');
(0, _glamor.insertRule)('.flickity-rtl .flickity-page-dots { direction: rtl; }');
(0, _glamor.insertRule)('.flickity-page-dots .dot { display: inline-block; width: 10px; height: 10px; margin: 0 8px; background: #333; border-radius: 50%; opacity: 0.25; cursor: pointer; }');
(0, _glamor.insertRule)('.flickity-page-dots .dot.is-selected { opacity: 1; }');

var options = {
  cellAlign: 'center',
  contain: true,
  freeScroll: true,
  autoPlay: true,
  wrapAround: true
};

var ReactCarousel = function (_React$Component) {
  _inherits(ReactCarousel, _React$Component);

  function ReactCarousel() {
    _classCallCheck(this, ReactCarousel);

    return _possibleConstructorReturn(this, (ReactCarousel.__proto__ || Object.getPrototypeOf(ReactCarousel)).apply(this, arguments));
  }

  _createClass(ReactCarousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var carousel = this.refs.carousel.getDOMNode();
      this.reactCarousel = new _flickity2.default(carousel, this.props.options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactCarousel.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'carousel', options: options },
        this.props.children
      );
    }
  }]);

  return ReactCarousel;
}(_react2.default.Component);

ReactCarousel.defaultProps = { options: options };
exports.default = ReactCarousel;