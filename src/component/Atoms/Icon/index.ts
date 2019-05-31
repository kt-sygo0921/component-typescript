import {LitElement, customElement, html, css, property, TemplateResult} from 'lit-element';
import convertToAbsolutePath from '../../utility/convert-absolute-path';

interface IicoImagePath {
    [icoName: string]: string;
}

interface IcommonScale {
    [size: string]: number;
}

const icoImagePathInvert: IicoImagePath = {
    arrow: `${convertToAbsolutePath('/static/images/ico/ico_arrow_white.svg')}`,
    search: `${convertToAbsolutePath('/static/images/ico/ico_search_white.svg')}`,
    twitter: `${convertToAbsolutePath('/static/images/ico/ico_twitter_white.svg')}`,
    apple: `${convertToAbsolutePath('/static/images/ico/ico_apple_white.svg')}`,
    windows: `${convertToAbsolutePath('/static/images/ico/ico_windows_white.svg')}`,
    android: `${convertToAbsolutePath('/static/images/ico/ico_android_white.svg')}`,
    externallink: `${convertToAbsolutePath('/static/images/ico/ico_externallink_white.svg')}`,
};

const commonScale: IcommonScale = {
    small: 14,
    medium: 17,
    large: 28,
};

@customElement('sidebar-icon')
export default class IconCustomElement extends LitElement {
    @property({type: String})
    public icoName = '';

    @property({type: String})
    public scale = 'large';

    public static styles = css`
        img {
            vertical-align: middle;
            display: inline-block;
        }
    `;

    public render(): TemplateResult {
        return html`
            <img
                src=${icoImagePathInvert[this.icoName]}
                width=${commonScale[this.scale]}
                height=${commonScale[this.scale]}
            />
        `;
    }
}
