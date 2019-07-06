import { Component, h, Prop} from "@stencil/core";
@Component({
  tag: "prix-multi-level-item",
  styleUrl: "multi-level-item.scss"
})
export class multiLevelItem {
    @Prop({ mutable: true }) selfTitle?:string="" 
    @Prop({ mutable: true }) url?:string=""
    render(){
        return(
            <li><a href={this.url}><span>{this.selfTitle}</span></a></li>
        )
    }
}