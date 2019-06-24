import { Component, Element, h, Prop, State } from '@stencil/core'
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
    @Prop() label: string;
    @Prop() canceLabel: string;
    @Prop() acceptLabel: string;
    @Prop({ mutable: true }) styling?: any = {};
    @State() value: string = this.label;



    ovelayOn() {
        let boton = document.getElementById('prix-boton')
        let cortina = document.getElementById('modal')
        let msg = document.getElementById('prix-box')

        boton.classList.toggle('overlay')

        cortina.style.display= "block"
        msg.style.display = 'block'

        if (boton.classList.contains('overlay')){
            boton.style.display="none"
        }


    }

    overlayOff() {
        let over = document.getElementById('modal')
        let boton = document.getElementById('prix-boton')
        let msg = document.getElementById('prix-box')

        boton.classList.toggle('overlay')

        if (!boton.classList.contains('overlay')){
            boton.style.display="block"
            
        }

        over.style.display ="none"
        msg.style.display="none"
    }


    render() {
        return [
            <div class="overlay" id="modal">
                <span class="dismiss" onClick={() => this.overlayOff()}><i class="fa fa-window-close" aria-hidden="true"></i></span>

                <div class ="prix-modal-box" id="prix-box">
                    <div class="prix-modal-message">
                        <p>{this.label}</p>
                        <button class="prix-modal-button" id="cancel" onClick={() => this.overlayOff()} >{this.canceLabel}</button> <button class="prix-modal-button" id="accept">{this.acceptLabel}</button>
                    </div>
                </div>

            </div>,
            <button class="prix-button" id="prix-boton" onClick={() => this.ovelayOn()} >{this.value}</button>,

        ]
    }



}
