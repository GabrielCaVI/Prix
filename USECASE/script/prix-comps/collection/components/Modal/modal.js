import { h } from '@stencil/core';
export class modal {
    constructor() {
        //Props
        /**
         * Common attributes
         */
        this.data = {};
        this.configuration = {};
        this.styling = {};
        this.value = this.label;
    }
    ovelayOn() {
        let boton = document.getElementById('prix-boton');
        let cortina = document.getElementById('modal');
        let msg = document.getElementById('prix-box');
        boton.classList.toggle('overlay');
        cortina.style.display = "block";
        msg.style.display = 'block';
        if (boton.classList.contains('overlay')) {
            boton.style.display = "none";
        }
    }
    overlayOff() {
        let over = document.getElementById('modal');
        let boton = document.getElementById('prix-boton');
        let msg = document.getElementById('prix-box');
        boton.classList.toggle('overlay');
        if (!boton.classList.contains('overlay')) {
            boton.style.display = "block";
        }
        over.style.display = "none";
        msg.style.display = "none";
    }
    render() {
        return [
            h("div", { class: "overlay", id: "modal" },
                h("span", { class: "dismiss", onClick: () => this.overlayOff() },
                    h("i", { class: "fa fa-window-close", "aria-hidden": "true" })),
                h("div", { class: "prix-modal-box", id: "prix-box" },
                    h("div", { class: "prix-modal-message" },
                        h("p", null, this.label),
                        h("slot", { name: "content" }),
                        h("button", { class: "prix-modal-button", id: "cancel", onClick: () => this.overlayOff() }, this.canceLabel),
                        " ",
                        h("button", { class: "prix-modal-button", id: "accept" }, this.acceptLabel)))),
            h("button", { class: "prix-button", id: "prix-boton", onClick: () => this.ovelayOn() }, this.value)
        ];
    }
    static get is() { return "prix-modal"; }
    static get originalStyleUrls() { return {
        "$": ["modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get properties() { return {
        "data": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Common attributes"
            },
            "attribute": "data",
            "reflect": false,
            "defaultValue": "{}"
        },
        "configuration": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "configuration",
            "reflect": false,
            "defaultValue": "{}"
        },
        "label": {
            "type": "string",
            "mutable": false,
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
            "attribute": "label",
            "reflect": false
        },
        "canceLabel": {
            "type": "string",
            "mutable": false,
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
            "attribute": "cance-label",
            "reflect": false
        },
        "acceptLabel": {
            "type": "string",
            "mutable": false,
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
            "attribute": "accept-label",
            "reflect": false
        },
        "styling": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "styling",
            "reflect": false,
            "defaultValue": "{}"
        }
    }; }
    static get states() { return {
        "value": {}
    }; }
    static get elementRef() { return "el"; }
}
