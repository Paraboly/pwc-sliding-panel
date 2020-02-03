import { Component, Prop, h, Element, Watch } from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel",
  styleUrl: "pwc-sliding-panel.scss",
  shadow: false
})
export class PwcSlidingPanel {
  @Element() root: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) position: "left" | "right" = "left";

  render() {
    return [
      <a class="handle" onClick={() => (this.active = !this.active)}></a>,
      <slot />
    ];
  }
}
