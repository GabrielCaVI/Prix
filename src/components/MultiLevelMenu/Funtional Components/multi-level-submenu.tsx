import { Component, h, Prop} from "@stencil/core";
@Component({
  tag: "prix-multi-level-submenu",
  styleUrl: "multi-level-submenu.scss"
})
export class multiLevelSubmenu {
    @Prop({ mutable: true }) item?:any={};
    render(){
        return (
            <div class="item">
                <input type="checkbox" id={this.item.title} value={this.item.title}/>
                <label htmlFor={this.item.title}>{this.item.title} <span class="fas fa-chevron-right arrow"></span></label>
                <ul>
                    {this.item.levels.map((level)=>(
                        <prix-multi-level-submenu item={level}></prix-multi-level-submenu>
                    ))}
                    {this.item.options.map((option)=>(
                        <prix-multi-level-item selfTitle={option.title} url={option.url}></prix-multi-level-item>
                    ))}
                </ul>
            </div>
        );
    }
}