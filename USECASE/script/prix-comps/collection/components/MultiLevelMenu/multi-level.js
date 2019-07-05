import { h } from '@stencil/core';
export class multiLevel {
    constructor() {
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
        return (h("div", { id: "menu" },
            h("div", { id: "bg-opacity" }),
            h("div", { id: "wrapper", class: "center" },
                h("button", { id: "openButton", onClick: () => this.handleToggle(), class: "float hide noselect" },
                    h("div", { class: "chevron" })),
                h("div", { id: "inner-menu", class: "" },
                    h("span", { id: "dark" },
                        "  ",
                        h("button", { id: "dark", onClick: () => this.darkTheme() },
                            h("i", { class: "fas fa-moon" })),
                        " "),
                    h("div", { id: "content", class: "hide center" },
                        h("p", null, this.value),
                        items.map((item) => (h("div", { class: "item" },
                            h("input", { type: "checkbox", id: item.title, value: item.title }),
                            h("label", { htmlFor: item.title },
                                item.title,
                                " ",
                                h("span", { class: "fas fa-chevron-right arrow" })),
                            h("ul", null,
                                item.levels.map((level) => (h("div", { class: "item submenu" },
                                    h("input", { type: "checkbox", id: level.title, value: level.title }),
                                    h("label", { htmlFor: level.title },
                                        level.title,
                                        " ",
                                        h("span", { class: "fas fa-chevron-right arrow" })),
                                    h("ul", null, level.options.map((option) => (h("li", null,
                                        h("a", { href: option.url },
                                            h("span", null, option.title))))))))),
                                item.options.map((option) => (h("li", null,
                                    h("a", { href: option.url },
                                        h("span", null, option.title))))))))),
                        h("div", { class: "help22", id: "help" },
                            h("ul", null,
                                h("li", null,
                                    h("a", { href: "#" },
                                        h("span", { class: "far" }),
                                        "Help Center")))))))));
    }
    static get is() { return "prix-multi-level"; }
    static get originalStyleUrls() { return {
        "$": ["multi-level.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["multi-level.css"]
    }; }
    static get properties() { return {
        "message": {
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
            "attribute": "message",
            "reflect": false
        },
        "color": {
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
            "attribute": "color",
            "reflect": false
        },
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
                "text": ""
            },
            "attribute": "data",
            "reflect": false,
            "defaultValue": "{}"
        },
        "dark": {
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
            "attribute": "dark",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "value": {},
        "colour": {},
        "internalItems": {}
    }; }
}
