import {Component} from "./Component.js";
import { listItemWithButtonTemplate } from "../templates/listItemWithButton-template.js";

export class ListItemWithButtonComponentComponent extends Component {
    constructor(props) {
        super(props);
        this.initAttributes();
        this.addListeners();
    }

    onInit() {
        this.template = listItemWithButtonTemplate;
    }

    initAttributes() {
        this.dataset.selected = "" + this.state.selected;
        this.editButton.dataset.disable = "" + this.state.disable;
        this.deleteButton.dataset.disable = "" + this.state.disable;
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('.title').textContent = this.state.title;
        this.shadowRoot.querySelector('.description').textContent = this.state.desc;
        this.editButton = this.shadowRoot.querySelector('.edit-button');
        this.deleteButton = this.shadowRoot.querySelector('.delete-button');
    }

    addListeners() {
        this.editButton.addEventListener('click', () => {
            this.actionService.dispatch('editCityMode', this.state);
        });
        this.deleteButton.addEventListener('click', () => {
            this.actionService.dispatch('deleteCity', this.state);
        });
    }
}

customElements.define('my-component-item-with-button', ListItemWithButtonComponentComponent);