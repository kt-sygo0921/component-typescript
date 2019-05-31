import {LitElement, customElement, html, css, property, CSSResult, TemplateResult} from 'lit-element';
import {size, palette, font, switchProp, withProp} from '../../utility/theme';
import hexToRgba from '../../utility/rgba';

interface Icolor {
    r: number;
    g: number;
    b: number;
}

interface Ihex {
    palette: string;
    index: number;
    alpha?: number;
}

@customElement('sidebar-text')
export default class TextCustomElement extends LitElement {
    @property({type: String})
    public linespace = 'm';

    @property({type: String})
    public scale = 's';

    @property({type: Object})
    public color = {palette: 'grayscale', index: 0};

    public static styles = css`
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

        padding: ${size('space_nothing')};
    `;

    public render(): TemplateResult {
        return html`
            <style>
                .text-paragraph {
                    color: ${withProp(
                    this.color,
                    (color: Ihex): string | undefined | CSSResult => {
                        if (typeof color.alpha === 'number') {
                            return hexToRgba(palette(color.palette, color.index), palette('opacity', color.alpha));
                        }
                        return palette(color.palette, color.index);
                    }
                )};

                    ${switchProp(this.linespace, {
                    base: `line-height: ${font('height_base')}`,
                    s: `line-height: ${font('height_s')}`,
                    m: `line-height: ${font('height_m')}`,
                    l: `line-height: ${font('height_l')}`,
                })};

                    ${switchProp(this.scale, {
                    base: `font-size: ${font('size_base')}`,
                    xs: `font-size: ${font('size_xs')}`,
                    s: `font-size: ${font('size_s')}`,
                    m: `font-size: ${font('size_m')}`,
                    l: `font-size: ${font('size_l')}`,
                    xl: `font-size: ${font('size_xl')}`,
                })};
                }
            </style>
            <p class="text-paragraph"><slot></slot></p>
        `;
    }
}
