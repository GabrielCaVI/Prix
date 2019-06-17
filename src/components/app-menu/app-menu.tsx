import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
})
export class appMenu {

  @Prop() message: string;
  @Prop() color: string;

  @State() value: string = this.message;

  @State() colour: string = this.color;
  

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

  menuToggle() {

    let item = document.getElementById('item')
    item.classList.toggle('toggle');
    item.classList.toggle('transition');
    setTimeout(function () {
      item.classList.toggle("transition");
    }, 350);
  }

  setValue(color) {
    this.color = color;
  }



  render() {
    return (
      <div id="menu">
        <div id="bg-opacity">
        </div>
        <div id="wrapper" class="center">
          <button id="openButton" onClick={() => this.handleToggle()} 
         style={{ backgroundColor: this.color}}class="float hide noselect">
            <div class="chevron"></div>
          </button>
          <div id="inner-menu" style={{ backgroundColor: this.color }}>
            <div id="content" class="hide center">
              <p>{this.value}</p>





              <div class="item">
                <input type="checkbox" id="A" value="Item1" />
                
                
                <label htmlFor="A">ITEM 1 <span class="fas fa-chevron-right arrow"></span></label>
                <ul>
                  <li><a href="#">Menu <span>Option 1</span></a></li>
                  <li><a href="#">Menu <span>Option 2</span></a></li>
                  <li><a href="#">Menu <span>Option 3</span></a></li>
                  <li><a href="#">Menu <span>Option 4</span></a></li>

                </ul>
              </div>




              <div class="item">
                <input type="checkbox" id="B" value="Item2" />

                
                <label htmlFor="B">ITEM 2 <span class="fas fa-chevron-right arrow"></span></label>
                <ul>
                  <li><a href="#">Menu <span>Option 5</span></a></li>
                  <li><a href="#">Menu <span>Option 6</span></a></li>
                  <li><a href="#">Menu <span>Option 7</span></a></li>
                  <li><a href="#">Menu <span>Option 8</span></a></li>

                </ul>
              </div>




              <div class="item">
                <input type="checkbox" id="C" value="Item3" />
                
                <label htmlFor="C">ITEM 3 <span class="fas fa-chevron-right arrow"></span></label>
                <ul>
                  <li><a href="#">Menu <span>Option 9</span></a></li>
                  <li><a href="#">Menu <span>Option 10</span></a></li>
                  <li><a href="#">Menu <span>Option 11</span></a></li>
                  <li><a href="#">Menu <span>Option 12</span></a></li>

                </ul>
              </div>



              <div class="item">
                <input type="checkbox" id="D" value="Item4" />
                
                <label htmlFor="D">ITEM 4 <span class="fas fa-chevron-right arrow"></span></label>
                <ul>
                  <li><a href="#">Menu <span>Option 9</span></a></li>
                  <li><a href="#">Menu <span>Option 10</span></a></li>
                  <li><a href="#">Menu <span>Option 11</span></a></li>
                  <li><a href="#">Menu <span>Option 12</span></a></li>

                </ul>
              </div>





              <div class="help22" id="help">
                <ul>
                  <li><a href="#"><span class="far"></span>Help Center</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
