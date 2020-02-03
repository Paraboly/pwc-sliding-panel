import { Component, Prop, h, Element } from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel",
  styleUrl: "pwc-sliding-panel.scss",
  shadow: false
})
export class PwcSlidingPanel {
  @Element() root: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;
  @Prop({ reflect: true }) anchor: "left" | "right" = "left";

  render() {
    return [
      <a
        class="pwc-sliding-panel___toggle"
        onClick={() => (this.active = !this.active)}
      ></a>,
      <div class="pwc-sliding-panel___content">
        <slot />
      </div>
    ];
  }
}
