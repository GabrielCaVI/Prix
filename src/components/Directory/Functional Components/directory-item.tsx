import { Component, Element, Prop, h} from '@stencil/core'
@Component({
    tag: 'prix-directory-item',
    styleUrl: 'directory-item.scss'
})
export class directoryItem {
    @Element() el: HTMLElement;
    /**
     * COMMON ATTRIBUTES
     */
    @Prop({ mutable: true }) color: string = "cyan";
    @Prop({ mutable: true }) item?: any = {};
    /**
     * STATE
     */
    /**
     * Lifecycle methods
     */
    render(){
        return(
            <div class="item">
                <h1>{this.item.index}</h1>
                <div class="rule"></div>
                <ul>
                    {this.item.content.map(contentItem => (
                        <a class="link" href={contentItem.url}><li>{contentItem.title}</li></a>
                    ))}
                </ul>
            </div>
        )
    }

}