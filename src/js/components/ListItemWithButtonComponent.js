import {Component} from "./Component.js";
import { listItemWithButtonTemplate } from "../templates/listItemWithButton-template.js";

export class ListItemWithButtonComponentComponent extends Component {
    constructor(props) {
        super(props);
        this.initAttributes();
       // this.addListeners();
    }

    onInit() {
        this.template = listItemWithButtonTemplate;
    }

    initAttributes() {
        this.dataset.selected = "" + this.state.selected;
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('.title').textContent = this.state.title;
        this.shadowRoot.querySelector('.description').textContent = this.state.desc;
    }

    addListeners() {
        this.addEventListener('click', () => {
            this.actionService.dispatch('countrySelected', this.state.id);
        });
    }
}

customElements.define('my-component-item-with-button', ListItemWithButtonComponentComponent);