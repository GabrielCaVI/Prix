import { Component, Element,  h, Prop} from '@stencil/core'
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


    ovelayOn(){
    let boton =   document.getElementById('boton')
    let cortina = document.getElementById('modal')

    boton.classList.toggle('overlay')

    if (boton.classList.contains('overlay')){
       cortina.style.display = "block"
    }

        
    }
  



    overlayOff(){
        let over = document.getElementById('modal')
        over.style.display = "none"
        over.classList.toggle('on')
    }


    render() {
        return [
                <div class= "overlay" id="modal">
                    <span class="dismiss" onClick={() => this.overlayOff()}><i class="fa fa-window-close" aria-hidden="true"></i></span>
                </div>,
                <button id="boton" onClick={() => this.ovelayOn()} >hey</button>,

                
        ]
    }



}
