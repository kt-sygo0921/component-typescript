import {LitElement, html, css, customElement, property, TemplateResult} from 'lit-element';
import _ from 'lodash';
import {font, size, ifProp} from '../../utility/theme';

import '../../Atoms/Anchor';
import '../../Atoms/Text';
import '../../Atoms/Image';
import '../../Atoms/Caption';

@customElement('sidebar-thumbnailitem')
export default class ThumbnailItemCustomeElement extends LitElement {
    @property({type: String})
    public to = 'google.com';

    @property({type: String})
    public thumbPath = '';

    @property({type: String})
    public sub = 'aa';

    @property({type: String})
    public title = 'aa';

    public static styles = css`
        .flex-wrapper {
            display: flex;
            overflow: hidden;
        }
        .flex-item {
            flex-shrink: 0;
        }
        .thumbnail-item-wrapper {
            padding-left: ${size('space_xs')};
        }
        .text-sub {
            margin-top: ${size('space_xxs')};
            font-size: ${font('size_xs')};
        }
        .text-title {
            margin-top: ${size('space_xxs')};
            font-size: ${font('size_base')};
            display: inline-block;
            width: 100%;
        }
    `;

    public render(): TemplateResult {
        return html`
            <style>
                .text-sub {
                    ${ifProp(
                        !_.isEmpty(this.title),
                        css``,
                        css`
                            padding-bottom: 1px;
                        `
                    )};
                }
            </style>
            <sidebar-anchor to=${this.to} color=${JSON.stringify({palette: 'grayscale', index: 2})}>
                <div class="flex-wrapper">
                    <div class="flex-item">
                        <sidebar-image path=${this.thumbPath} scale="xsmall"></sidebar-image>
                    </div>
                    <div class="flex-item">
                        <div class="thumbnail-item-wrapper">
                            <sidebar-text class="text-sub" color=${JSON.stringify({palette: 'grayscale', index: 2})}>${
            this.sub
        }</sidebar-text>
                            <sidebar-text class="text-title" color=${JSON.stringify({
                                palette: 'grayscale',
                                index: 5,
                            })}>${this.title}</sidebar-tex>
                        </div>
                    </div>
                </div>
            </sidebar-anchor>
        `;
    }
}
