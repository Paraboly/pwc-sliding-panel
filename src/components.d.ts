/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcSlidingPanel {
    'active': boolean;
    'anchor': "left" | "right";
  }
  interface PwcSlidingPanelContent {}
  interface PwcSlidingPanelToggle {}
}

declare global {


  interface HTMLPwcSlidingPanelElement extends Components.PwcSlidingPanel, HTMLStencilElement {}
  var HTMLPwcSlidingPanelElement: {
    prototype: HTMLPwcSlidingPanelElement;
    new (): HTMLPwcSlidingPanelElement;
  };

  interface HTMLPwcSlidingPanelContentElement extends Components.PwcSlidingPanelContent, HTMLStencilElement {}
  var HTMLPwcSlidingPanelContentElement: {
    prototype: HTMLPwcSlidingPanelContentElement;
    new (): HTMLPwcSlidingPanelContentElement;
  };

  interface HTMLPwcSlidingPanelToggleElement extends Components.PwcSlidingPanelToggle, HTMLStencilElement {}
  var HTMLPwcSlidingPanelToggleElement: {
    prototype: HTMLPwcSlidingPanelToggleElement;
    new (): HTMLPwcSlidingPanelToggleElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-sliding-panel': HTMLPwcSlidingPanelElement;
    'pwc-sliding-panel-content': HTMLPwcSlidingPanelContentElement;
    'pwc-sliding-panel-toggle': HTMLPwcSlidingPanelToggleElement;
  }
}

declare namespace LocalJSX {
  interface PwcSlidingPanel {
    'active'?: boolean;
    'anchor'?: "left" | "right";
  }
  interface PwcSlidingPanelContent {}
  interface PwcSlidingPanelToggle {
    'onToggled'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'pwc-sliding-panel': PwcSlidingPanel;
    'pwc-sliding-panel-content': PwcSlidingPanelContent;
    'pwc-sliding-panel-toggle': PwcSlidingPanelToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-sliding-panel': LocalJSX.PwcSlidingPanel & JSXBase.HTMLAttributes<HTMLPwcSlidingPanelElement>;
      'pwc-sliding-panel-content': LocalJSX.PwcSlidingPanelContent & JSXBase.HTMLAttributes<HTMLPwcSlidingPanelContentElement>;
      'pwc-sliding-panel-toggle': LocalJSX.PwcSlidingPanelToggle & JSXBase.HTMLAttributes<HTMLPwcSlidingPanelToggleElement>;
    }
  }
}


