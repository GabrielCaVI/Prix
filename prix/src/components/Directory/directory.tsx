import { Component, Element, h, Prop, State} from '@stencil/core'

import {
  sortItemsByField
} from "../../utils/utils";

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

    init(){
        this.sortItems();
        this.internalItems = this.data.items;
    }
    componentWillLoad(){
        this.init();
    }

    render(){
        const items = this.internalItems;
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
                                    <input type ="checkbox" class="checkInput" id="#"/>
                                    <label htmlFor="#" class="checkLabel">#</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="A"/>
                                    <label htmlFor="A" class="checkLabel">A</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="B"/>
                                    <label htmlFor="B" class="checkLabel">B</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="C"/>
                                    <label htmlFor="C" class="checkLabel">C</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="D"/>
                                    <label htmlFor="D" class="checkLabel">D</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="E"/>
                                    <label htmlFor="E" class="checkLabel">E</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="F"/>
                                    <label htmlFor="F" class="checkLabel">F</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="G"/>
                                    <label htmlFor="G" class="checkLabel">G</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="H"/>
                                    <label htmlFor="H" class="checkLabel">H</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="I"/>
                                    <label htmlFor="I" class="checkLabel">I</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="J"/>
                                    <label htmlFor="J" class="checkLabel">J</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="K"/>
                                    <label htmlFor="K" class="checkLabel">K</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="L"/>
                                    <label htmlFor="L" class="checkLabel">L</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="M"/>
                                    <label htmlFor="M" class="checkLabel">M</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="N"/>
                                    <label htmlFor="N" class="checkLabel">N</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="O"/>
                                    <label htmlFor="O" class="checkLabel">O</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="P"/>
                                    <label htmlFor="P" class="checkLabel">P</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="Q"/>
                                    <label htmlFor="Q" class="checkLabel">Q</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="R"/>
                                    <label htmlFor="R" class="checkLabel">R</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="S"/>
                                    <label htmlFor="S" class="checkLabel">S</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="T"/>
                                    <label htmlFor="T" class="checkLabel">T</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="U"/>
                                    <label htmlFor="U" class="checkLabel">U</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="V"/>
                                    <label htmlFor="V" class="checkLabel">V</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="W"/>
                                    <label htmlFor="W" class="checkLabel">W</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="X"/>
                                    <label htmlFor="X" class="checkLabel">X</label>
                                </span>
                                <span class="pagnLink">
                                    <input type ="checkbox" class="checkInput" id="Y"/>
                                    <label htmlFor="Y" class="checkLabel">Y</label>
                                </span>
                                <span class="pagnLink">

                                    <input type ="checkbox" class="checkInput" id="Z"/>
                                    <label htmlFor="Z" class="checkLabel">Z</label>
                                </span>
                            </div>
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
                <div class="topnav-tablet">
                    <div>

                    </div>
                </div>
                <div class="topnav-mobile">

                </div>
            </span>
        )
    }

    sortItems() {
      const { sort } = this.configuration;
      const { direction, byField } = sort;
      const { content } = this.data.items;

      try {
        this.data.items.content = sortItemsByField(
          content,
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
