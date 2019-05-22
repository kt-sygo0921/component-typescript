import {LitElement, html, customElement, property} from 'lit-element';

@customElement('test-element')
export class Test extends LitElement {
    @property() text = 'テストだよ'
    render() {
        return html`
            <p>${this.text}</p>
        `;
    }
}