import { Component, Prop, h, Element, Listen, Watch } from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel",
  styleUrl: "pwc-sliding-panel.scss",
  shadow: false
})
export class PwcSlidingPanel {
  @Element() root: HTMLPwcSlidingPanelElement;

  @Prop({ mutable: true, reflect: true }) active: boolean = false;
  @Watch("active")
  activeWatchHandler(newValue) {
    if (newValue) {
      this.root.classList.add("pwc-sliding-panel___active");
    } else {
      this.root.classList.remove("pwc-sliding-panel___active");
    }
  }

  @Prop({ reflect: true }) anchor: "left" | "right" = "left";

  @Listen("toggled")
  toggledListener() {
    this.active = !this.active;
  }

  render() {
    return <slot />;
  }
}
