import {Component} from "./Component.js";
import {buttonTemplate} from "../templates/button-template.js";

export class ButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.initAttributes();
        this.addListeners();
    }

    onInit() {
        this.template = buttonTemplate;

    }

    initAttributes() {
        this.dataset.hidden = "" + !this.state.hidden;
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('button').textContent = this.state.title;
        //this.shadowRoot.querySelector('.description').textContent = this.state.text;
    }

    addListeners() {
        this.addEventListener('click', () => {
            this.actionService.dispatch('addCity');
        });
    }
}

customElements.define('my-component-button', ButtonComponent);