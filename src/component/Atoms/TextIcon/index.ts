import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import {size} from '../../utility/theme';

interface IiconScales {
    [size: string]: string;
}

const iconScales: IiconScales = {
    base: 'small',
    xs: 'small',
    s: 'medium',
    m: 'medium',
    l: 'large',
    xl: 'large',
};

@customElement('sidebar-text-icon')
export default class TextIconCustomElement extends LitElement {
    @property({type: String})
    public linespace = 'base';

    @property({type: String})
    public scale = 's';

    @property({type: Object})
    public color = {palette: 'grayscale', index: 0};

    @property({type: Boolean})
    public invert = false;

    public static styles = css`
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

    public render(): TemplateResult {
        return html`
            <div class="element">
                <sidebar-icon class="styledIconLeft" icoName="arrow" scale=${iconScales[this.scale]}></sidebar-icon>
                <sidebar-text linespace=${this.linespace} scale=${this.scale} color=${JSON.stringify(this.color)}
                    ><slot></slot
                ></sidebar-text>
            </div>
        `;
    }
}
