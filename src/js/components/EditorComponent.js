import {Component} from "./Component.js";
import {editorTemplate} from "../templates/editor-template.js";

export class EditorComponent extends Component {
    constructor(props) {
        super(props);
        this.initAttributes();
        this.addListeners();
    }

    onInit() {
        this.template = editorTemplate;
    }

    initAttributes() {
        this.dataset.hidden = "" + this.state.hidden;
    }

    render() {
        this.anchor.appendChild(this);
        this.submitButton = this.shadowRoot.querySelector('.submit-button');
        this.cancelButton = this.shadowRoot.querySelector('.cancel-button');
        this.input = this.shadowRoot.querySelector('input');
        this.input.value = this.state.title;
        this.input.focus();
        this.textarea = this.shadowRoot.querySelector('textarea');
        this.textarea.value = this.state.desc;
    }

    addListeners() {
        this.submitButton.addEventListener('click', () => {
            if (!this.input.value) {
                this.input.dataset.error = "true";
                return;
            }
            this.actionService.dispatch('submitAddCity', {
                ...this.state,
                title: this.input.value,
                desc: this.textarea.value
            });
        });

        this.input.addEventListener('focus', () => {
            delete this.input.dataset.error;
        });

        this.cancelButton.addEventListener('click', () => {
            this.actionService.dispatch('cancelAddCity');
        });
    }
}

customElements.define('my-component-editor', EditorComponent);