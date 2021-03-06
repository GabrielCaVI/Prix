import { Component, Prop, Method, h } from "@stencil/core";

@Component({
  tag: "prix-drawer",
  styleUrl: "drawer.scss"
})
export class drawer {
  //Props
  /**
    * Common attributes
  */
  @Prop({ mutable: true }) color: string = "";
  @Prop({ mutable: true }) expandSize: string = "";
  @Prop({ mutable: true }) side: string = "";
  @Prop({ mutable: true }) opacity: boolean = false;
  @Prop({ mutable: true }) overflowY: boolean = false;

  //Methods
  /**
    * Public API
  */
  @Method()
  async showDrawer() {
    let wrapper = document.getElementById("prixDrawerWrapper");
    switch(this.expandSize) {
      case "small": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.add("small-size-height");
        } else {
          wrapper.classList.add("small-size-width");
        }
        break;
      }
      case "medium": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.add("medium-size-height");
        } else {
          wrapper.classList.add("medium-size-width");
        }
        break;
      }
      case "large": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.add("large-size-height");
        } else {
          wrapper.classList.add("large-size-width");
        }
        break;
      }
      default: {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.add("small-size-height");
        } else {
          wrapper.classList.add("small-size-width");
        }
        break;
      }
    }

    let content = document.getElementById("prixDrawerContent");
    content.classList.remove("hide");

    if(this.opacity) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
  }

  @Method()
  async hideDrawer() {
    let wrapper = document.getElementById("prixDrawerWrapper");
    switch(this.expandSize) {
      case "small": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.remove("small-size-height");
        } else {
          wrapper.classList.remove("small-size-width");
        }
        break;
      }
      case "medium": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.remove("medium-size-height");
        } else {
          wrapper.classList.remove("medium-size-width");
        }
        break;
      }
      case "large": {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.remove("large-size-height");
        } else {
          wrapper.classList.remove("large-size-width");
        }
        break;
      }
      default: {
        if (this.side == "es-top" || this.side == "es-bottom") {
          wrapper.classList.remove("small-size-height");
        } else {
          wrapper.classList.remove("small-size-width");
        }
        break;
      }
    }

    let content = document.getElementById("prixDrawerContent");
    content.classList.add("hide");

    if(this.opacity) {
      document.body.style.backgroundColor = "white";
    }
  }

  //Methods
  /**
    * Lifecyle Methods
  */
  componentDidLoad() {
    let wrapper = document.getElementById("prixDrawerWrapper");
    wrapper.style.backgroundColor = this.color;

    switch(this.side) {
      case "es-left": {
        wrapper.classList.toggle("drawer-left");
        break;
      }
      case "es-right": {
        wrapper.classList.toggle("drawer-right");
        break;
      }
      case "es-top": {
        wrapper.classList.toggle("drawer-top");
        break;
      }
      case "es-bottom": {
        wrapper.classList.toggle("drawer-bottom");
        break;
      }
      default: {
        wrapper.classList.toggle("drawer-left");
        break;
      }
    }

    if(this.overflowY) {
      wrapper.style.overflowY = "auto";
    }
  }

  render() {
    return (
      <div id="prixDrawerWrapper">
        <div id="prixDrawerContent">
          <slot name ="prixDrawerContentSlot"></slot>
        </div>
      </div>
    );
  }
}
