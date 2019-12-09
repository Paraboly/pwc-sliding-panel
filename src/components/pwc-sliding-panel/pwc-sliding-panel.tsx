import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel",
  styleUrl: "pwc-sliding-panel.css",
  shadow: false
})
export class PwcSlidingPanelComponent {
  @Prop() toggled: boolean = false;
  @Prop() position: "left" | "right" = "left";

  render() {
    const positionClass = "pwc-sliding-panel__" + this.position;

    return (
      <div
        class={`pwc-sliding-panel__pwc-theme pwc-sliding-panel__hidable ${positionClass} ${
          this.toggled ? "pwc-sliding-panel__active" : ""
        }`}
      >
        <a
          class="pwc-sliding-panel__toggle"
          onClick={() => (this.toggled = !this.toggled)}
        ></a>
        <slot />
      </div>
    );
  }
}
