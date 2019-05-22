import {LitElement, customElement, html, css, property} from 'lit-element';

import hexToRgba from '../../utility/rgba';
import {switchProp, ifProp, palette, size, font} from '../../utility/theme';

const getLinespace = (linespace:string) => font(`height_${linespace}`);

import '../Anchor';

export class ButtonElement extends LitElement {
    @property({type: Boolean}) Anchor=false;
    @property({type: String}) to='';
    @property({type:String}) onClick='';
    
}