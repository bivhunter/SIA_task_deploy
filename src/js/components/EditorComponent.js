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
        this.dataset.selected = "" + this.state.selected;
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('.title').textContent = this.state.title;
        this.shadowRoot.querySelector('.description').textContent = this.state.text;
    }

    addListeners() {
        this.addEventListener('click', () => {
            this.actionService.dispatch('countrySelected', this.state.id);
        });
    }
}

customElements.define('my-component-editor', EditorComponent);