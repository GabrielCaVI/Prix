import { r as registerInstance, h, g as getElement } from './chunk-ac0a85cb.js';

class modal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("div", { class: "overlay", id: "modal" }, h("span", { class: "dismiss", onClick: () => this.overlayOff() }, h("i", { class: "fa fa-window-close", "aria-hidden": "true" })), h("div", { class: "prix-modal-box", id: "prix-box" }, h("div", { class: "prix-modal-message" }, h("p", null, this.label), h("slot", { name: "content" }), h("button", { class: "prix-modal-button", id: "cancel", onClick: () => this.overlayOff() }, this.canceLabel), " ", h("button", { class: "prix-modal-button", id: "accept" }, this.acceptLabel)))),
            h("button", { class: "prix-button", id: "prix-boton", onClick: () => this.ovelayOn() }, this.value)
        ];
    }
    get el() { return getElement(this); }
    static get style() { return ".overlay{width:100%;height:100%;top:0;left:0;right:0;background-color:rgba(0,0,0,.5)}.overlay,.prix-modal-box{position:fixed;display:none;bottom:0;z-index:2;cursor:pointer;-webkit-transition:1s;transition:1s}.prix-modal-box{width:80%;height:80%;top:10%;left:10%;right:5%;background-color:hsla(0,0%,100%,.911)}.prix-modal-message{-ms-flex-line-pack:center;align-content:center;margin:20%;padding:2%}.dismiss{color:#fff;font-size:200%;margin:2%;padding:2%;float:right;-webkit-transition:1s;transition:1s}.prix-button{position:relative;display:block;height:25px;width:auto;color:#fff;margin:1%;background-color:#e20177;border-radius:25px}.prix-modal-button{background-color:transparent;border-radius:2px;text-align:center;-ms-flex-line-pack:center;align-content:center;font-size:100%;padding:1% 5%;bottom:3%;margin:0 2%}#accept.prix-modal-button{position:absolute;right:2%;margin-right:2%}#cancel.prix-modal-button{position:absolute;left:3%;margin:0 .5%}\@media screen and (max-width:600px){#showGrid{display:block;margin:.5%}}"; }
}

export { modal as prix_modal };
