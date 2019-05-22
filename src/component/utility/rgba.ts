import themeDefault from './theme';
import { CSSResult } from 'lit-element';
 
 const props:Object = {
     theme:themeDefault,
 }

 interface Ipalette {
     (palette:string, index:number):CSSResult
 }
 interface Iopacity {
    (opacity:string, alpha:number):CSSResult
 }
 
 interface Ihex {
    (hex:Object|Ipalette):any
 }
 interface Ialpha {
    (hex:Object|Iopacity):string
 }

 interface Irgb {
    (func:Ihex): {
        r:number,
        g:number,
        b:number
    } | null
 }

 interface Irgba {
     (hex:any, alpha:any):string|undefined
 }

 interface Icolor {
    r:number,
    g:number,
    b:number
 }

 const hexToRgb:Irgb = (hex) => {
    const color:any = typeof hex === 'function' ? hex(props) : hex;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result:RegExpExecArray|null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        color.replace(shorthandRegex, (m:string, r:string, g:string, b:string) => r + r + g + g + b + b)
    );
    return result ? {
        r:parseInt(result[1], 16),
        g:parseInt(result[2], 16),
        b:parseInt(result[3], 16),
    } : null;
 }

const rgba:Irgba = (hex, alpha) => {
    const color:Icolor|null = hexToRgb(hex);
    const opacity:string = typeof alpha === 'function' ? alpha(props) : alpha;
    if(color) {
        return `rgba(${color.r}. ${color.g}, ${color.b}, ${opacity})`
    }
}

export default rgba;
