import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';

import {font, palette, size} from '../../utility/theme';

@customElement('sidebar-caption')
export default class CaptionCustomElement extends LitElement {
    @property({type: String})
    public element = 'h1';

    @property({type: Boolean})
    public invert = false;

    public static styles = css`
        .captionElement {
            padding: 0;
            color: ${palette('grayscale', 1)};
            font-weight: normal;
            line-height: ${font('height_s')};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
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
        }

        h1.captionElement {
            font-size: ${font('size_xl')};
        }
        h2.captionElement {
            font-size: ${font('size_l')};
        }
        h3.captionElement {
            padding-left: ${size('space_xs')};
            border-left: 2px solid ${palette('accent', 2)};
            font-size: ${font('size_m')};
        }
        h4.captionElement {
            padding-left: ${size('space_xs')};
            border-left: 2px solid ${palette('accent', 2)};
            font-size: ${font('size_s')};
        }
        h5.captionElement {
            padding-left: ${size('space_xs')};
            border-left: 2px solid ${palette('accent', 2)};
            font-size: ${font('size_xs')};
        }
    `;

    public render(): TemplateResult {
        return html`
            <style>
                .captionElement {
                    color: ${this.invert && palette('grayscale', 9)} !important;
                }
            </style>
            ${((): TemplateResult | string => {
                switch (this.element) {
                    case 'h1': {
                        return html`
                            <h1 class="captionElement"><slot></slot></h1>
                        `;
                    }
                    case 'h2': {
                        return html`
                            <h2 class="captionElement"><slot></slot></h2>
                        `;
                    }
                    case 'h3': {
                        return html`
                            <h3 class="captionElement"><slot></slot></h3>
                        `;
                    }
                    case 'h4': {
                        return html`
                            <h4 class="captionElement"><slot></slot></h4>
                        `;
                    }
                    case 'h5': {
                        return html`
                            <h5 class="captionElement"><slot></slot></h5>
                        `;
                    }
                    default:
                        return '';
                }
            })()}
        `;
    }
}
