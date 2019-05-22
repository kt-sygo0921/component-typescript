import { customElement, LitElement, property, css, html } from 'lit-element';

interface IcommonScale {
    [size:string]:number
}

interface IgetHeight {
    (imgHeight:number):string
}

const commonScale:IcommonScale = {
    xsmall: 40,
    small: 80,
    meidum: 120,
    large: 176
}

const getHeight:IgetHeight = (imgHeight:number) => (imgHeight ? `${imgHeight}px`: 'auto');

@customElement('sidebar-image')
export class ImageCustomElement extends LitElement {
    @property({type:String}) scale=''
    @property({type:String}) path=''
    @property({type:String}) alt=''
    @property({type:Number}) imgWidth=0
    @property({type:Number}) imgHeight=0

    static styles = css`
        display: inline-block;
        max-width: 100%;
        max-height:100%;
    `;

    render() {
        return html`
            <style>
                img {
                    width: ${this.imgWidth}px;
                    height: ${getHeight(this.imgHeight)};
                    ${this.scale&& (
                        `
                            width: ${commonScale[this.scale]}px;
                            height: ${commonScale[this.scale]}px;
                        `
                    )}
                }
            </style>
            <img src=${this.path} alt=${this.alt} />
        `;
    }
}