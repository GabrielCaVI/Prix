'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-9e9a7e58.js');

class multiLevel {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("div", { id: "menu" }, __chunk_1.h("div", { id: "bg-opacity" }), __chunk_1.h("div", { id: "wrapper", class: "center" }, __chunk_1.h("button", { id: "openButton", onClick: () => this.handleToggle(), class: "float hide noselect" }, __chunk_1.h("div", { class: "chevron" })), __chunk_1.h("div", { id: "inner-menu", class: "" }, __chunk_1.h("span", { id: "dark" }, "  ", __chunk_1.h("button", { id: "dark", onClick: () => this.darkTheme() }, __chunk_1.h("i", { class: "fas fa-moon" })), " "), __chunk_1.h("div", { id: "content", class: "hide center" }, __chunk_1.h("p", null, this.value), items.map((item) => (__chunk_1.h("div", { class: "item" }, __chunk_1.h("input", { type: "checkbox", id: item.title, value: item.title }), __chunk_1.h("label", { htmlFor: item.title }, item.title, " ", __chunk_1.h("span", { class: "fas fa-chevron-right arrow" })), __chunk_1.h("ul", null, item.levels.map((level) => (__chunk_1.h("div", { class: "item submenu" }, __chunk_1.h("input", { type: "checkbox", id: level.title, value: level.title }), __chunk_1.h("label", { htmlFor: level.title }, level.title, " ", __chunk_1.h("span", { class: "fas fa-chevron-right arrow" })), __chunk_1.h("ul", null, level.options.map((option) => (__chunk_1.h("li", null, __chunk_1.h("a", { href: option.url }, __chunk_1.h("span", null, option.title))))))))), item.options.map((option) => (__chunk_1.h("li", null, __chunk_1.h("a", { href: option.url }, __chunk_1.h("span", null, option.title))))))))), __chunk_1.h("div", { class: "help22", id: "help" }, __chunk_1.h("ul", null, __chunk_1.h("li", null, __chunk_1.h("a", { href: "#" }, __chunk_1.h("span", { class: "far" }), "Help Center")))))))));
    }
    static get style() { return "\@charset \"UTF-8\";body{font-family:Lato}*{padding:0;margin:0}.noselect{outline:none;border-style:none}.hide{display:none}.float{position:fixed;width:80px;height:80px;top:50px;color:#fff;border-radius:120px;z-index:9999;-webkit-box-shadow:-3px -16px 48px -15px rgba(0,0,0,.42);-moz-box-shadow:-3px -16px 48px -15px rgba(0,0,0,.42);box-shadow:-3px -16px 48px -15px rgba(0,0,0,.42);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.transition{transition:-webkit-transform .35s cubic-bezier(.24,1,.32,1),visibility 0s;-webkit-transition:visibility 0s,-webkit-transform .35s cubic-bezier(.24,1,.32,1);transition:visibility 0s,-webkit-transform .35s cubic-bezier(.24,1,.32,1);transition:transform .35s cubic-bezier(.24,1,.32,1),visibility 0s;transition:transform .35s cubic-bezier(.24,1,.32,1),visibility 0s,-webkit-transform .35s cubic-bezier(.24,1,.32,1)}.chevron{display:block;margin:auto;background-repeat:no-repeat;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAAE79V5PAAAABGdBTUEAALGPC/xhBQAAAdBJREFUSA2llTtLA0EQx42CbyEWamNSCVainYWVxF7FRhD8AFbBwsoPYBcUKz+Ahdhai9gIWonYCDYqgigYEF+YxN9cdo69vb1cQhaGmfk/Zo7ccuno8J1a/XzFOPCFGBgAxlLTpuyXgUaUtsol6E8MlrV1MmEoAmgDkTWOa8WCDLhqiILJn0qcGaBXHaavdQJcZurnW0lptfZm3Hkz4dkr8IEYpnStk+98+gBDWHLEeRWD3ztc/bEBly2iqgZfRrdtaSs+TYghHAybVgqMH2ZL9DWnDcH0YIya+tM8AY/6UR1Onmg4APGPZShTr1i9lIuxAYAZR3SrIvBJh9tRTq653mbVHIekKSAGlDT5NKBoqhax5Rrt3tJJuaQDpCnYwqQanfwWpSQ+Fcc8Q8g9eCXGUw3tClgySshTu0euRl+782N+huaIG3ebp78AG4kNaBVgyDzx7lkg0B9RSeBewGdb3SfXdZOwb509/4lmWodSzxFvtsCq5cE2VOvNCHqII8vklucAw14zINwYceWarP6Qujv006S9vz008p/R1EHbRRwQSUfuSi4YRlF0VPIdWmtqUwMRM9aJX2d2MWKBlO/XLhG+v4igjUZmEvtE+Mv9A1JJWhptGVPRAAAAAElFTkSuQmCC\");-webkit-transform:rotate(90deg);transform:rotate(90deg)}#dark,.chevron{width:30px;height:20px}#dark{margin:2%;margin-bottom:0;background-color:transparent;border:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#dark,#dark i{-ms-flex-line-pack:center;align-content:center}#dark i{color:#fff;font-size:200%}.transition.chevron{-webkit-transition:.35s;transition:.35s}.toggle>.chevron{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.toggle.transition>.chevron{-webkit-transition:.35s;transition:.35s}.toggle,.toggle-inner-menu{-webkit-transform:translateX(30vw) translateX(-34px);transform:translateX(30vw) translateX(-34px)}#inner-menu,#openButton{background-color:#e20177}#inner-menu.dark,#openButton.dark{background-color:#a020f0}#openButton{top:50%}#inner-menu{border-top:5px;position:fixed;left:calc(-30vw + 34px);top:0;border-right:1px solid rgba(0,0,0,.14);width:30vw;height:100%;z-index:999;max-height:calc(100vh + 5rem);overflow-y:auto}.arrow{padding-left:5%}#content{overflow-x:hidden}.submenu{margin-left:40px}#content{-webkit-transform:translateX(-20%);transform:translateX(-20%);margin-left:20px;height:100%;left:10%}.center{position:relative}#content p{margin:50px auto;color:#fff;font-size:12px;font-family:arial;text-transform:uppercase;text-align:center}#content ul{margin:auto;vertical-align:middle;list-style:none;position:relative;height:100%;top:20%}#content ul li{display:block}#content input,#content ul li{width:90%;margin-bottom:5px;text-align:center;padding:5px 10px}#content input{display:none}#content .item label{display:block;width:90%;color:#fff;margin-bottom:5px;text-align:left;margin-left:15%;padding:5px 10px}.content .item .submenu{margin-left:30%}#help ul li:last-child{border:1px solid hsla(0,0%,100%,.9);border-radius:4px;width:80%;background:hsla(0,0%,100%,.3);margin:10%}#content ul li a{color:#fff;text-decoration:none;animation:rota 3s ease-in .3s 2 reverse forwards}#contentul li a span.far{margin-right:10px}#content ul li a span{text-transform:uppercase}.item input[type=checkbox]{display:none;z-index:10}.item ul{display:none}.item input:checked~ul{display:block;-webkit-transition:.35s;transition:.35s;-webkit-animation:menu3 .3s ease-in-out forwards;animation:menu3 .3s ease-in-out forwards}.item input:checked~label span{-webkit-transition:.35s;transition:.35s;-webkit-transform:rotate(90deg);transform:rotate(90deg);padding:5% 2%}.item input:not(:checked)~label span{-webkit-transition:.35s;transition:.35s;-webkit-transform:rotate(0deg);transform:rotate(0deg);padding-left:5%}.item input:checked{-webkit-transition:.35s;transition:.35s;-webkit-transform:rotate(180deg) translateY(-25px);transform:rotate(180deg) translateY(-25px);margin-inline:2px}\@-webkit-keyframes menu3{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1%;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}\@keyframes menu3{0%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1%;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}\@media (min-width:601fpx) and (max-width:960px){#inner-menu{left:calc(-35vw + 34px);width:35vw;height:100%;max-height:calc(100vh - 9rem);overflow-y:auto}.toggle,.toggle-inner-menu{-webkit-transform:translateX(35vw) translateX(-34px);transform:translateX(35vw) translateX(-34px)}#content{border-left:30%;left:7%}}\@media (max-width:600px){#openButton{background-color:#e20177;top:85%}.float{bottom:0;right:20px;top:auto}.chevron{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.toggle{-webkit-transform:translateY(-80vh);transform:translateY(-80vh)}.toggle-inner-menu{-webkit-transform:translateY(-40vh) translateY(-60px);transform:translateY(-40vh) translateY(-60px)}.toggle>.chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}#inner-menu{top:auto;left:0;bottom:-80%;margin:0;border-right:1px solid rgba(0,0,0,.14);height:80%;width:100%;max-height:calc(100vh - 9rem);overflow-y:auto}#content{left:0;height:100%}.center{position:relative}#content{-webkit-transform:translateY(0);transform:translateY(0)}#content p{margin:30px auto;font-size:14px}#content ul{height:100%;top:0}.inner-chevron{-webkit-transition:.35s;transition:.35s;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.item input:checked{-webkit-transition:.35s;transition:.35s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}#content ul li a{color:#fff;text-decoration:none}#contentul li a span.far{margin-right:10px}#content ul li a span{text-transform:uppercase}#help{-ms-flex-line-pack:center;align-content:center;margin-right:2%}}"; }
}

exports.prix_multi_level = multiLevel;
