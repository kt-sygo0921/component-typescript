import { unsafeCSS, CSSResult } from 'lit-element/lib/css-tag';

let base = '';
export const initBasePath = (rootPath:string) => {
    base = rootPath;
};

initBasePath(
    window.location.hostname !== 'localhost'
        ? 'http://dev-tyo-onaka3-alb-282579287.ap-northeast-1.elb.amazonaws.com'
        : 'http://localhost:3002'
);

export default (relativePath:string):CSSResult => unsafeCSS(`${base}${relativePath}`)
