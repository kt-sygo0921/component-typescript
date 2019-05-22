import {LitElement, customElement, html, css, property} from 'lit-element';
import {size} from '../../utility/theme';

@customElement('sidebar-thumbnaillit')
export class ThumbnailListCustomElement extends LitElement {
    static styles = css`
        > :nth-child(n + 2) {
            margin-top: ${size('space_xs')};
        }
    `;
    render() {
        return html`
            <div class="thumbnaillist-wrapper">
                <slot></slot>
            </div>
        `;
    }
}