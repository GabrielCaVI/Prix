import { r as registerInstance, h } from './chunk-ac0a85cb.js';

class TestMenu {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.color = "";
        this.expandSize = "";
        this.side = "";
        this.opacity = false;
    }
    async showDrawer() {
        let wrapper = document.getElementById("drawer-wrapper");
        switch (this.expandSize) {
            case "small": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.add("small-size-height");
                }
                else {
                    wrapper.classList.add("small-size-width");
                }
                break;
            }
            case "medium": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.add("medium-size-height");
                }
                else {
                    wrapper.classList.add("medium-size-width");
                }
                break;
            }
            case "large": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.add("large-size-height");
                }
                else {
                    wrapper.classList.add("large-size-width");
                }
                break;
            }
            default: {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.add("small-size-height");
                }
                else {
                    wrapper.classList.add("small-size-width");
                }
                break;
            }
        }
        if (this.opacity) {
            document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
        }
    }
    async hideDrawer() {
        /*if (this.side == "es-top" || this.side == "es-bottom") {
          document.getElementById("drawer-wrapper").style.height = "0%";
        } else {
          document.getElementById("drawer-wrapper").style.width = "0%";
        }*/
        let wrapper = document.getElementById("drawer-wrapper");
        switch (this.expandSize) {
            case "small": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.remove("small-size-height");
                }
                else {
                    wrapper.classList.remove("small-size-width");
                }
                break;
            }
            case "medium": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.remove("medium-size-height");
                }
                else {
                    wrapper.classList.remove("medium-size-width");
                }
                break;
            }
            case "large": {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.remove("large-size-height");
                }
                else {
                    wrapper.classList.remove("large-size-width");
                }
                break;
            }
            default: {
                if (this.side == "es-top" || this.side == "es-bottom") {
                    wrapper.classList.remove("small-size-height");
                }
                else {
                    wrapper.classList.remove("small-size-width");
                }
                break;
            }
        }
        if (this.opacity) {
            document.body.style.backgroundColor = "white";
        }
    }
    componentDidLoad() {
        let wrapper = document.getElementById("drawer-wrapper");
        document.getElementById("drawer-wrapper").style.backgroundColor = this.color;
        switch (this.side) {
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
        return (h("div", null, h("div", { id: "drawer-wrapper" }, h("div", { id: "drawer-content" }, h("slot", { name: "drawer-content" })))));
    }
    static get style() { return "body,html{height:100%;margin:0;padding:0}#drawer-content{margin-left:2%}.drawer-left{left:0}.drawer-left,.drawer-right{height:100%;position:fixed;z-index:1;top:0;width:0;background-color:#afa;overflow-x:hidden;-webkit-transition:.5s;transition:.5s}.drawer-right{right:0}.drawer-top{top:0}.drawer-bottom,.drawer-top{height:0%;position:fixed;z-index:1;left:0;width:100%;background-color:#afa;overflow-x:hidden;-webkit-transition:.5s;transition:.5s}.drawer-bottom{bottom:0}\@media only screen and (max-width:600px){.small-size-height{height:30%}.medium-size-height{height:60%}.large-size-height{height:100%}.medium-size-width,.small-size-width{width:60%}.large-size-width{width:100%}}\@media only screen and (min-width:600px){.small-size-height{height:30%}.medium-size-height{height:60%}.large-size-height{height:100%}.small-size-width{width:30%}.medium-size-width{width:60%}.large-size-width{width:100%}}"; }
}

export { TestMenu as prix_drawer };
