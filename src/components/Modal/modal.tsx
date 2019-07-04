import { Component, Prop, Method,Event, EventEmitter, h} from '@stencil/core'
@Component({
    tag: 'prix-modal',
    styleUrl: 'modal.scss'
})
export class modal {

  //Props
  /**
    * Common attributes
  */
  @Prop({ mutable: true }) colorHeader: string = "white";
  @Prop({ mutable: true }) colorHeaderText: string = "black";
  @Prop({ mutable: true }) colorBody: string = "white";
  @Prop({ mutable: true }) colorBodyText: string = "black";
  @Prop({ mutable: true }) colorFooter: string = "white";
  @Prop({ mutable: true }) expandSizeWidth: string = "80%";
  @Prop({ mutable: true }) cancelLabel: string = "Cancel";
  @Prop({ mutable: true }) acceptLabel: string = "Ok";
  @Prop({ mutable: true }) cancelLabelColor: string = "#fbe4e4";
  @Prop({ mutable: true }) cancelLabelColorText: string = "#b52626";
  @Prop({ mutable: true }) acceptLabelColor: string = "#EAF4EB";
  @Prop({ mutable: true }) acceptLabelColorText: string = "#43a047";

  //Events
  /**
    * Event Emmitters
  */
  @Event() private triggerOk: EventEmitter;
  @Event() private triggerCancel: EventEmitter;

  //Methods
  /**
    Public API Methods
  */
  @Method()
  async onOkEvent() {
    this.triggerOk.emit('okEvent');
  }

  @Method()
  async onCancelEvent() {
    this.triggerCancel.emit('cancelEvent');
  }

  @Method()
  async showModal() {
    document.getElementById("overlay").style.display = "flex";
    this.onOkEvent();
  }

  @Method()
  async hideModal() {
    document.getElementById("overlay").style.display = "none";
    this.onCancelEvent();
  }

  /**
    Life Cycle Methods
  */
  componentDidLoad(){
    let modalContent = document.getElementById("contentModal");
    modalContent.style.backgroundColor = "white";
    modalContent.style.width = this.expandSizeWidth;

    let modalHeader = document.getElementById("headerModal");
    modalHeader.style.backgroundColor = this.colorHeader;
    modalHeader.style.color = this.colorHeaderText;

    let modalBody = document.getElementById("bodyModal");
    modalBody.style.backgroundColor = this.colorBody;
    modalBody.style.color = this.colorBodyText;

    let modalFooter = document.getElementById("footerModal");
    modalFooter.style.backgroundColor = this.colorFooter;

    let modalCancelButtonText = document.getElementById("cancelButton");
    modalCancelButtonText.style.color = this.cancelLabelColorText;

    let modalAcceptButtonText = document.getElementById("okButton");
    modalAcceptButtonText.style.color = this.acceptLabelColorText;

    let modalCancelButton = document.getElementById("cancelButton");
    modalCancelButton.style.backgroundColor = "transparent";

    let modalAcceptButton = document.getElementById("okButton");
    modalAcceptButton.style.backgroundColor = "transparent";
  }

  render() {
    return (
      <div>
        <div id ="overlay">
          <div id ="contentModal">
            <div id ="headerModal">
              <span class="dismiss"><i onClick={() => this.hideModal()} class="far fa-window-close"></i></span>
              <slot name="headerModalContent"></slot>
            </div>
            <div id ="bodyModal">
              <slot name="bodyModalContent"></slot>
            </div>
            <div id ="footerModal">
              <button class="modal-button" id ="cancelButton" onClick={() => this.onCancelEvent()} onMouseOver={() => this.setCancelButtonColor()} onMouseOut={() => this.setCancelButtonColor()}>{this.cancelLabel}</button>
              <button class="modal-button" id ="okButton" onClick={() => this.onOkEvent()} onMouseOver={() => this.setOkButtonColor()} onMouseOut={() => this.setOkButtonColor()}>{this.acceptLabel}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Methods
  /**
    Component Methods
  */
  private setCancelButtonColor(){
    let modalCancelButton = document.getElementById("cancelButton");
    if (modalCancelButton.style.backgroundColor === "transparent"){
      modalCancelButton.style.backgroundColor = this.cancelLabelColor;
    } else {
      modalCancelButton.style.backgroundColor = "transparent";
    }
  }

  private setOkButtonColor(){
    let modalokButton = document.getElementById("okButton");
    if (modalokButton.style.backgroundColor === "transparent"){
      modalokButton.style.backgroundColor = this.acceptLabelColor;
    } else {
      modalokButton.style.backgroundColor = "transparent";
    }
  }
}
