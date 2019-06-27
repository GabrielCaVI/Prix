import { Component, Prop, Method,h} from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.scss'
})
export class modal {
  @Prop({ mutable: true }) mColor: string = "white";
  @Prop({ mutable: true }) mExpandSizeHeight: string = "30%";
  @Prop({ mutable: true }) mExpandSizewidth: string = "30%";
  @Prop({ mutable: true }) dOpacity: boolean = false;
  @Prop({ mutable: true }) dOpacityColor: string = "rgba(0,0,0,0.3)";
  @Prop() canceLabel: string;
  @Prop() acceptLabel: string;

  @Method()
  async showModal() {
    console.log("HERE");
    document.getElementById("myModal").style.display = "block";
  /*  @Listen('click', { target: 'window' })
      handleScroll() {
        document.getElementById("myModal").style.display = "none";
      }*/
  }

  hideModal = () => {
    document.getElementById("myModal").style.display = "none";
  }

  componentDidLoad(){
    let modalBack = document.getElementById("myModal");
    modalBack.style.backgroundColor = this.dOpacityColor;

    let modalFront = document.getElementById("contentModal");
    modalFront.style.backgroundColor = this.mColor;
    modalFront.style.height = this.mExpandSizeHeight;
    modalFront.style.width = this.mExpandSizewidth;
  }

  render() {
    return (
      <div id="myModal" class="modal">
        <div id="contentModal" class="modal-content">
          <span class="close" onClick={() => this.hideModal()}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    );
  }
  /*
    @Element() el: HTMLElement;
    @Prop() data?: any = {};
    @Prop({ mutable: true }) configuration?: any = {};
    @Prop() label: string;
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
