import { Component, Prop, Method,h} from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.scss'
})
export class modal {

  @Prop({ mutable: true }) mColorHeader: string = "";
  @Prop({ mutable: true }) mColorBody: string = "";
  @Prop({ mutable: true }) mColorFooter: string = "";
  //@Prop({ mutable: true }) mExpandSizeHeight: string = "20%";
  @Prop({ mutable: true }) mExpandSizewidth: string = "";
  @Prop({ mutable: true }) dOpacity: boolean = false;
  @Prop({ mutable: true }) dOpacityColor: string = "";
  @Prop() canceLabel: string;
  @Prop() acceptLabel: string;

  @Method()
  async showModal() {
    console.log("HERE");
    document.getElementById("myModal").style.display = "flex";
  }

  hideModal = () => {
    document.getElementById("myModal").style.display = "none";
  }

  componentDidLoad(){
    console.log(this.mColorHeader);

    let modalBack = document.getElementById("myModal");
    modalBack.style.backgroundColor = this.dOpacityColor;

    let modalContent = document.getElementById("contentModal");
    modalContent.style.backgroundColor = "white";
    //modalFront.style.height = this.mExpandSizeHeight;
    modalContent.style.width = this.mExpandSizewidth;

    let modalHeader = document.getElementById("headerModal");
    modalHeader.style.backgroundColor = this.mColorHeader;

    let modalBody = document.getElementById("bodyModal");
    modalBody.style.backgroundColor = this.mColorBody;

    let modalFooter = document.getElementById("footerModal");
    modalFooter.style.backgroundColor = this.mColorFooter;

  }

  render() {
    return (
      <div>
        <div id ="myModal" class = "modal">
          <div id ="contentModal" class = "modal-content">
          <div class="modal-content-2">
            <div id ="headerModal" class = "modal-header">
              <slot id="headSlot" name="headerModalContent"></slot>
            </div>
            <div id ="bodyModal" class = "modal-body">
              <slot name="bodyModalContent"></slot>
            </div>
            <div id ="footerModal" class = "modal-footer">
              <button class="button" onClick={() => this.hideModal()}>OK</button>
              <button class="button" onClick={() => this.hideModal()}>cerrar</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

/* GABO
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
