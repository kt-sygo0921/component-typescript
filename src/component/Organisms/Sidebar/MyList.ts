import { LitElement, html, css, customElement, property } from 'lit-element';
import {size, palette} from '../../utility/theme';

import '../../Atoms/Anchor';
import '../../Atoms/Text';

@customElement('sidebar-mylist')
export class MyList extends LitElement {
    @property({type:Array}) items = [
        {
            to:'',
            children:'',
            message:''
        }
    ]

    static styles = css`
        .item-wrapper {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            width: 100%;
            height: 29px;
            padding: ${size('space_xs')};
            &:hover {
                background-color: ${palette('grayscale', 2)};
            }
        }

        .message-text {
            margin-left: ${size('space_xxs')};
        }
    `;

    render() { 
        return html`
            <ul>
                ${this.items.map(val => (
                    html`
                        <li>
                            <sidebar-anchor to=${val.to}>
                                <div class="item-wrapper">
                                    <sidebar-text color=${JSON.stringify({palette: 'grayscale', index: 8})} scale="xs">
                                        ${val.children}
                                    </sidebar-text>
                                    ${val.message && (
                                        html`
                                            <sidebar-text class="message-text" color=${JSON.stringify({palette: 'accent', index: 3})} scale="xs">
                                                ${val.message.toString()}
                                            </sidebar-text>
                                        `
                                    )}
                                </div>
                            </sidebar-anchor>
                        </li>
                    `))}
            </ul>
        `;
    }
}