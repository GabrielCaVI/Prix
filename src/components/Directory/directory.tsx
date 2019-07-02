import { Component, Element, h, Prop, State } from '@stencil/core'

import {
    sortItemsByField
} from "../../utils/utils";

@Component({
    tag: 'prix-directory',
    styleUrl: 'directory.scss'
})
export class directory {
    @Element() el: HTMLElement;
    //Props
    /**
     * Common attributes
     */
    @Prop() data?: any = {};
    @Prop({ mutable: true }) configuration?: any = {};
    @Prop({ mutable: true }) styling?: any = {};
    /** 
    *   STATE
    */
    @State() internalItems = [];

    letterItems = [
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
    change = false;

    toggleSelection() {
        let selectAllBtn = document.getElementById('select-all') as HTMLInputElement; //Trigger Button
        let selectLabel = document.getElementById('select-all-label') as HTMLLabelElement; // Button Label
        let letterItems = document.getElementsByClassName('checkInput') as HTMLCollectionOf<HTMLInputElement>; // Collection of inputs
        let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>; // Collection of input labels

        if (selectAllBtn.checked) {
            selectLabel.innerHTML = 'Unselect all';
            for (let i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = true;
                items[i].style.display = "contents"; // display content of items

            }
        } else {
            selectLabel.innerHTML = 'All';
            for (let i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = false;
                items[i].style.display = ""; //remove display (default hidden)
            }
        }
    }

    filterByInput() {
        this.cleanFilters("check");
        var p; // the item header to be matched
        let searchbox = document.getElementById("searchbox") as HTMLInputElement // the searchbox element
        let filter = searchbox.value.toUpperCase() as string; // the typed filter
        let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>; //To hide the complete <div class=item>
        for (let i = 0; i < items.length; i++) { // iterate over labels to match input
            p = items[i].getElementsByTagName("p")[0].textContent || items[i].getElementsByTagName("p")[0].innerText;
            if (filter !== ' ' && p.toUpperCase().indexOf(filter[0]) > -1) { // if the current filter matches the item header, display it
                items[i].style.display = "contents";
                this.filterLinks(items[i], filter); // to filter the subitem list
            } else {
                items[i].style.display = "";
            }
        }
        this.change = true;
    }
    filterByCheckbox(check) {
        this.cleanFilters("input");
        let p;
        let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>;
        let checkboxes = Array.from(document.getElementsByClassName('checkInput') as HTMLCollectionOf<HTMLInputElement>);//Make an array to support 'some' method
        let selectAllBtn = document.getElementById('select-all') as HTMLInputElement;
        let selectLabel = document.getElementById('select-all-label') as HTMLLabelElement;
        if (checkboxes.some((box) => { return box.checked })) {
            selectLabel.innerHTML = "Unselect all"
            selectAllBtn.checked = true;
        } else {
            selectAllBtn.checked = false;
            selectLabel.innerHTML = 'All';
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
    componentWillLoad() {
        this.init();
        this.sortItems();
    }

    render() {
        const items = this.internalItems;
        return (
            <span>
                <div class="topnav">
                    <button class="prix-button" id="openModal" onClick={() => this.open()}>ABC</button>
                    <input type="checkbox" class="active" id="select-all" onClick={() => this.toggleSelection()} />
                    <label class="active" htmlFor="select-all" id="select-all-label">All</label>
                    <prix-modal acceptLabel="OK" canceLabel="Cancel">
                        <h1 slot="headerModal">Choose a letter</h1>
                        <div id="lettersModal" slot="bodyModal">
                            <ul id="lettersListMobile">
                                {this.letterItems.map((letter) => (
                                    <li class="pagnLinkMobile">
                                        <input type="checkbox" class="checkInputMobile" id={letter + ' '} onChange={() => this.filterByCheckbox(letter)}/>
                                        <label htmlFor={letter + ' '} class="checkLabelMobile">{letter + ' '}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </prix-modal>
                    <div class="search-container">
                        <input id="searchbox" type="text" placeholder="Search..." onInput={() => this.filterByInput()}/>
                    </div>
                    <div id="letters">
                        <ul id="lettersList">
                            {this.letterItems.map((letter) => (
                                <li class="pagnLink">
                                    <input type="checkbox" class="checkInput" id={letter} onChange={() => this.filterByCheckbox(letter)}/>
                                    <label htmlFor={letter} class="checkLabel">{letter}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div class="item-container">
                    {items.map((item) => (
                        <div class="item">
                            <p>{item.index}</p>
                            <div class="rule"></div>
                            <ul>
                                {item.content.map(contentItem => (
                                    <li><a href={contentItem.url}>{contentItem.title}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </span>
        )
    }
    private init() {
        this.sortItems();
        this.internalItems = this.data.items;
    }
    private sortItems() {
        const { sort } = this.configuration;
        const { direction, byField } = sort;
        const { items } = this.data;
        if (sort) {
            try {
                this.data.items = sortItemsByField(
                    items,
                    byField,
                    direction
                );
            } catch (e) {
                console.error(
                    "Oops something went wrong, please double check your sort property in your JSON configuration",
                    e
                );
            }
        }
    }
    private filterLinks(item, filter) {
        var a;
        let nodes = item.getElementsByTagName("a") as HTMLCollectionOf<HTMLAnchorElement>;
        for (let i = 0; i < nodes.length; i++) {
            a = nodes[i].textContent || nodes[i].innerText;
            if (a.toUpperCase().indexOf(filter) > -1) {
                nodes[i].style.display = "contents";
            } else {
                nodes[i].style.display = "none";
            }
        }
    }
    private cleanFilters(filter) {
        /**
         *  Method to avoid conflicts between both filters.
         */
        if (filter == "check") {
            let inputs = Array.from(document.getElementsByClassName('checkInput') as HTMLCollectionOf<HTMLInputElement>);
            let selectAllBtn = document.getElementById('select-all') as HTMLInputElement;
            let selectAllLabel = document.getElementById('select-all-label') as HTMLLabelElement;
            inputs.map((input) => {
                input.checked = false;
            })
            selectAllBtn.checked = false;
            selectAllLabel.innerText = 'All'
        } else {
            let searchbox = document.getElementById("searchbox") as HTMLInputElement // the searchbox element
            searchbox.value = null;
        }
        if (this.change){
            let items = Array.from(document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>);
            items.forEach((item) => {
                item.style.display = '';
            })
            this.change = false;
        }
    }
    private open(){
        var modal = document.querySelector("prix-modal");
        modal.showModal();
    }
}
