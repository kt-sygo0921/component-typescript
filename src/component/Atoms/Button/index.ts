import '../Anchor';

import {LitElement, customElement, html, css, property, TemplateResult, CSSResult} from 'lit-element';

import {switchProp, ifProp, palette, size, font} from '../../utility/theme';

const getLinespace = (linespace: string): CSSResult => font(`height_${linespace}`);

@customElement('sidebar-button')
export default class ButtonElement extends LitElement {
    @property({type: Boolean})
    public Anchor = false;

    @property({type: String})
    public to = '';

    @property({type: String})
    public onClick = '';

    @property({type: String})
    public target = '';

    @property({type: String})
    public type = 'button';

    @property({type: String})
    public scale = 'xsmall';

    @property({type: Boolean})
    public disabled = false;

    @property({type: Boolean})
    public full = false;

    @property({type: String})
    public linespace = 'm';

    public static styles = css`
        button {
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            /* line-height: ${font('height_m')}; */
            border: 0;
            border-radius: 2px;
            outline: 0;
            cursor: pointer;
        }
    `;

    private handleClick(eventName: string): void {
        const event = new CustomEvent(eventName, {detail: {}, bubbles: true, composed: true});
        this.dispatchEvent(event);
    }

    public render(): TemplateResult {
        if (this.Anchor) {
            return html`
                <style>
                    sidebar-anchor {
                        color: ${palette('grayscale', 9)};
                        background: linear-gradient(180deg, ${palette('accent', 3)} 0%, ${palette('accent', 0)} 100%);
                        ${ifProp(
                        this.disabled,
                        css`
                            cursor: default;
                            pointer-events: none;
                            background: linear-gradient(
                                180deg,
                                ${palette('accent', 3)} 0%,
                                ${palette('accent', 0)} 100%
                            );
                        `
                    )};
                        ${switchProp(this.scale, {
                        xsmall: css`
                            padding: calc(
                                    ${size('space_xxs')} -
                                        (${font('size_base')} * ${getLinespace(this.linespace)} - ${font('size_base')}) /
                                        2
                                )
                                ${size('space_xs')};
                            font-size: ${font('size_base')};
                        `,
                        small: css`
                            padding: calc(
                                    ${size('space_xs')} -
                                        (${font('size_xs')} * ${getLinespace(this.linespace)} - ${font('size_xs')}) / 2
                                )
                                ${size('space_m')};
                            font-size: ${font('size_xs')};
                        `,
                        medium: css`
                            padding: calc(
                                    ${size('space_s')} -
                                        (${font('size_s')} * ${getLinespace(this.linespace)} - ${font('size_s')}) / 2
                                )
                                ${size('space_l')};
                            font-size: ${font('size_s')};
                            border-radius: 3px;
                        `,
                        large: css`
                            padding: calc(
                                    ${size('space_m')} -
                                        (${font('size_m')} * ${getLinespace(this.linespace)} - ${font('size_m')}) / 2
                                )
                                ${size('space_xl')};
                            font-size: ${font('size_m')};
                            border-radius: 3px;
                        `,
                    })};
                        ${ifProp(
                        this.full,
                        css`
                            width: 100% !important;
                            padding-left: ${size('space_xxs')}!important;
                            padding-right: ${size('space_xxs')}!important;
                        `
                    )};
                    }
                </style>
                <sidebar-anchor to=${this.to} target=${this.target} @click=${this.handleClick(this.onClick)}>
                    <slot></slot>
                </sidebar-anchor>
            `;
        }
        return html`
            <style>
                button {
                    color: ${palette('grayscale', 9)};
                    background: linear-gradient(180deg, ${palette('accent', 3)} 0%, ${palette('accent', 0)} 100%);
                    ${ifProp(
                    this.disabled,
                    css`
                        cursor: default;
                        pointer-events: none;
                        background: linear-gradient(180deg, ${palette('accent', 3)} 0%, ${palette('accent', 0)} 100%);
                    `
                )};
                    ${switchProp(this.scale, {
                    xsmall: css`
                        padding: calc(
                                ${size('space_xxs')} -
                                    (${font('size_base')} * ${getLinespace(this.linespace)} - ${font('size_base')}) / 2
                            )
                            ${size('space_xs')};
                        font-size: ${font('size_base')};
                    `,
                    small: css`
                        padding: calc(
                                ${size('space_xs')} -
                                    (${font('size_xs')} * ${getLinespace(this.linespace)} - ${font('size_xs')}) / 2
                            )
                            ${size('space_m')};
                        font-size: ${font('size_xs')};
                    `,
                    medium: css`
                        padding: calc(
                                ${size('space_s')} -
                                    (${font('size_s')} * ${getLinespace(this.linespace)} - ${font('size_s')}) / 2
                            )
                            ${size('space_l')};
                        font-size: ${font('size_s')};
                        border-radius: 3px;
                    `,
                    large: css`
                        padding: calc(
                                ${size('space_m')} -
                                    (${font('size_m')} * ${getLinespace(this.linespace)} - ${font('size_m')}) / 2
                            )
                            ${size('space_xl')};
                        font-size: ${font('size_m')};
                        border-radius: 3px;
                    `,
                })};
                    ${ifProp(
                    this.full,
                    css`
                        width: 100%;
                        padding-left: ${size('space_xxs')};
                        padding-right: ${size('space_xxs')};
                    `
                )};
                }
            </style>
            <button type=${this.type} @click=${this.handleClick(this.onClick)}>
                <slot></slot>
            </button>
        `;
    }
}
