import { Component, Prop, h, State } from "@stencil/core";
@Component({
  tag: "prix-multi-level",
  styleUrl: "multi-level.scss"
})
export class multiLevel {
  /**
   * COMMON ATTRIBUTES
   */
  @Prop() message: string;
  @Prop() color: string = '#0033a0';
  @Prop() data?: any = {}; 
  @Prop({ mutable: true }) dark: boolean = false;
  @State() internalItems =  [];

  /**
   * PUBLIC API
   */

  //Toggle open sideMenu function
  handleToggle = () => {
    let button = document.getElementById("openButton");
    let inner = document.getElementById("inner-menu");
    let content = document.getElementById("content");

    button.classList.toggle("toggle");
    button.classList.toggle("transition");

    inner.classList.toggle("toggle");
    inner.classList.toggle("showMenu");
    inner.classList.toggle("transition");

    content.classList.toggle("toggle");
    content.classList.toggle("transition");
    content.classList.toggle("hide");

    setTimeout(function() {
      button.classList.toggle("transition");
      inner.classList.toggle("transition");
    }, 350);

  }
  //Inner Menu transition method
  menuToggle() {
    let item = document.getElementById("item");
    item.classList.toggle("toggle");
    item.classList.toggle("transition");
    setTimeout(function() {
      item.classList.toggle("transition");
    }, 350);
  }

  /**
   * LIFECYCLE METHODS
   */
  componentWillLoad(){
    this.init();
  }
  render() {
    const items = this.internalItems;
    return (
      <div id="menu">
        <div id="wrapper" class="center">
          <button
            id="openButton"
            onClick={() => this.handleToggle()}
            class="float hide noselect"
          >
            <div class="chevron"></div>
          </button>
          <div id="inner-menu">
            <br/>
            <slot name="icon"/>
            <div id="content" class="hide center">
              <p>{this.message}</p>
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
                <a href="#">
                  <span class="far"></span>Help Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidRender(){
    if(this.dark){
      this.darkTheme();
    }else{
      this.setColor();
    }
  }

  /**
   * PRIVATE METHODS
   */

   //Loading Data from document
  private init(){
    this.internalItems = this.data.items;
  }
  
  // Dark theme implementation
  private darkTheme (){
    let inn = document.getElementById('inner-menu');
    let but = document.getElementById('openButton');
    inn.classList.toggle('dark');
    but.classList.toggle('dark');
  }
  private setColor(){
    let inn = document.getElementById('inner-menu');
    let but = document.getElementById('openButton');
    if(this.color !== ''){
      inn.style.backgroundColor = this.color;
      but.style.backgroundColor = this.color;
    }
  }
}
