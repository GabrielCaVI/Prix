import { Component, Element, h, Prop} from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.css'
})
export class Modal {
    @Element() el: HTMLElement;
    //Props
    /**
     * Common attributes
     */
    @Prop() data?: any = {};
    @Prop({ mutable: true }) configuration?: any = {};
    @Prop({ mutable: true }) styling?: any = {};



    toggleOverlay() {
        let over = document.getElementById('overlay')
        let pop = document.getElementById('pop')
        over.classList.toggle('on')

        if (over.classList.contains('on')) {
            over.style.display = "block"
            pop.style.display ="block"
        }
    }



    off(){
        let over = document.getElementById('overlay')
        over.style.display = "none"
        over.classList.toggle('on')
    }


    render() {
        return [
                <div id="overlay" onClick={() => this.off()}></div>,

                <button onClick={() => this.toggleOverlay()}>hey</button>,

                <div id="pop">
                    <h1>hey</h1>
                </div>
        ]
    }



}
