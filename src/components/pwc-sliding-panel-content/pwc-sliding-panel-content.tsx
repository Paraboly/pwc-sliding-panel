import { Component, h, Element } from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel-content",
  styleUrl: "pwc-sliding-panel-content.scss",
  shadow: false
})
export class PwcSlidingPanelContent {
  @Element() root: HTMLElement;

  render() {
    return <slot />;
  }
}
