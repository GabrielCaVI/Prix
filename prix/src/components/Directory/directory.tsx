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
    /* allSelected(list){
        let all = true;
        for (var i = 0; i < list.length; i++) {
            if(list[i].checked = false){
                all = false;
            }
        }
        return all;
    } */
  

   

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
    
    init(){
        this.sortItems();
        this.internalItems = this.data.items;
    }
    componentWillLoad() {
        this.init();
    }

    render() {
        const items = this.internalItems;
        // var show = false;
        return (
            <span>
                <div class="container-lg">
                    <div class="topnav">
                        <input type="checkbox" class="active" id="select-all" onClick={() => this.toggleSelection()} />
                        <label class="active" htmlFor="select-all" id="select-all-label">All Items</label>
                         <prix-modal canceLabel="Cancel" acceptLabel="Done" label="ABC" id="showGrid"></prix-modal>
                        <div class="search-container">
                            <input id="searchbox" type="text" placeholder="Search..." onKeyUp={() => this.filterByInput()} />
                        </div>
                            <div id="letters">
                                <ul id="lettersList">
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="#" onChange={() => this.filterByCheckbox("#")}/>
                                        <label htmlFor="#" class="checkLabel">#</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="A" onChange={() => this.filterByCheckbox("A")}/>
                                        <label htmlFor="A" class="checkLabel">A</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="B" onChange={() => this.filterByCheckbox("B")}/>
                                        <label htmlFor="B" class="checkLabel">B</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="C" onChange={() => this.filterByCheckbox("C")}/>
                                        <label htmlFor="C" class="checkLabel">C</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="D" onChange={() => this.filterByCheckbox("D")}/>
                                        <label htmlFor="D" class="checkLabel">D</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="E" onChange={() => this.filterByCheckbox("E")}/>
                                        <label htmlFor="E" class="checkLabel">E</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="F" onChange={() => this.filterByCheckbox("F")}/>
                                        <label htmlFor="F" class="checkLabel">F</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="G" onChange={() => this.filterByCheckbox("G")}/>
                                        <label htmlFor="G" class="checkLabel">G</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="H" onChange={() => this.filterByCheckbox("H")}/>
                                        <label htmlFor="H" class="checkLabel">H</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="I" onChange={() => this.filterByCheckbox("I")}/>
                                        <label htmlFor="I" class="checkLabel">I</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="J" onChange={() => this.filterByCheckbox("J")}/>
                                        <label htmlFor="J" class="checkLabel">J</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="K" onChange={() => this.filterByCheckbox("K")}/>
                                        <label htmlFor="K" class="checkLabel">K</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="L" onChange={() => this.filterByCheckbox("L")}/>
                                        <label htmlFor="L" class="checkLabel">L</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="M" onChange={() => this.filterByCheckbox("M")}/>
                                        <label htmlFor="M" class="checkLabel">M</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="N" onChange={() => this.filterByCheckbox("N")}/>
                                        <label htmlFor="N" class="checkLabel">N</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="O" onChange={() => this.filterByCheckbox("O")}/>
                                        <label htmlFor="O" class="checkLabel">O</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="P" onChange={() => this.filterByCheckbox("P")}/>
                                        <label htmlFor="P" class="checkLabel">P</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="Q" onChange={() => this.filterByCheckbox("Q")}/>
                                        <label htmlFor="Q" class="checkLabel">Q</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="R" onChange={() => this.filterByCheckbox("R")}/>
                                        <label htmlFor="R" class="checkLabel">R</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="S" onChange={() => this.filterByCheckbox("S")}/>
                                        <label htmlFor="S" class="checkLabel">S</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="T" onChange={() => this.filterByCheckbox("T")}/>
                                        <label htmlFor="T" class="checkLabel">T</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="U" onChange={() => this.filterByCheckbox("U")}/>
                                        <label htmlFor="U" class="checkLabel">U</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="V" onChange={() => this.filterByCheckbox("V")}/>
                                        <label htmlFor="V" class="checkLabel">V</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="W" onChange={() => this.filterByCheckbox("W")}/>
                                        <label htmlFor="W" class="checkLabel">W</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="X" onChange={() => this.filterByCheckbox("X")}/>
                                        <label htmlFor="X" class="checkLabel">X</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="Y" onChange={() => this.filterByCheckbox("Y")}/>
                                        <label htmlFor="Y" class="checkLabel">Y</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="Z" onChange={() => this.filterByCheckbox("Z")}/>
                                        <label htmlFor="Z" class="checkLabel">Z</label>
                                    </li>
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
