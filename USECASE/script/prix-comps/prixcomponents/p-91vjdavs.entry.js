import{r as t,h as l,g as e}from"./p-c6655850.js";class s{constructor(l){t(this,l),this.data={},this.configuration={},this.styling={},this.value=this.label}ovelayOn(){let t=document.getElementById("prix-boton"),l=document.getElementById("modal"),e=document.getElementById("prix-box");t.classList.toggle("overlay"),l.style.display="block",e.style.display="block",t.classList.contains("overlay")&&(t.style.display="none")}overlayOff(){let t=document.getElementById("modal"),l=document.getElementById("prix-boton"),e=document.getElementById("prix-box");l.classList.toggle("overlay"),l.classList.contains("overlay")||(l.style.display="block"),t.style.display="none",e.style.display="none"}render(){return[l("div",{class:"overlay",id:"modal"},l("span",{class:"dismiss",onClick:()=>this.overlayOff()},l("i",{class:"fa fa-window-close","aria-hidden":"true"})),l("div",{class:"prix-modal-box",id:"prix-box"},l("div",{class:"prix-modal-message"},l("p",null,this.label),l("slot",{name:"content"}),l("button",{class:"prix-modal-button",id:"cancel",onClick:()=>this.overlayOff()},this.canceLabel)," ",l("button",{class:"prix-modal-button",id:"accept"},this.acceptLabel)))),l("button",{class:"prix-button",id:"prix-boton",onClick:()=>this.ovelayOn()},this.value)]}get el(){return e(this)}static get style(){return".overlay{width:100%;height:100%;top:0;left:0;right:0;background-color:rgba(0,0,0,.5)}.overlay,.prix-modal-box{position:fixed;display:none;bottom:0;z-index:2;cursor:pointer;-webkit-transition:1s;transition:1s}.prix-modal-box{width:80%;height:80%;top:10%;left:10%;right:5%;background-color:hsla(0,0%,100%,.911)}.prix-modal-message{-ms-flex-line-pack:center;align-content:center;margin:20%;padding:2%}.dismiss{color:#fff;font-size:200%;margin:2%;padding:2%;float:right;-webkit-transition:1s;transition:1s}.prix-button{position:relative;display:block;height:25px;width:auto;color:#fff;margin:1%;background-color:#e20177;border-radius:25px}.prix-modal-button{background-color:transparent;border-radius:2px;text-align:center;-ms-flex-line-pack:center;align-content:center;font-size:100%;padding:1% 5%;bottom:3%;margin:0 2%}#accept.prix-modal-button{position:absolute;right:2%;margin-right:2%}#cancel.prix-modal-button{position:absolute;left:3%;margin:0 .5%}\@media screen and (max-width:600px){#showGrid{display:block;margin:.5%}}"}}export{s as prix_modal};