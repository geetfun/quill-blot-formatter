'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BlotSpec = require('./specs/BlotSpec');

var _BlotSpec2 = _interopRequireDefault(_BlotSpec);

var _ImageSpec = require('./specs/ImageSpec');

var _ImageSpec2 = _interopRequireDefault(_ImageSpec);

var _IframeVideoSpec = require('./specs/IframeVideoSpec');

var _IframeVideoSpec2 = _interopRequireDefault(_IframeVideoSpec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultOptions = {
  specs: [_ImageSpec2.default, _IframeVideoSpec2.default],
  overlay: {
    className: 'blot-formatter__overlay',
    style: {
      position: 'absolute',
      boxSizing: 'border-box',
      border: '1px dashed #444'
    }
  },
  align: {
    attribute: 'data-align',
    aligner: {
      applyStyle: true
    },
    icons: {
      left: '\n        <i class="fad fa-align-left"></i>\n      ',
      center: '\n        <i class="fad fa-align-center"></i>\n      ',
      right: '\n        <i class="fad fa-align-right"></i>\n      '
    },
    toolbar: {
      allowDeselect: true,
      mainClassName: 'blot-formatter__toolbar',
      mainStyle: {
        position: 'absolute',
        top: '-12px',
        right: '0',
        left: '0',
        height: '0',
        minWidth: '100px',
        font: '12px/1.0 Arial, Helvetica, sans-serif',
        textAlign: 'center',
        color: '#333',
        boxSizing: 'border-box',
        cursor: 'default',
        zIndex: '1'
      },
      buttonClassName: 'blot-formatter__toolbar-button',
      addButtonSelectStyle: true,
      buttonStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '0',
        verticalAlign: 'middle'
      },
      svgStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '1px solid #999',
        verticalAlign: 'middle'
      }
    }
  },
  resize: {
    handleClassName: 'blot-formatter__resize-handle',
    handleStyle: {
      position: 'absolute',
      height: '12px',
      width: '12px',
      backgroundColor: 'white',
      border: '1px solid #777',
      boxSizing: 'border-box',
      opacity: '0.80'
    }
  }
};

exports.default = DefaultOptions;