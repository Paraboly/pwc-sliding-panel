import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Listen
} from "@stencil/core";

@Component({
  tag: "pwc-sliding-panel-toggle",
  styleUrl: "pwc-sliding-panel-toggle.scss",
  shadow: false
})
export class PwcSlidingPanelToggle {
  @Element() root: HTMLPwcSlidingPanelToggleElement;

  @Event() toggled: EventEmitter;

  @Listen("click")
  clickListener(event: MouseEvent) {
    if (event.target === this.root) {
      this.toggled.emit();
    }
  }

  render() {
    return <slot />;
  }
}
