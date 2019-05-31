import {LitElement, html, customElement, property, TemplateResult} from 'lit-element';

@customElement('test-element')
export default class Test extends LitElement {
    @property()
    public text = 'テストだよ';

    public render(): TemplateResult {
        return html`
            <p>${this.text}</p>
        `;
    }
}
