import { Component, Element, h, Prop} from '@stencil/core';
@Component({
    tag: 'prix-directory',
    styleUrl: 'directory.scss'
})
export class Directory{
    @Element() el: HTMLElement;
    //Props
    /**
     * Common attributes
     */
    @Prop() data?: any = {};

    @Prop({ mutable: true }) configuration?: any = {};

    /* allSelected(list){
        let all = true;
        for (var i = 0; i < list.length; i++) {
            if(list[i].checked = false){
                all = false;
            }
        }
        return all;
    } */

    toggleSelection(){
        let selectAllBtn = document.getElementById('select-all') as any;
        let selectLabel = document.getElementById('select-all-label') as HTMLLabelElement;
        let letterItems = document.getElementsByClassName('checkInput') as any;
        if (selectAllBtn.checked){
            selectLabel.innerHTML = 'Unselect all';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = true;
            }
        }else{
            selectLabel.innerHTML = 'All items';
            for (var i = 0; i < letterItems.length; i++) {
                letterItems[i].checked = false;
            }
        }
    }

    render(){
        return (
            <span>
                <div class="topnav">
                    <input type="checkbox" class="active" id="select-all" onClick={()=> this.toggleSelection()}/>
                    <label class="active" htmlFor="select-all" id="select-all-label">All Items</label>
                    <div class = "search-container">
                        <input type="text" placeholder="Search..."/>
                        <button type="button"><i class="fas fa-search"></i></button>
                    </div>
                    <div id="indexBarHeader" class="a-row a-spacing-none s-see-all-refinement-header">
                        <div class="a-colum a-span12 a-text-center">
                            <div class="a-row a-spacing-none pagn">
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="#"></input>
                                    <label htmlFor="#" class="checkLabel">#</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="A"></input>
                                    <label htmlFor="A" class="checkLabel">A</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="B"></input>
                                    <label htmlFor="B" class="checkLabel">B</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="C"></input>
                                    <label htmlFor="C" class="checkLabel">C</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="D"></input>
                                    <label htmlFor="D" class="checkLabel">D</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="E"></input>
                                    <label htmlFor="E" class="checkLabel">E</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="F"></input>
                                    <label htmlFor="F" class="checkLabel">F</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="G"></input>
                                    <label htmlFor="G" class="checkLabel">G</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="H"></input>
                                    <label htmlFor="H" class="checkLabel">H</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="I"></input>
                                    <label htmlFor="I" class="checkLabel">I</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="J"></input>
                                    <label htmlFor="J" class="checkLabel">J</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="K"></input>
                                    <label htmlFor="K" class="checkLabel">K</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="L"></input>
                                    <label htmlFor="L" class="checkLabel">L</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="M"></input>
                                    <label htmlFor="M" class="checkLabel">M</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="N"></input>
                                    <label htmlFor="N" class="checkLabel">N</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="O"></input>
                                    <label htmlFor="O" class="checkLabel">O</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="P"></input>
                                    <label htmlFor="P" class="checkLabel">P</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="Q"></input>
                                    <label htmlFor="Q" class="checkLabel">Q</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="R"></input>
                                    <label htmlFor="R" class="checkLabel">R</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="S"></input>
                                    <label htmlFor="S" class="checkLabel">S</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="T"></input>
                                    <label htmlFor="T" class="checkLabel">T</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="U"></input>
                                    <label htmlFor="U" class="checkLabel">U</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="V"></input>
                                    <label htmlFor="V" class="checkLabel">V</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="W"></input>
                                    <label htmlFor="W" class="checkLabel">W</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="X"></input>
                                    <label htmlFor="X" class="checkLabel">X</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="Y"></input>
                                    <label htmlFor="Y" class="checkLabel">Y</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="Z"></input>
                                    <label htmlFor="Z" class="checkLabel">Z</label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p>A</p>
                <div class="rule"></div>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                <p>B</p>
                <div class="rule"></div>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                <p>C</p>
                <div class="rule"></div>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                    <p>D</p>
                <div class="rule"></div>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
            </span>
        )
    }
}