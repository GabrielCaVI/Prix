/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PrixDirectory {
    'configuration'?: any;
    /**
    * Common attributes
    */
    'data'?: any;
    'styling'?: any;
  }
  interface PrixDrawer {
    'dColor': string;
    'dExpandSize': string;
    'dOpacity': boolean;
    'dSide': string;
    'isOpen': boolean;
  }
  interface PrixModal {
    'acceptLabel': string;
    'canceLabel': string;
    'colorBody': string;
    'colorBodyText': string;
    'colorFooter': string;
    'colorHeader': string;
    'colorHeaderText': string;
    'expandSizewidth': string;
    'opacity': boolean;
    'opacityColor': string;
    'showModal': () => Promise<void>;
  }
  interface PrixMultiLevel {
    'color': string;
    'dark': boolean;
    'data'?: any;
    'message': string;
  }
}

declare global {


  interface HTMLPrixDirectoryElement extends Components.PrixDirectory, HTMLStencilElement {}
  var HTMLPrixDirectoryElement: {
    prototype: HTMLPrixDirectoryElement;
    new (): HTMLPrixDirectoryElement;
  };

  interface HTMLPrixDrawerElement extends Components.PrixDrawer, HTMLStencilElement {}
  var HTMLPrixDrawerElement: {
    prototype: HTMLPrixDrawerElement;
    new (): HTMLPrixDrawerElement;
  };

  interface HTMLPrixModalElement extends Components.PrixModal, HTMLStencilElement {}
  var HTMLPrixModalElement: {
    prototype: HTMLPrixModalElement;
    new (): HTMLPrixModalElement;
  };

  interface HTMLPrixMultiLevelElement extends Components.PrixMultiLevel, HTMLStencilElement {}
  var HTMLPrixMultiLevelElement: {
    prototype: HTMLPrixMultiLevelElement;
    new (): HTMLPrixMultiLevelElement;
  };
  interface HTMLElementTagNameMap {
    'prix-directory': HTMLPrixDirectoryElement;
    'prix-drawer': HTMLPrixDrawerElement;
    'prix-modal': HTMLPrixModalElement;
    'prix-multi-level': HTMLPrixMultiLevelElement;
  }
}

declare namespace LocalJSX {
  interface PrixDirectory extends JSXBase.HTMLAttributes<HTMLPrixDirectoryElement> {
    'configuration'?: any;
    /**
    * Common attributes
    */
    'data'?: any;
    'styling'?: any;
  }
  interface PrixDrawer extends JSXBase.HTMLAttributes<HTMLPrixDrawerElement> {
    'dColor'?: string;
    'dExpandSize'?: string;
    'dOpacity'?: boolean;
    'dSide'?: string;
    'isOpen'?: boolean;
  }
  interface PrixModal extends JSXBase.HTMLAttributes<HTMLPrixModalElement> {
    'acceptLabel'?: string;
    'canceLabel'?: string;
    'colorBody'?: string;
    'colorBodyText'?: string;
    'colorFooter'?: string;
    'colorHeader'?: string;
    'colorHeaderText'?: string;
    'expandSizewidth'?: string;
    'opacity'?: boolean;
    'opacityColor'?: string;
  }
  interface PrixMultiLevel extends JSXBase.HTMLAttributes<HTMLPrixMultiLevelElement> {
    'color'?: string;
    'dark'?: boolean;
    'data'?: any;
    'message'?: string;
  }

  interface IntrinsicElements {
    'prix-directory': PrixDirectory;
    'prix-drawer': PrixDrawer;
    'prix-modal': PrixModal;
    'prix-multi-level': PrixMultiLevel;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


