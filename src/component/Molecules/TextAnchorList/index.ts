import _ from 'lodash';
import {LitElement, html, css, customElement, property, TemplateResult} from 'lit-element';
import {size} from '../../utility/theme';
import '../../Atoms/TextIcon';

interface Iitem {
    to: string;
    children: string;
}

@customElement('sidebar-text-anchor-list')
export default class TextAnchorListCustomElement extends LitElement {
    @property({type: String})
    public linespace = 'base';

    @property({type: String})
    public scale = 'xs';

    @property({type: Object})
    public color = {palette: 'grayscale', index: 0};

    @property({type: Array})
    public items = [];

    public static styles = css`
        ul,
        li {
            font-family: '遊ゴシック Medium', 'Yu Gothic Medium', 'Yu Gothic', '遊ゴシック体', 'YuGothic',
                'ヒラギノ角ゴ ProNW3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'LiHei Pro', '微軟正黑體',
                'Microsoft JhengHei', Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 10px;
            vertical-align: bottom;
            background: transparent;
            word-break: break-word;
            list-style: none;
        }
        .styledList {
            :nth-child(n + 2) {
                margin-top: ${size('space_xxs')};
            }
        }
    `;

    public render(): TemplateResult {
        return html`
            <ul>
                ${_.map(
                    this.items,
                    (val: Iitem): TemplateResult => {
                        return html`
                            <li class="styledList">
                                <sidebar-anchor to=${val.to} color=${JSON.stringify(this.color)}>
                                    <sidebar-text-icon
                                        scale=${this.scale}
                                        linespace="l"
                                        color=${JSON.stringify(this.color)}
                                    >
                                        ${val.children}
                                    </sidebar-text-icon>
                                </sidebar-anchor>
                            </li>
                        `;
                    }
                )}
            </ul>
        `;
    }
}
