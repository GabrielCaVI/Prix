import { Component, State, Prop, h, Method } from "@stencil/core";

@Component({
  tag: "prix-drawer",
  styleUrl: "drawer.scss"
})
export class TestMenu {
  @State() open: string;
  @Prop({ mutable: true }) dColor: string = "";
  @Prop({ mutable: true }) dExpandSize: string = "";
  @Prop({ mutable: true }) dSide: string = "";
  @Prop({ mutable: true }) dOpacity: boolean = false;

  @Method()
  async showDrawer() {
    if (this.dSide == "es-top" || this.dSide == "es-bottom") {
      document.getElementById("drawer-wrapper").style.height = this.dExpandSize;
    } else {
      document.getElementById("drawer-wrapper").style.width = this.dExpandSize;
    }

    if(this.dOpacity) {
      document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
    }
  }

  @Method()
  async hideDrawer() {
    if (this.dSide == "es-top" || this.dSide == "es-bottom") {
      document.getElementById("drawer-wrapper").style.height = "0%";
    } else {
      document.getElementById("drawer-wrapper").style.width = "0%";
    }
    
    if(this.dOpacity) {
      document.body.style.backgroundColor = "white";
    }
  }


  componentDidLoad() {
    let wrapper = document.getElementById("drawer-wrapper");
    document.getElementById("drawer-wrapper").style.backgroundColor = this.dColor;

    switch(this.dSide) {
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
