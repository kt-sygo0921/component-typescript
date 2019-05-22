import {LitElement, customElement, html, css, property} from 'lit-element';

import hexToRgba from '../../utility/rgba';
import {palette, withProp} from '../../utility/theme';

@customElement('sidebar-anchor')
export class AnchorCusomElement extends LitElement {
    @property({type:String}) to = '';
    @property({type:Object}) color={palette: 'grayscale', index:0};

    static styles = css`
        a {
            color: inherit;
            text-decoration: none;
        }
    `;

    render() {
        return html`
            <style>
                a {
                    color: ${withProp(this.color, (color:any) => {
                        if (typeof color.alpha === 'number') {
                            return hexToRgba(palette(color.palette, color.index), palette('opacity', color.alpha));
                        }
                        return palette(color.palette, color.index);
                    })} !important;
                }
            </style>
            <a href=${this.to}>
                <slot></slot>
            </a>
        `;
    }
}