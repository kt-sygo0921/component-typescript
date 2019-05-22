import _ from 'lodash';
import {LitElement, html, css, customElement, property} from 'lit-element'
import {size} from '../../utility/theme';
import '../../Atoms/TextIcon';

interface Iitem {
    to:string
    children:string
}

@customElement('sidebar-text-anchor-list')
export class TextAnchorListCustomElement extends LitElement {
    @property({type:String}) linespace='base'
    @property({type:String}) scale='xs'
    @property({type:Object}) color={palette:'grayscale' , index:0}
    @property({type:Array}) items=[]

    static styles = css`
        ul, li {
            font-family: "遊ゴシック Medium", "Yu Gothic Medium", "Yu Gothic", "遊ゴシック体", "YuGothic", "ヒラギノ角ゴ ProNW3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "LiHei Pro", "微軟正黑體", "Microsoft JhengHei", Arial, Helvetica, sans-serif;
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

    render() {
        return html`
            <ul>
            ${
                _.map(this.items, (val:Iitem) => {
                    return html`
                        <li class="styledList">
                            <sidebar-anchor
                                to=${val.to}
                                color=${JSON.stringify(this.color)}
                            >
                                <sidebar-text-icon
                                    scale=${this.scale}
                                    linespace="l"
                                    color=${JSON.stringify(this.color)}
                                >
                                    ${val.children}
                                </sidebar-text-icon>
                            </sidebar-anchor>
                        </li>
                    `
                })
            }
            </ul>
        `;
    }
}