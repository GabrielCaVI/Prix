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

  //Methods
  /**
    * Public API
  */
  @Method()
  async showDrawer() {
    let content = document.getElementById("drawerContent");
    content.classList.remove("hide");
    let wrapper = document.getElementById("drawer-wrapper");
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

    if(this.opacity) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
  }

  @Method()
  async hideDrawer() {
    let wrapper = document.getElementById("drawer-wrapper");
    let content = document.getElementById("drawerContent");
    content.classList.add("hide");

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

    if(this.opacity) {
      document.body.style.backgroundColor = "white";
    }
  }

  //Methods
  /**
    * Lifecyle Methods
  */
  componentDidLoad() {
    let wrapper = document.getElementById("drawer-wrapper");
    document.getElementById("drawer-wrapper").style.backgroundColor = this.color;

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
  }

  render() {
    return (
      <div>
        <div id="drawer-wrapper">
          <div id="drawerContent">
            <slot name ="drawer-content"></slot>
          </div>
        </div>
      </div>
    );
  }
}