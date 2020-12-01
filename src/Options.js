// @flow

import BlotSpec from './specs/BlotSpec';
import ImageSpec from './specs/ImageSpec';
import IframeVideoSpec from './specs/IframeVideoSpec';

export type OverlayOptions = {
  // classname applied to the overlay element
  className: string,
  // style applied to overlay element, or null to prevent styles
  style: ?{},
};

export type ResizeOptions = {
  // class name applied to the resize handles
  handleClassName: string,
  // style applied to resize handles, or null to prevent styles
  handleStyle: ?{},
};

export type AlignOptions = {
  // the name of the attribute for an element that has its alignment changed
  attribute: string,
  // the aligner does the actual alignment switch
  aligner: {
    // whether or not the aligner should handle the actual alignment properties
    applyStyle: boolean,
  },
  // icons used for alignment
  icons: {
    left: string,
    center: string,
    right: string,
  },
  // the toolbar so users can change alignments
  toolbar: {
    // whether or not users can deselect an alignment. it's up to you to set the initial alignment
    allowDeselect: boolean,
    // class name applied to the root toolbar element
    mainClassName: string,
    // style applied to root toolbar element, or null to prevent styles
    mainStyle: ?{},
    // class name applied to each button in the toolbar
    buttonClassName: string,
    /* whether or not to add the selected style to the buttons.
    they'll always get the is-selected class */
    addButtonSelectStyle: boolean,
    // style applied to buttons, or null to prevent styles
    buttonStyle: ?{},
    // style applied to the svgs in the buttons
    svgStyle: ?{},
  },
};

export type Options = {
  // the BlotSpecs supported
  specs: Class<BlotSpec>[],
  overlay: OverlayOptions,
  align: AlignOptions,
  resize: ResizeOptions,
};

const DefaultOptions: Options = {
  specs: [
    ImageSpec,
    IframeVideoSpec,
  ],
  overlay: {
    className: 'blot-formatter__overlay',
    style: {
      position: 'absolute',
      boxSizing: 'border-box',
      border: '1px dashed #444',
    },
  },
  align: {
    attribute: 'data-align',
    aligner: {
      applyStyle: true,
    },
    icons: {
      left: `
        <i class="fad fa-align-left"></i>
      `,
      center: `
        <i class="fad fa-align-center"></i>
      `,
      right: `
        <i class="fad fa-align-right"></i>
      `,
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
        zIndex: '1',
      },
      buttonClassName: 'blot-formatter__toolbar-button',
      addButtonSelectStyle: true,
      buttonStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '0',
        padding: '10px',
        verticalAlign: 'middle',
      },
      svgStyle: {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        background: 'white',
        border: '1px solid #999',
        verticalAlign: 'middle',
      },
    },
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
      opacity: '0.80',
    },
  },
};

export default DefaultOptions;
