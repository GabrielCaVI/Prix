import { h } from '@stencil/core';
import { sortItemsByField } from "../../utils/utils";
export class directory {
    constructor() {
        //Props
        /**
         * Common attributes
         */
        this.data = {};
        this.configuration = {};
        this.styling = {};
        /**
        *   STATE
        */
        this.internalItems = [];
        this.letterItems = [
            "#",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "Ñ",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ];
        this.letterItemsMobile = [
            "A",
            "E",
            "I",
            "M",
            "Q",
            "U",
            "Y",
            "B",
            "F",
            "J",
            "N",
            "R",
            "V",
            "Z",
            "C",
            "G",
            "K",
            "O",
            "S",
            "W",
            "#",
            "D",
            "H",
            "L",
            "P",
            "T",
            "X"
        ];
    }
    toggleSelection() {
        let selectAllBtn = document.getElementById('select-all');
        let selectLabel = document.getElementById('select-all-label');
        let letterItems = document.getElementsByClassName('checkInput');
        let items = document.getElementsByClassName("item");
        if (selectAllBtn.checked) {
            selectLabel.innerHTML = 'Unselect all';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = true;
                items[i].style.display = "contents";
            }
        }
        else {
            selectLabel.innerHTML = 'All items';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = false;
                items[i].style.display = "";
            }
        }
    }
    filterByInput() {
        var p;
        let searchbox = document.getElementById("searchbox"); // the searchbox element
        let filter = searchbox.value.toUpperCase(); // the typed filter
        let items = document.getElementsByClassName("item"); //To hide the complete <div class=item>
        for (let i = 0; i < items.length; i++) { // iterate over labels to match input
            p = items[i].getElementsByTagName("p")[0].textContent || items[i].getElementsByTagName("p")[0].innerText;
            if (p.toUpperCase().indexOf(filter[0]) > -1) {
                items[i].style.display = "contents";
                this.filterLinks(items[i], filter);
            }
            else {
                items[i].style.display = "";
            }
        }
    }
    filterByCheckbox(check) {
        var p;
        let items = document.getElementsByClassName("item");
        let checkboxes = document.getElementsByClassName('checkInput');
        let selectAllBtn = document.getElementById('select-all');
        let selectLabel = document.getElementById('select-all-label');
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                selectLabel.innerHTML = "Unselect all";
                selectAllBtn.checked = true;
            }
            else {
                selectAllBtn.checked = false;
                selectLabel.innerHTML = 'All items';
            }
        }
        for (let i = 0; i < items.length; i++) {
            p = items[i].getElementsByTagName("p")[0].textContent || items[i].getElementsByTagName("p")[0].innerText;
            if (p.toUpperCase().indexOf(check) > -1) {
                items[i].style.display = items[i].style.display === '' ? 'contents' : '';
            }
        }
    }
    /**
    * Lifecycle methods
    */
    init() {
        this.sortItems();
        this.internalItems = this.data.items;
    }
    componentWillLoad() {
        this.init();
        this.sortItems();
    }
    render() {
        const items = this.internalItems;
        return (h("span", null,
            h("div", { class: "container-lg" },
                h("div", { class: "topnav" },
                    h("input", { type: "checkbox", class: "active", id: "select-all", onClick: () => this.toggleSelection() }),
                    h("label", { class: "active", htmlFor: "select-all", id: "select-all-label" }, "All Items"),
                    h("prix-modal", { canceLabel: "Cancel", acceptLabel: "Done", label: "ShowModal", id: "showGrid" },
                        h("div", { id: "lettersModal", slot: "content" },
                            h("ul", { id: "lettersListMobile" }, this.letterItemsMobile.map((letter) => (h("li", { class: "pagnLink" },
                                h("input", { type: "checkbox", class: "checkInput", id: letter + ' ', onChange: () => this.filterByCheckbox(letter) }),
                                h("label", { htmlFor: letter + ' ', class: "checkLabel" }, letter + ' '))))))),
                    h("div", { class: "search-container" },
                        h("input", { id: "searchbox", type: "text", placeholder: "Search...", onKeyUp: () => this.filterByInput() })),
                    h("div", { id: "letters" },
                        h("ul", { id: "lettersList" }, this.letterItems.map((letter) => (h("li", { class: "pagnLink" },
                            h("input", { type: "checkbox", class: "checkInput", id: letter, onChange: () => this.filterByCheckbox(letter) }),
                            h("label", { htmlFor: letter, class: "checkLabel" }, letter))))))),
                h("div", { class: "item-container" }, items.map((item) => (h("div", { class: "item" },
                    h("p", null, item.index),
                    h("div", { class: "rule" }),
                    h("ul", null, item.content.map(contentItem => (h("li", null,
                        h("a", { href: contentItem.url }, contentItem.title))))))))))));
    }
    sortItems() {
        const { sort } = this.configuration;
        const { direction, byField } = sort;
        const { items } = this.data;
        if (sort) {
            try {
                this.data.items = sortItemsByField(items, byField, direction);
            }
            catch (e) {
                console.error("Oops something went wrong, please double check your sort property in your JSON configuration", e);
            }
        }
    }
    filterLinks(item, filter) {
        var a;
        let nodes = item.getElementsByTagName("a");
        for (let i = 0; i < nodes.length; i++) {
            a = nodes[i].textContent || nodes[i].innerText;
            if (a.toUpperCase().indexOf(filter) > -1) {
                console.log(nodes[i]);
                nodes[i].style.display = "contents";
            }
            else {
                nodes[i].style.display = "none";
            }
        }
    }
    static get is() { return "prix-directory"; }
    static get originalStyleUrls() { return {
        "$": ["directory.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["directory.css"]
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
        "internalItems": {}
    }; }
    static get elementRef() { return "el"; }
}
