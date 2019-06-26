import { Component, Prop, h } from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.scss'
})
export class modal {
  @Prop({ mutable: true }) dColor: string = "blue";

  handleToggle = () => {
    document.getElementById("myModal").style.display = "block";
  }
  handleToggle2 = () => {
    document.getElementById("myModal").style.display = "none";
  }

  componentDidLoad(){
    let wrapper = document.getElementById("myModal");
    myModal.style.backgroundColor = this.dColor;
  }
  render() {
    return (
      <div>

        <div class="wrapper">
          <button class="button" onClick={() => this.handleToggle()}>Open Modal</button>
        </div>

        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close" onClick={() => this.handleToggle2()}>&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>

      </div>
    );
  }
  /*
    @Element() el: HTMLElement;
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
                        <slot name="content"></slot>
                        <button class="prix-modal-button" id="cancel" onClick={() => this.overlayOff()} >{this.canceLabel}</button> <button class="prix-modal-button" id="accept">{this.acceptLabel}</button>
                    </div>
                </div>
            </div>,
            <button class="prix-button" id="prix-boton" onClick={() => this.ovelayOn()}>{this.value}</button>
        ]
    }
*/
}
