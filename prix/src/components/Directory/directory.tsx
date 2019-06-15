import { Component, h, Prop} from '@stencil/core';
@Component({
    tag: 'prix-directory',
    styleUrl: 'directory.scss'
})
export class Directory{
    @Prop() field: string;

    render(){
        return (
            <span>
                <label>{this.field}</label>
                <input type="text"/>
            </span>
        )
    }
}