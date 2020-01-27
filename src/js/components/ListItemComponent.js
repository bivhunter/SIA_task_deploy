import {Component} from "./Component.js";
import {listItemTemplate} from "../templates/listItem-template.js";

export class ListItemComponent extends Component {
    constructor(props) {
        super(props);
        this.initAttributes();
        this.addListeners();
    }

    onInit() {
        this.template = listItemTemplate;
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

customElements.define('my-component-item', ListItemComponent);