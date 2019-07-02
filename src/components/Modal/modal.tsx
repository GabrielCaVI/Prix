import { Component, Prop, Method, h, Event, EventEmitter } from '@stencil/core'
@Component({
  tag: 'prix-modal',
  styleUrl: 'modal.scss'
})
export class modal {
  @Prop({ mutable: true }) mColorHeader: string = "red";
  @Prop({ mutable: true }) mColorBody: string = "white";
  @Prop({ mutable: true }) mColorFooter: string = "grey";
  @Prop({ mutable: true }) mExpandSizewidth: string = "70%";
  @Prop({ mutable: true }) dOpacity: boolean = false;
  @Prop({ mutable: true }) dOpacityColor: string = "rgba(0,0,0,0.1)";
  @Prop({ mutable: true }) closable: boolean = false;

  @Prop() canceLabel: string;
  @Prop() acceptLabel: string;

  //Events
  @Event() private triggerOk: EventEmitter;
  @Event() private triggerCancel: EventEmitter;

  @Method()
  async onOk() {
    this.triggerOk.emit('okEvent')
  }
  @Method()
  async onCancel() {
    this.triggerCancel.emit('cancelEvent')
  }

  @Method()
  async showModal() {
    document.getElementById("modalContainer").style.display = "flex";


  }
  @Method()
  async hideModal() {
    document.getElementById("modalContainer").style.display = "none";
  }
  componentDidLoad() {
    let modalBack = document.getElementById("myModal");
    modalBack.style.backgroundColor = this.dOpacityColor;

    let modalContent = document.getElementById("contentModal");
    modalContent.style.width = this.mExpandSizewidth;

    let modalHeader = document.getElementById("headerModal");
    modalHeader.style.backgroundColor = "white";

    let modalBody = document.getElementById("bodyModal");
    modalBody.style.backgroundColor = this.mColorBody;

    let modalFooter = document.getElementById("footerModal");
    modalFooter.style.backgroundColor = this.mColorFooter;

    this.hideModal();
  }

  render() {
    return (
      <div id="modalContainer">
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
      </div>
    );
  }
}