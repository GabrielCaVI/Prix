import { Component, h, Prop} from '@stencil/core';
@Component({
    tag: 'prix-directory',
    styleUrl: 'directory.scss'
})
export class Directory{
    //Props
    /**
     * Common attributes
     */
    @Prop() data?: any = {};

    @Prop({ mutable: true }) configuration?: any = {};

    render(){
        return (
            <span>
            </span>
        )
    }
}