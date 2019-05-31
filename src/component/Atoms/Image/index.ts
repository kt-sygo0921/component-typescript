import {customElement, LitElement, property, css, html, TemplateResult} from 'lit-element';

interface IcommonScale {
    [size: string]: number;
}

interface IgetHeight {
    (imgHeight: number): string;
}

const commonScale: IcommonScale = {
    xsmall: 40,
    small: 80,
    meidum: 120,
    large: 176,
};

const getHeight: IgetHeight = (imgHeight: number): string => (imgHeight ? `${imgHeight}px` : 'auto');

@customElement('sidebar-image')
export default class ImageCustomElement extends LitElement {
    @property({type: String})
    public scale = '';

    @property({type: String})
    public path = '';

    @property({type: String})
    public alt = '';

    @property({type: Number})
    public imgWidth = 0;

    @property({type: Number})
    public imgHeight = 0;

    public static styles = css`
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
    `;

    public render(): TemplateResult {
        return html`
            <style>
                img {
                    width: ${this.imgWidth}px;
                    height: ${getHeight(this.imgHeight)};
                    ${this.scale &&
                    `
                            width: ${commonScale[this.scale]}px;
                            height: ${commonScale[this.scale]}px;
                        `}
                }
            </style>
            <img src=${this.path} alt=${this.alt} />
        `;
    }
}
