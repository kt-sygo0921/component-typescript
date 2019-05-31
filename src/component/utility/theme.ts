import {unsafeCSS, CSSResult} from 'lit-element/lib/css-tag';

import _ from 'lodash';

interface Ttype {
    palette: {
        [key: string]: string[];
        main: string[];
        base: string[];
        accent: string[];
        grayscale: string[];
        opacity: string[];
    };
    fonts: {
        [key: string]: string | number;
        family_ja: string;
        family_en: string;
        family_ch: string;

        size_base: string;
        size_xs: string;
        size_s: string;
        size_m: string;
        size_l: string;
        size_xl: string;

        height_base: number;
        height_s: number;
        height_m: number;
        height_l: number;
    };
    sizes: {
        [key: string]: string;
        space_nothing: string;
        space_xxxs: string;
        space_xxs: string;
        space_xs: string;
        space_s: string;
        space_m: string;
        space_l: string;
        space_xl: string;
        space_xxl: string;
        space_xxxl: string;
        space_xxxxl: string;
        minWidth: string;
    };
}

const theme: Ttype = {
    palette: {
        main: ['#000000'],
        base: ['#FFFFFF'],
        accent: ['#A6843C', '#DAA520', '#E8C265', '#FFDD87', '#FFE4A5'],
        grayscale: [
            '#000000', // 0
            '#222222', // 1
            '#333333', // 2
            '#525252', // 3
            '#777777', // 4
            '#999999', // 5
            '#C9C9C9', // 6
            '#E5E5E5', // 7
            '#EEEEEE', // 8
            '#FFFFFF', // 9
        ],
        opacity: ['0', '0.25', '0.5', '0.75', '1'],
    },
    fonts: {
        family_ja: `'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif`,
        family_en: `Arial, Helvetica, sans-serif`,
        family_ch: `'LiHei Pro', 微軟正黑體, 'Microsoft JhengHei', Arial, Verdana, 'Trebuchet MS', sans-serif`,

        size_base: '10px',
        size_xs: '11px',
        size_s: '13px',
        size_m: '16px',
        size_l: '24px',
        size_xl: '30px',

        height_base: 1,
        height_s: 1.2,
        height_m: 1.4,
        height_l: 1.6,
    },
    sizes: {
        space_nothing: '0px',
        space_xxxs: '2px',
        space_xxs: '4px',
        space_xs: '8px',
        space_s: '16px',
        space_m: '24px',
        space_l: '32px',
        space_xl: '48px',
        space_xxl: '64px',
        space_xxxl: '80px',
        space_xxxxl: '160px',
        // TODO:背景ジャックを加味していないサイズのため変更する可能性大（サイトの最小幅）
        minWidth: '1280px',
    },
};

interface IswitchProp {
    [key: string]: CSSResult | string;
}

export const palette = (name: string, index: number): CSSResult => {
    return unsafeCSS(theme.palette[name][index]);
};

export const font = (name: string): CSSResult => {
    return unsafeCSS(theme.fonts[name]);
};

export const size = (name: string): CSSResult => {
    return unsafeCSS(theme.sizes[name]);
};

export const switchProp = (key: string, obj: IswitchProp) => {
    return unsafeCSS(obj[key]);
};

export const withProp = (key: any, func: Function): CSSResult => {
    return _.isArray(key) ? unsafeCSS(func(...key)) : unsafeCSS(func(key));
};

export const ifProp = (bool: boolean, a: CSSResult, b?: CSSResult): CSSResult | void => {
    if (bool) {
        return a;
    }
    if (b) return b;
};

export default theme;
