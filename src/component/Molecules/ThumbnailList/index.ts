import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import {size} from '../../utility/theme';

@customElement('sidebar-thumbnaillit')
export default class ThumbnailListCustomElement extends LitElement {
    public static styles = css`
        > :nth-child(n + 2) {
            margin-top: ${size('space_xs')};
        }
    `;

    public render(): TemplateResult {
        return html`
            <div class="thumbnaillist-wrapper">
                <slot></slot>
            </div>
        `;
    }
}
