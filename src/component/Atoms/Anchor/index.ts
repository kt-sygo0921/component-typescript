import {LitElement, customElement, html, css, property, TemplateResult, CSSResult} from 'lit-element';

import hexToRgba from '../../utility/rgba';
import {palette, withProp} from '../../utility/theme';

@customElement('sidebar-anchor')
export default class AnchorCusomElement extends LitElement {
    @property({type: String})
    public to = '';

    @property({type: Object})
    public color = {palette: 'grayscale', index: 0};

    public static styles = css`
        a {
            color: inherit;
            text-decoration: none;
        }
    `;

    public render(): TemplateResult {
        return html`
            <style>
                a {
                    color: ${withProp(
                        this.color,
                        (color: any): CSSResult | string | undefined => {
                            if (typeof color.alpha === 'number') {
                                return hexToRgba(palette(color.palette, color.index), palette('opacity', color.alpha));
                            }
                            return palette(color.palette, color.index);
                        }
                    )} !important;
                }
            </style>
            <a href=${this.to}>
                <slot></slot>
            </a>
        `;
    }
}
