import { r as registerInstance, h } from './app-3d341675.js';

class appMenu {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.data = {};
        this.dark = false;
        this.value = this.message;
        this.colour = this.color;
        this.internalItems = [];
        this.handleToggle = () => {
            let button = document.getElementById('openButton');
            let inner = document.getElementById('inner-menu');
            let content = document.getElementById('content');
            button.classList.toggle('toggle');
            button.classList.toggle('transition');
            inner.classList.toggle('toggle');
            inner.classList.toggle('showMenu');
            inner.classList.toggle('transition');
            content.classList.toggle('toggle');
            content.classList.toggle('transition');
            content.classList.toggle('hide');
            setTimeout(function () {
                button.classList.toggle("transition");
                inner.classList.toggle("transition");
            }, 350);
        };
    }
    menuToggle() {
        let item = document.getElementById('item');
        item.classList.toggle('toggle');
        item.classList.toggle('transition');
        setTimeout(function () {
            item.classList.toggle("transition");
        }, 350);
    }
    setValue(color) {
        this.color = color;
    }
    init() {
        this.internalItems = this.data.items;
    }
    componentWillLoad() {
        this.init();
    }
    darkTheme() {
        let inn = document.getElementById('inner-menu');
        let but = document.getElementById('openButton');
        inn.classList.toggle('dark');
        but.classList.toggle('dark');
    }
    render() {
        const items = this.internalItems;
        return (h("div", { id: "menu" }, h("div", { id: "bg-opacity" }), h("div", { id: "wrapper", class: "center" }, h("button", { id: "openButton", onClick: () => this.handleToggle(), class: "float hide noselect" }, h("div", { class: "chevron" })), h("div", { id: "inner-menu", class: "" }, h("span", { id: "dark" }, "  ", h("button", { id: "dark", onClick: () => this.darkTheme() }, h("i", { class: "fas fa-moon" })), " "), h("div", { id: "content", class: "hide center" }, h("p", null, this.value), items.map((item) => (h("div", { class: "item" }, h("input", { type: "checkbox", id: item.title, value: item.title }), h("label", { htmlFor: item.title }, item.title, " ", h("span", { class: "fas fa-chevron-right arrow" })), h("ul", null, item.levels.map((level) => (h("div", { class: "item submenu" }, h("input", { type: "checkbox", id: level.title, value: level.title }), h("label", { htmlFor: level.title }, level.title, " ", h("span", { class: "fas fa-chevron-right arrow" })), h("ul", null, level.options.map((option) => (h("li", null, h("a", { href: option.url }, h("span", null, option.title))))))))), item.options.map((option) => (h("li", null, h("a", { href: option.url }, h("span", null, option.title))))))))), h("div", { class: "help22", id: "help" }, h("ul", null, h("li", null, h("a", { href: "#" }, h("span", { class: "far" }), "Help Center")))))))));
    }
    static get style() { return "\@charset \"UTF-8\";\nbody {\n  font-family: Lato;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n}\n\n.noselect {\n  outline: none;\n  border-style: none;\n}\n\n.hide {\n  display: none;\n}\n\n\n\n.float {\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  top: 50px;\n  /* background-color: #e20177; */\n  color: #ffffff;\n  border-radius: 120px;\n  z-index: 9999;\n  -webkit-box-shadow: -3px -16px 48px -15px rgba(0, 0, 0, 0.42);\n  -moz-box-shadow: -3px -16px 48px -15px rgba(0, 0, 0, 0.42);\n  box-shadow: -3px -16px 48px -15px rgba(0, 0, 0, 0.42);\n  display: -ms-flexbox;\n  display: flex; /* Childern Centered */\n  -ms-flex-align: center;\n  align-items: center; /* Childern Centered */\n}\n\n.transition {\n  transition: -webkit-transform 0.35s cubic-bezier(0.24, 1, 0.32, 1),\n    visibility 0s;\n  -webkit-transition: visibility 0s, -webkit-transform 0.35s cubic-bezier(0.24, 1, 0.32, 1);\n  transition: visibility 0s, -webkit-transform 0.35s cubic-bezier(0.24, 1, 0.32, 1);\n  transition: transform 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0s;\n  transition: transform 0.35s cubic-bezier(0.24, 1, 0.32, 1), visibility 0s, -webkit-transform 0.35s cubic-bezier(0.24, 1, 0.32, 1);\n}\n\n.chevron {\n  display: block;\n  margin: auto;\n  width: 30px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAAE79V5PAAAABGdBTUEAALGPC/xhBQAAAdBJREFUSA2llTtLA0EQx42CbyEWamNSCVainYWVxF7FRhD8AFbBwsoPYBcUKz+Ahdhai9gIWonYCDYqgigYEF+YxN9cdo69vb1cQhaGmfk/Zo7ccuno8J1a/XzFOPCFGBgAxlLTpuyXgUaUtsol6E8MlrV1MmEoAmgDkTWOa8WCDLhqiILJn0qcGaBXHaavdQJcZurnW0lptfZm3Hkz4dkr8IEYpnStk+98+gBDWHLEeRWD3ztc/bEBly2iqgZfRrdtaSs+TYghHAybVgqMH2ZL9DWnDcH0YIya+tM8AY/6UR1Onmg4APGPZShTr1i9lIuxAYAZR3SrIvBJh9tRTq653mbVHIekKSAGlDT5NKBoqhax5Rrt3tJJuaQDpCnYwqQanfwWpSQ+Fcc8Q8g9eCXGUw3tClgySshTu0euRl+782N+huaIG3ebp78AG4kNaBVgyDzx7lkg0B9RSeBewGdb3SfXdZOwb509/4lmWodSzxFvtsCq5cE2VOvNCHqII8vklucAw14zINwYceWarP6Qujv006S9vz008p/R1EHbRRwQSUfuSi4YRlF0VPIdWmtqUwMRM9aJX2d2MWKBlO/XLhG+v4igjUZmEvtE+Mv9A1JJWhptGVPRAAAAAElFTkSuQmCC\");\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n\n#dark{\n  margin: 2%;\n  margin-bottom: 0;\n  background-color: transparent;\n  border: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 30px;\n  height: 20px;\n  -ms-flex-line-pack: center;\n  align-content: center;\n}\n\n#dark i{\ncolor: white;\n-ms-flex-line-pack: center;\nalign-content: center;\nfont-size: 200%;\n\n}\n.transition.chevron {\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n}\n\n.toggle > .chevron {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n\n.toggle.transition > .chevron {\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n}\n\n.toggle,\n.toggle-inner-menu {\n  -webkit-transform: translateX(30vw) translateX(-34px);\n  transform: translateX(30vw) translateX(-34px);\n}\n\n#openButton, #inner-menu{\n  background-color: #e20177;\n}\n\n#openButton.dark, #inner-menu.dark{\n background-color: #A020F0; \n}\n#openButton{\n \n  top: 50%;\n  }\n#inner-menu {\n  border-top:5px;\n  position: fixed;\n  left: calc(-30vw + 34px);\n  top: 0;\n  border-right: 1px solid rgba(0, 0, 0, 0.14);\n  width: 30vw;\n  height: 100%;\n  z-index: 999;\n  /*hace que el scroll del menú cambie cuando es toggled*/\n  max-height: calc(100vh + 5rem);\n  overflow-y: auto;\n  \n}\n\n.arrow {\n  padding-left: 5%;\n\n}\n\n#content{\n  -webkit-transform: translateX(-20%);\n  transform: translateX(-20%);\n  \n  overflow-x: hidden;\n}\n.submenu{\n  margin-left: 40px;\n}\n\n\n#content {\n  -webkit-transform: translateX(-20%);\n  transform: translateX(-20%);\n  margin-left: 20px;\n  height: 100%;\n  left: 10%;\n}\n\n\n.center {\n  position: relative;\n}\n\n#content p {\n  margin: 50px auto;\n  color: #fff;\n  font-size: 12px;\n  font-family: arial; /* focus on this attrib, should be diff*/\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#content ul {\n  margin: auto;\n  vertical-align: middle;\n  list-style: none;\n  position: relative;\n  height: 100%;\n  top: 20%;\n}\n\n#content ul li {\n  display: block;\n  width: 90%;\n  margin-bottom: 5px;\n  text-align: center;\n  padding: 5px 10px;\n}\n\n#content input  {\n  display: none;\n  width: 90%;\n  margin-bottom: 5px;\n  text-align: center;\n  padding: 5px 10px;\n}\n\n\n\n#content .item label {\n  display: block;\n  width: 90%;\n  color: white;\n  margin-bottom: 5px;\n  text-align: left;\n  margin-left: 15%;\n  padding: 5px 10px;\n}\n\n.content .item .submenu {\n  margin-left: 30%;\n}\n\n\n#help ul li:last-child {\n  border: 1px solid hsla(360, 100%, 100%, 0.9);\n  border-radius: 4px;\n  width: 80%;\n  background: hsla(360, 100%, 100%, 0.3);\n  margin: 10%;\n}\n\n\n#content ul li a {\n  color: #ffffff;\n  text-decoration: none;\n  animation: rota 3s ease-in 0.3s 2 reverse forwards;\n}\n#contentul li a span.far {\n  margin-right: 10px;\n}\n#content ul li a span {\n  text-transform: uppercase;\n}\n\n\n\n.item input[type=\"checkbox\"]{\n  display: none;\n  z-index: 10;\n}\n.item ul {\n  display: none; \n}\n\n.item input:checked ~ ul {\n  display: block;\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n  -webkit-animation: menu3 300ms ease-in-out forwards;\n  animation: menu3 300ms ease-in-out forwards;\n}\n\n.item input:checked ~ label span {\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  padding: 5% 2%;\n}\n\n.item input:not(:checked) ~ label span {\n  -webkit-transition: 0.35s;\n  transition: 0.35s;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  padding-left: 5%;\n}\n\n.item input:checked {\n-webkit-transition: 0.35s;\ntransition: 0.35s;\n-webkit-transform: \nrotate(180deg)\ntranslateY(-25px);\ntransform: \nrotate(180deg)\ntranslateY(-25px);\nmargin-inline: 2px;\n}\n\n\@-webkit-keyframes menu3 {\n\n  from{\n    opacity: 0%;\n    -webkit-transform:  translateY(-10px);\n    transform:  translateY(-10px)\n  }\n\n  to{\n    opacity: 100%;\n    -webkit-transform:  translateY(-5px);\n    transform:  translateY(-5px)\n    }\n}\n\n\@keyframes menu3 {\n\n  from{\n    opacity: 0%;\n    -webkit-transform:  translateY(-10px);\n    transform:  translateY(-10px)\n  }\n\n  to{\n    opacity: 100%;\n    -webkit-transform:  translateY(-5px);\n    transform:  translateY(-5px)\n    }\n}\n\n\n\@media (min-width: 601fpx) and (max-width: 960px) {\n  #inner-menu {\n    left: calc(-35vw + 34px);\n    width: 35vw;\n    height: 100%;\n\n    /*hace que el scroll del menú cambie cuando es toggled*/\n    max-height: calc(100vh - 9rem);\n    overflow-y: auto;\n    \n  }\n  .toggle,\n  .toggle-inner-menu {\n    -webkit-transform: translateX(35vw) translateX(-34px);\n    transform: translateX(35vw) translateX(-34px);\n  }\n\n  #content{\n    border-left: 30%;\n    left: 7%;\n    \n  }\n\n\n \n \n}\n\n\@media (max-width: 600px) {\n  #openButton{\n    background-color: #e20177;\n    top: 85%;\n    }\n  .float {\n    bottom: 0px;\n    right: 20px;\n    top: auto;\n  }\n\n  .chevron {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  .toggle {\n    /*cambió cantidad de transform para que el menú sea visualizado*/\n    -webkit-transform: translateY(-80vh);\n    transform: translateY(-80vh);\n  }\n\n  .toggle-inner-menu {\n    -webkit-transform: translateY(-40vh) translateY(-60px);\n    transform: translateY(-40vh) translateY(-60px);\n  }\n\n  .toggle > .chevron {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  #inner-menu {\n    top: auto;\n    left: 0;\n    bottom: -80%;\n    margin: 0;\n    border-right: 1px solid rgba(0, 0, 0, 0.14);\n    height: 80%;\n    width: 100%;\n    \n    /*hace que el scroll del menú cambie cuando es toggled*/\n    max-height: calc(100vh - 9rem);\n    overflow-y: auto;\n    \n  }\n\n  #content {\n    left:0;\n    height: 100%;\n    \n  }\n\n  .center {\n    position: relative;\n  }\n  #content{\n    -webkit-transform: translateY(0%);\n    transform: translateY(0%);\n  }\n\n  #content p {\n    margin: 30px auto;\n\n    font-size: 14px;\n  }\n\n  #content ul {\n    height: 100%;\n    top: 0px;\n  }\n\n  .inner-chevron{\n   \n    -webkit-transition: 0.35s;\n   \n    transition: 0.35s;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  .item input:checked{\n    -webkit-transition: 0.35s;\n    transition: 0.35s;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg)\n    }\n\n  #content ul li a {\n    color: #ffffff;\n    text-decoration: none;\n  }\n  #contentul li a span.far {\n    margin-right: 10px;\n  }\n  #content ul li a span {\n    text-transform: uppercase;\n  }\n\n}"; }
}

export { appMenu as app_menu };
