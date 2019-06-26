import { Component, State, Prop, h } from "@stencil/core";

@Component({
  tag: "prix-drawer",
  styleUrl: "drawer.scss"
})
export class TestMenu {
  @State() open: string;
  @Prop({ mutable: true }) isOpen: boolean = false;
  @Prop({ mutable: true }) dColor: string = "";
  @Prop({ mutable: true }) dExpandSize: string = "";
  @Prop({ mutable: true }) dSide: string = "";
  @Prop({ mutable: true }) dOpacity: boolean = false;

  handleToggle = () => {
    if(this.dOpacity) {
      if(this.isOpen) {
        document.body.style.backgroundColor = "white";
      } else {
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
      }
    }

    if (this.isOpen) {
      if (this.dSide == "es-top" || this.dSide == "es-bottom") {
        document.getElementById("menu-wrapper").style.height = "0%";
      } else {
        document.getElementById("menu-wrapper").style.width = "0%";
      }
      this.isOpen = false;
    } else {
      if (this.dSide == "es-top" || this.dSide == "es-bottom") {
        document.getElementById("menu-wrapper").style.height = this.dExpandSize;
      } else {
        document.getElementById("menu-wrapper").style.width = this.dExpandSize;
      }
      this.isOpen = true;
    }
  }

  componentDidLoad() {
    let wrapper = document.getElementById("menu-wrapper");
    document.getElementById("menu-wrapper").style.backgroundColor = this.dColor;

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
        <div id="menu-wrapper">
          <p>Algo de texto</p>
        </div>
        <div class="wrapper">
          <button class="button" onClick={() => this.handleToggle()}>Button</button>
        </div>
      </div>
    );
  }
}