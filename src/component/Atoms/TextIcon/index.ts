import {LitElement, customElement, html, css, property} from 'lit-element';
import {size} from '../../utility/theme';

interface IiconScales {
    [size:string]:string
}

const iconScales:IiconScales = {
    base: 'small',
    xs: 'small',
    s: 'medium',
    m: 'medium',
    l: 'large',
    xl: 'large'
};

@customElement('sidebar-text-icon')
export class TextIconCustomElement extends LitElement {
    @property({type:String}) linespace='base'
    @property({type:String}) scale='s'
    @property({type:Object}) color = {palette: 'grayscale', index:0}
    @property({type: Boolean}) invert = false

    static styles = css`
        .element {
            display: flex;
        }
        .styledIconLeft {
            display: flex;
            align-items: center;
            margin-right: ${size('space_xxxs')};
        }
        text-decoration: none;
    `;

    render(){
        return html`
            <div class="element">
                <sidebar-icon class="styledIconLeft" icoName="arrow" scale=${iconScales[this.scale]}></sidebar-icon>
                <sidebar-text linespace=${this.linespace} scale=${this.scale} color=${JSON.stringify(this.color)}><slot></slot></sidebar-text>
            </div>
        `;
    }
}