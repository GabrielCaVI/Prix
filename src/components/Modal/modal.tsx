import { Component, Prop, Method, h} from '@stencil/core'
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
  @Prop() canceLabel: string;
  @Prop() acceptLabel: string;

  @Method()
  async showModal() {
    document.getElementById("myModal").style.display = "flex";
  }

  hideModal = () => {
    document.getElementById("myModal").style.display = "none";
  }

  componentDidLoad(){
    let modalBack = document.getElementById("myModal");
    modalBack.style.backgroundColor = this.dOpacityColor;

    let modalContent = document.getElementById("contentModal");
    //modalContent.style.backgroundColor = "red";
    //modalFront.style.height = this.mExpandSizeHeight;
    modalContent.style.width = this.mExpandSizewidth;

    let modalHeader = document.getElementById("headerModal");
    modalHeader.style.backgroundColor = "white";

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
            <div id ="headerModal" class = "modal-header">
              <slot name="headerModal"></slot>
            </div>
            <div id ="bodyModal" class = "modal-body">
            <slot name="bodyModal"></slot>
            </div>
            <div id ="footerModal" class = "modal-footer">
              <button class="button" onClick={() => this.hideModal()}>{this.canceLabel}</button>
              <button class="button" onClick={() => this.hideModal()}>{this.acceptLabel}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}