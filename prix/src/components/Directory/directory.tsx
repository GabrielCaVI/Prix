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
        let selectAllBtn = document.getElementById('select-all') as HTMLInputElement;
        let selectLabel = document.getElementById('select-all-label') as HTMLLabelElement;
        let letterItems = document.getElementsByClassName('checkInput') as HTMLCollectionOf<HTMLInputElement>;
        if (selectAllBtn.checked) {
            selectLabel.innerHTML = 'Unselect all';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = true;
            }
        } else {
            selectLabel.innerHTML = 'All items';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = false;
            }
        }
    }
    toggleModal() {
       
    }

    filterByInput(){
        let input = document.getElementById("searchbox") as HTMLInputElement
        let filterString = input.value.toUpperCase() as string;
        let letters = document.getElementsByClassName("") as HTMLCollectionOf<HTML>
        // Declare variables 
        /* var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");

        // Loop through all table rows, and hide those who don't match the search query
         for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            } 
        } */
    }
    filterByCheckbox(){

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
                        <button id="showGrid">ABC</button>
                        <input type="checkbox" class="active" id="select-all" onClick={() => this.toggleSelection()} />
                        <label class="active" htmlFor="select-all" id="select-all-label">All Items</label>
                        <div class="search-container">
                            <input id="searchbox" type="text" placeholder="Search..." onKeyDown={() => this.filterByInput()} />
                        </div>

                            <div id="letters">
                            <prix-modal></prix-modal>
                                <ul id="lettersList">
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="#" />
                                        <label htmlFor="#" class="checkLabel">#</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="A" />
                                        <label htmlFor="A" class="checkLabel">A</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="B" />
                                        <label htmlFor="B" class="checkLabel">B</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="C" />
                                        <label htmlFor="C" class="checkLabel">C</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="D" />
                                        <label htmlFor="D" class="checkLabel">D</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="E" />
                                        <label htmlFor="E" class="checkLabel">E</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="F" />
                                        <label htmlFor="F" class="checkLabel">F</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="G" />
                                        <label htmlFor="G" class="checkLabel">G</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="H" />
                                        <label htmlFor="H" class="checkLabel">H</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="I" />
                                        <label htmlFor="I" class="checkLabel">I</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="J" />
                                        <label htmlFor="J" class="checkLabel">J</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="K" />
                                        <label htmlFor="K" class="checkLabel">K</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="L" />
                                        <label htmlFor="L" class="checkLabel">L</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="M" />
                                        <label htmlFor="M" class="checkLabel">M</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="N" />
                                        <label htmlFor="N" class="checkLabel">N</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="O" />
                                        <label htmlFor="O" class="checkLabel">O</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="P" />
                                        <label htmlFor="P" class="checkLabel">P</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="Q" />
                                        <label htmlFor="Q" class="checkLabel">Q</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="R" />
                                        <label htmlFor="R" class="checkLabel">R</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="S" />
                                        <label htmlFor="S" class="checkLabel">S</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="T" />
                                        <label htmlFor="T" class="checkLabel">T</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="U" />
                                        <label htmlFor="U" class="checkLabel">U</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="V" />
                                        <label htmlFor="V" class="checkLabel">V</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="W" />
                                        <label htmlFor="W" class="checkLabel">W</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="X" />
                                        <label htmlFor="X" class="checkLabel">X</label>
                                    </li>
                                    <li class="pagnLink">
                                        <input type="checkbox" class="checkInput" id="Y" />
                                        <label htmlFor="Y" class="checkLabel">Y</label>
                                    </li>
                                    <li class="pagnLink">

                                        <input type="checkbox" class="checkInput" id="Z" />
                                        <label htmlFor="Z" class="checkLabel">Z</label>
                                    </li>

                                </ul>
                            </div>
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
    sortItems() {
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
}
