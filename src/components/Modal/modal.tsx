import { Component, Prop, Method,Event, EventEmitter, h} from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.scss'
})
export class modal {

  @Prop({ mutable: true }) colorHeader: string = "";
  @Prop({ mutable: true }) colorHeaderText: string = "";
  @Prop({ mutable: true }) colorBody: string = "";
  @Prop({ mutable: true }) colorBodyText: string = "";
  @Prop({ mutable: true }) colorFooter: string = "";
  @Prop({ mutable: true }) expandSizewidth: string = "";
  @Prop({ mutable: true }) opacity: boolean = false;
  @Prop({ mutable: true }) opacityColor: string = "";
  @Prop({ mutable: true }) closable: boolean = false;
  @Prop({ mutable: true }) cancelLabel: string = "Cancel";
  @Prop({ mutable: true }) acceptLabel: string = "Ok";
  @Prop({ mutable: true }) cancelLabelColor: string = "blue";
  @Prop({ mutable: true }) cancelLabelColorText: string = "blue";
  @Prop({ mutable: true }) acceptLabelColor: string = "#EAF4EB";
  @Prop({ mutable: true }) acceptLabelColorText: string = "#43a047";
  //@Prop({ mutable: true }) mExpandSizeHeight: string = "20%";


  //Events
  @Event() private triggerOk: EventEmitter;
  @Event() private triggerCancel: EventEmitter;

  @Method()
  async onOk() {
    this.triggerOk.emit('okEvent');
  }

  @Method()
  async onCancel() {
    this.triggerCancel.emit('cancelEvent');
  }

  @Method()
  async showModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  @Method()
  async hideModal() {
    document.getElementById("myModal").style.display = "none";
  }

  /*
  hideModal = () => {
    document.getElementById("myModal").style.display = "none";
  }*/

  componentDidLoad(){
    let modalBack = document.getElementById("myModal");
    modalBack.style.backgroundColor = this.opacityColor;

    let modalContent = document.getElementById("contentModal");
    modalContent.style.backgroundColor = "white";
    modalContent.style.width = this.expandSizewidth;
    //modalFront.style.height = this.mExpandSizeHeight;

    let modalHeader = document.getElementById("headerModal");
    modalHeader.style.backgroundColor = this.colorHeader;
    modalHeader.style.color = this.colorHeaderText;

    let modalBody = document.getElementById("bodyModal");
    modalBody.style.backgroundColor = this.colorBody;
    modalBody.style.color = this.colorBodyText;

    let modalFooter = document.getElementById("footerModal");
    modalFooter.style.backgroundColor = this.colorFooter;

    //BUTTONS
    //let modalCancelButton = document.getElementById("cancelButton");
    //modalCancelButton.onmouseover = "this.setBg()";
    //modalCancelButton.stylee. = "blue";
  }

  setBg(c1,c2){
    let el = document.getElementById("cancelButton");
    if (el.style.backgroundColor === c1){
      el.style.backgroundColor = c1;
    }else{
      el.style.backgroundColor = c2;
    }
    //el.style.backgroundColor = el.style.backgroundColor !== 'white'? 'black':'white';
  }

  render() {
    return (
      <div>
        <div id ="myModal" class = "modal">
          <div id ="contentModal" class = "modal-content">
          <div class="modal-content-2">
            <span class="dismiss"><i onClick={() => this.hideModal()} class="fas fa-window-close dismiss"></i></span>
            <div id ="headerModal" class = "modal-header">
              <slot name="headerModalContent"></slot>
            </div>
            <div id ="bodyModal" class = "modal-body">
              <slot name="bodyModalContent"></slot>
            </div>
            <div id ="footerModal" class = "modal-footer">
              <button class="button" id ="acceptButton" onClick={() => this.hideModal()}>{this.acceptLabel}</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    /*  <div id="modalContainer">
        <div id="myModal" class="modal">
          <div id="contentModal" class="modal-content">
          <span class="dismiss"><i onClick={() => this.hideModal()} class="fas fa-window-close dismiss"></i></span>
            <div id="headerModal" class="modal-header">
              <slot name="headerModal"></slot>
            </div>
            <div id="bodyModal" class="modal-body">
              <slot name="bodyModal"></slot>
            </div>
            <div id="footerModal" class="modal-footer">
              <button class="button" onClick={() => this.onCancel()}>{this.canceLabel}</button>
              <button class="button" onClick={() => this.onOk()}>{this.acceptLabel}</button>
            </div>
          </div>
        </div>
      </div>*/
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
