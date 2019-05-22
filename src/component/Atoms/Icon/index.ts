
import convertToAbsolutePath from '../../utility/convert-absolute-path';
import { customElement, LitElement, property, css, html } from 'lit-element';

interface IicoImagePath {
    [icoName: string]:string
}

interface IcommonScale {
    [size:string]: number
}

const icoImagePath:IicoImagePath = {
    arrow: `${convertToAbsolutePath('/static/images/ico/ico_arrow.svg')}`,
    error: `${convertToAbsolutePath('/static/images/ico/ico_error.svg')}`,
    info: `${convertToAbsolutePath('/static/images/ico/ico_info.svg')}`,
    close: `${convertToAbsolutePath('/static/images/ico/ico_close.svg')}`,
    incomplete: `${convertToAbsolutePath('/static/images/ico/ico_incomplete.svg')}`,
    search: `${convertToAbsolutePath('/static/images/ico/ico_search.svg')}`,
    twitter: `${convertToAbsolutePath('/static/images/ico/ico_twitter.svg')}`,
    apple: `${convertToAbsolutePath('/static/images/ico/ico_apple.svg')}`,
    windows: `${convertToAbsolutePath('/static/images/ico/ico_windows.svg')}`,
    android: `${convertToAbsolutePath('/static/images/ico/ico_android.svg')}`,
    externallink: `${convertToAbsolutePath('/static/images/ico/ico_externallink.svg')}`,
    pause: `${convertToAbsolutePath('/static/images/ico/ico_pause.svg')}`,
    complete: `${convertToAbsolutePath('/static/images/ico/ico_complete.svg')}`,
    start: `${convertToAbsolutePath('/static/images/ico/ico_start.svg')}`,
}

const icoImagePathInvert:IicoImagePath = {
    arrow: `${convertToAbsolutePath('/static/images/ico/ico_arrow_white.svg')}`,
    search: `${convertToAbsolutePath('/static/images/ico/ico_search_white.svg')}`,
    twitter: `${convertToAbsolutePath('/static/images/ico/ico_twitter_white.svg')}`,
    apple: `${convertToAbsolutePath('/static/images/ico/ico_apple_white.svg')}`,
    windows: `${convertToAbsolutePath('/static/images/ico/ico_windows_white.svg')}`,
    android: `${convertToAbsolutePath('/static/images/ico/ico_android_white.svg')}`,
    externallink: `${convertToAbsolutePath('/static/images/ico/ico_externallink_white.svg')}`,
};

const commonScale:IcommonScale = {
    small: 14,
    medium: 17,
    large:28
};

@customElement('sidebar-icon')
export class IconCustomElement extends LitElement {
    @property({type:String}) icoName='';
    @property({type:String}) scale='large'

    static styles = css`
        img {
            vertical-align: middle;
            display: inline-block;
        }
    `;

    render() {
        return html`
            <img src=${icoImagePathInvert[this.icoName]} width=${commonScale[this.scale]} height=${commonScale[this.scale]} />
        `;
    }
}