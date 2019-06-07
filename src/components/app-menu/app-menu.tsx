import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
})
export class appMenu {

  @Prop() message: string;
  @State() value: string = this.message;

  // handleClicek(){
  //   window.alert('Hola')
  // }

  handleToggle = () => {

    let button = document.getElementById('openButton');
    let inner = document.getElementById('inner-menu');
    let content = document.getElementById('content');

    button.classList.toggle('toggle');
    button.classList.toggle('transition');

    inner.classList.toggle('toggle');
    inner.classList.toggle('showMenu')
    inner.classList.toggle('transition');

    content.classList.toggle('toggle');
    content.classList.toggle('transition');
    content.classList.toggle('hide');



    setTimeout(function () {
      button.classList.toggle("transition");
      inner.classList.toggle("transition");
    }, 350);

  }


  render() {
    return (
      <div id="color">
        <div id="bg-opacity">

        </div>
        <div id="wrapper" class="center">
          <button id="openButton" onClick={() => this.handleToggle()} class="float hide noselect">
            <div class="chevron"></div>
          </button>
          <div id="inner-menu">
            <div id="content" class="hide center">
              <p>{this.value}</p>
              <ul>
                <li><a href="#">Menu <span>Option 1</span></a></li>
                <li><a href="#">Menu <span>Option 2</span></a></li>
                <li><a href="#">Menu <span>Option 3</span></a></li>
                <li><a href="#">Menu <span>Option 4</span></a></li>
                <li><a href="#"><span class="far"></span>Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
