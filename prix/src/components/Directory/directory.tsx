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

                
                
                <div class="topnav">
                    <a class="active" href="#home">Directory</a>
                    <div class = "search-container">
                        <input type="text" placeholder="Search..."/>
                        <button type="button"><i class="fas fa-search"></i></button>
                    </div>
                    
                </div>

                <label>{this.field}</label>

                <div id="indexBarHeader" class="a-row a-spacing-none s-see-all-refinement-header">
                    <div class="a-colum a-span12 a-text-center">
                        <div class="a-row a-spacing-none pagn">
                            <span class="pagnLink"><a href="#">#</a>
                            </span>
                            <span class="pagnLink"><a href="#">A</a>
                            </span>
                            <span class="pagnLink"><a href="#">B</a>
                            </span>
                            <span class="pagnLink"><a href="#">C</a>
                            </span>
                            <span class="pagnLink"><a href="#">D</a>
                            </span>
                            <span class="pagnLink"><a href="#">E</a>
                            </span>
                            <span class="pagnLink"><a href="#">F</a>
                            </span>
                            <span class="pagnLink"><a href="#">G</a>
                            </span>
                            <span class="pagnLink"><a href="#">H</a>
                            </span>
                            <span class="pagnLink"><a href="#">I</a>
                            </span>
                            <span class="pagnLink"><a href="#">J</a>
                            </span>
                            <span class="pagnLink"><a href="#">K</a>
                            </span>
                            <span class="pagnLink"><a href="#">L</a>
                            </span>
                            <span class="pagnLink"><a href="#">M</a>
                            </span>
                            <span class="pagnLink"><a href="#">N</a>
                            </span>
                            <span class="pagnLink"><a href="#">O</a>
                            </span>
                            <span class="pagnLink"><a href="#">P</a>
                            </span>
                            <span class="pagnLink"><a href="#">Q</a>
                            </span>
                            <span class="pagnLink"><a href="#">R</a>
                            </span>
                            <span class="pagnLink"><a href="#">S</a>
                            </span>
                            <span class="pagnLink"><a href="#">T</a>
                            </span>
                            <span class="pagnLink"><a href="#">U</a>
                            </span>
                            <span class="pagnLink"><a href="#">V</a>
                            </span>
                            <span class="pagnLink"><a href="#">W</a>
                            </span>
                            <span class="pagnLink"><a href="#">X</a>
                            </span>
                            <span class="pagnLink"><a href="#">Y</a>
                            </span>
                            <span class="pagnLink"><a href="#">Z</a>
                            </span>
                        </div>
                    </div>
                </div>

                <p>A</p>
                <hr></hr>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                <p>B</p>
                <hr></hr>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                <p>C</p>
                <hr></hr>
                    <ul>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
    

            </span>
        )
    }
}