import { Component, Prop, h, State } from '@stencil/core';
@Component({
  tag: 'prix-multi-level',
  styleUrl: 'multi-level.scss',
})
export class multiLevel {
//HTML and CSS Properties
  @Prop() message: string;
  @Prop() color: string;
  @Prop() data?: any = {}; 
  @Prop({ mutable: true }) dark: boolean = false;

  @State() value: string = this.message;
  @State() colour: string = this.color;
  @State () internalItems =  [];
//Toggle open sideMenu function
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
//Inner Menu transition method
  menuToggle() {

    let item = document.getElementById('item')
    item.classList.toggle('toggle');
    item.classList.toggle('transition');
    setTimeout(function () {
      item.classList.toggle("transition");
    }, 350);
  }
// Value setting method
  setValue(color) {
    this.color = color;
  }
  //Loading Data from document
  init(){
    this.internalItems = this.data.items;
  }
  // CallBack function
  componentWillLoad(){
    this.init();
  }
// Dark theme implementation
  darkTheme (){
    let inn = document.getElementById('inner-menu');
    let but = document.getElementById('openButton');

    inn.classList.toggle('dark');
    but.classList.toggle('dark')
  }

  render() {
    const items = this.internalItems;
    return (

      <div id="menu">
        <div id="bg-opacity">
        </div>
        <div id="wrapper" class="center">
          <button id="openButton" onClick={() => this.handleToggle()} 
        class="float hide noselect" >
            <div class="chevron"></div>
          </button>
          <div id="inner-menu" class="">
          <span id="dark">  <button id="dark" onClick={() => this.darkTheme()}><i  class ="fas fa-moon"></i></button> </span>
        
            <div id="content" class="hide center">
              <p>{this.value}</p>
           {
                items.map((item)=>(
                  <div class="item">
                    <input type="checkbox" id={item.title} value={item.title}/>
                    <label htmlFor={item.title}>{item.title} <span class="fas fa-chevron-right arrow"></span></label>
                    <ul>
                      {item.levels.map((level)=>(
                        <div class="item submenu">
                          <input type="checkbox" id={level.title} value={level.title}/>
                          <label htmlFor={level.title}>{level.title} <span class="fas fa-chevron-right arrow"></span></label>
                          <ul>
                            {level.options.map((option)=>(
                              <li><a href={option.url}><span>{option.title}</span></a></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.options.map((option)=>(
                        <li><a href={option.url}><span>{option.title}</span></a></li>
                      ))}
                    </ul>
                  </div>
                ))
              }

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