import _ from 'lodash';
import {LitElement, customElement, html, css, property} from 'lit-element';
import { unsafeCSS } from 'lit-element/lib/css-tag';

import {size, palette} from '../../utility/theme';
import convertToAbsolutePath from '../../utility/convert-absolute-path';

// import axios from '../../../lib/axios';

import '../../Atoms/Anchor';
import '../../Atoms/Button';
import '../../Atoms/Caption';
import '../../Atoms/TextIcon';
import '../../Atoms/Image';
import '../../Molecules/TextAnchorList';

@customElement('sidebar-element')
export class SidebarCustomElement extends LitElement {
    // デコレータで指定した場合は初期値も指定されるため一時的に値を入れていない
    @property({type:Object}) profile={}

    @property({type: Object}) guest={
        loginText: '',
        signupText: ''
    }
    
    @property({type:Array}) banners = [
        {
            to:'',
            thumbPath:'',
            alt: '',
            target: ''
        }
    ]
    @property({type:Array}) myListItems = [
        {
            to:'',
            children:'',
            target:'',
            message: 0
        }
    ]
    @property({type:Object}) pointInfo = {
        title:'',
        text:'',
        points: '',
        buttonText: ''
    }
    @property({type:Object}) gameTopics = {
        title:'',
        items:[
            {
                title:'',
                sub:'',
                thumbPath:'',
                to:'',
                target:''
            }
        ]
    }
    @property({type:Object}) adminTopics = {
        title: '',
        items: [
            {
                to:'',
                children:''
            }
        ],
        showAll: {
            children:'',
            to:'',
            target:''
        }
    }

    static styles = css`
        .sidebar-wrapper {
            width: 240px;
        }
        .texture {
            box-sizing: border-box;
            padding: ${size('space_s')};
            background-image: ${unsafeCSS(`url(${convertToAbsolutePath('/static/images/bg/texture_01.jpg')})`)};
            background-repeat: repeat;
        }
        .texture-inner {
            padding: ${size('space_s')};
            background: ${palette('grayscale', 1)};
        }
        .loginbutton {
            display: block;
            margin-bottom: ${size('space_xs')};
        }
        .section {
            margin-top: ${size('space_m')};
        }
        sidebar-caption {
            margin-bottom: ${size('space_xs')};
        }
        .wrapshowall {
            margin-top: ${size('space_xxs')};
            text-align: right;
        }
        .wrapshowall sidebar-anchor {
            display: inline-block;
        }
        .banner-wrapper {
            margin-top: ${size('space_m')};
                & + & {
                margin-top: ${size('space_s')};
            }
        }
    `;
    // async firstUpdated() {
    //     const {data} = await axios.get(
    //         window.location.hostname !== 'localhost'
    //             ? 'http://dev-tyo-onaka4-alb-1861507664.ap-northeast-1.elb.amazonaws.com/list.json'
    //             // npm run devとnpm run startとでport分岐
    //             : process.env.NODE_ENV === 'development' ? 'http://localhost:3003/list.json' : 'http://localhost:3000/list.json'
    //     );
    //     this.adminTopics = data.adminTopics;
    //     this.banners = data.banners;
    // }

    render() {
        if(_.isEmpty(this.profile)) {
            return html`
                <div class="sidebar-wrapper"> 
                    <div class="texture">
                        <div class="texture-inner">
                            <sidebar-button class="loginbutton" to="/login" rank="secondary" scale="medium" full=${true}>
                                ${this.guest.loginText}
                            </sidebar-button>
                            <sidebar-button to="/signup" rank="primary" scale="medium" full=${true}>
                                ${this.guest.signupText}
                            </sidebar-button>
                        </div>
                    </div>
                    ${!_.isEmpty(this.adminTopics) && (
                        html`
                            <section class="section">
                                <sidebar-caption element="h4">Adminstar Topic</sidebar-caption>
                                <sidebar-text-anchor-list items=${JSON.stringify(this.adminTopics)}></sidebar-text-anchor-list>
                                <div class="wrapshowall">
                                    <sidebar-anchor to="/message">
                                        <sidebar-text-icon leftIcoName="arrow" leftIcoRotate="right" scale="xs" color=${JSON.stringify({palette: 'grayscale', index: 0})}>
                                            Show All
                                        </sidebar-text-icon>
                                    </sidebar-anchor>
                                </div>
                            </section>
                        `
                    )}
                    ${_.map(this.banners, val => (
                        html`
                        <div class="banner-wrapper">
                            <sidebar-anchor to=${val.to}>
                                <sidebar-image path=${val.thumbPath} imgWidth=${240}></sidebar-image>
                            </sidebar-anchor>
                        </div>
                        `
                    ))}
                </div>
            `
        }
    }
}