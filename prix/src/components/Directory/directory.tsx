import { Component, Element, h, Prop, State } from '@stencil/core'

import {
    sortItemsByField
} from "../../utils/utils";

@Component({
    tag: 'prix-directory',
    styleUrl: 'directory.scss'
})
export class Directory {
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
    letterItemsMobile = [
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

    toggleSelection() {
        var txt;
        let selectAllBtn = document.getElementById('select-all') as HTMLInputElement;
        let selectLabel = document.getElementById('select-all-label') as HTMLLabelElement;
        let letterItems = document.getElementsByClassName('checkInput') as HTMLCollectionOf<HTMLInputElement>;
        let letterLabels = document.getElementsByClassName('checkLabel') as HTMLCollectionOf<HTMLLabelElement>;
        if (selectAllBtn.checked) {
            selectLabel.innerHTML = 'Unselect all';
            for (var i = 0; i < letterItems.length; i++) {
                txt = letterLabels[i].textContent || letterLabels[i].innerText;
                letterItems[i].checked = true;
                this.filterByCheckbox(txt);
            }
        } else {
            selectLabel.innerHTML = 'All items';
            for (var i = 0; i < letterItems.length; i++) {txt = letterLabels[i].textContent || letterLabels[i].innerText;
                letterItems[i].checked = false;
                this.filterByCheckbox(txt);
            }
        }
    }


    filterByInput(){
        var p;
        let searchbox = document.getElementById("searchbox") as HTMLInputElement // the searchbox element
        let filter = searchbox.value.toUpperCase() as string; // the typed filter
        let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>; //To hide the complete <div class=item>
        for(let i = 0; i < items.length; i++){ // iterate over labels to match input
            p = items[i].getElementsByTagName("p")[0].textContent || items[i].getElementsByTagName("p")[0].innerText;
            if(p.toUpperCase().indexOf(filter) > -1){
                items[i].style.display = "none"
                this.filterLinks();
            }else{
                items[i].style.display = "";
            }
        }
    }
    filterByCheckbox(check){
        var p;
        let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLDivElement>;
        for(let i = 0; i < items.length; i++){
            p = items[i].getElementsByTagName("p")[0].textContent || items[i].getElementsByTagName("p")[0].innerText;
            if(p.toUpperCase().indexOf(check) > -1){
                items[i].style.display = items[i].style.display===''? 'none': '';
            }
        }
    }
    toggleModal(){
        
    }
    
    init(){
        this.sortItems();
        this.internalItems = this.data.items;
    }
    componentWillLoad() {
        this.init();
    }

    render() {
        const items = this.internalItems;
        return (
            <span>
                <div class="container-lg">
                    <div class="topnav">
                        <button onClick={}> show modal</button>
                        <input type="checkbox" class="active" id="select-all" onClick={() => this.toggleSelection()} />
                        <label class="active" htmlFor="select-all" id="select-all-label">All Items</label>
                        <prix-modal  canceLabel="Cancel" acceptLabel="Done" label="ShowModal" id="showGrid">
                            <div id="lettersModal" slot="content">
                                <ul id="lettersListMobile">
                                    {this.letterItemsMobile.map((letter) => (
                                        <li class="pagnLink">
                                            <input type="checkbox" class="checkInput" id={letter+' '} onChange={() => this.filterByCheckbox(letter)}/>
                                            <label htmlFor={letter+' '} class="checkLabel">{letter+' '}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </prix-modal>
                        <div class="search-container">
                            <input id="searchbox" type="text" placeholder="Search..." onKeyUp={() => this.filterByInput()} />
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
                </div>
            </span>
        )
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
    private filterLinks(){

    }
}
