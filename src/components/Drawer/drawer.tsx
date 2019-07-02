import { Component, State, Prop, h, Method } from "@stencil/core";

@Component({
  tag: "prix-drawer",
  styleUrl: "drawer.scss"
})
export class TestMenu {
  @State() open: string;
  @Prop({ mutable: true }) color: string = "";
  @Prop({ mutable: true }) expandSize: string = "";
  @Prop({ mutable: true }) side: string = "";
  @Prop({ mutable: true }) opacity: boolean = false;

  @Method()
  async showDrawer() {
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
    /*if (this.side == "es-top" || this.side == "es-bottom") {
      document.getElementById("drawer-wrapper").style.height = "0%";
    } else {
      document.getElementById("drawer-wrapper").style.width = "0%";
    }*/
    let wrapper = document.getElementById("drawer-wrapper");

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
          <div id="drawer-content">
          <slot name ="drawer-content"></slot>
          </div>
        </div>
      </div>
    );
  }
}
