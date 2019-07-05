import { h } from "@stencil/core";
export class TestMenu {
    constructor() {
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
        return (h("div", null,
            h("div", { id: "drawer-wrapper" },
                h("div", { id: "drawer-content" },
                    h("slot", { name: "drawer-content" })))));
    }
    static get is() { return "prix-drawer"; }
    static get originalStyleUrls() { return {
        "$": ["drawer.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["drawer.css"]
    }; }
    static get properties() { return {
        "color": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "expandSize": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "expand-size",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "side": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "side",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "opacity": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "opacity",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "open": {}
    }; }
    static get methods() { return {
        "showDrawer": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "hideDrawer": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
