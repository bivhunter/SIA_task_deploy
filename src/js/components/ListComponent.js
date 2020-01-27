import {Component} from "./Component.js";
import {listTemplate} from "../templates/list-template.js";
//import {ListItemComponent} from "./ListItemComponent.js";

export class ListComponent extends Component {
    constructor(props) {
        super(props);
    }

    onInit() {
        this.template = listTemplate;
    }

    initAttributes() {
        this.dataset.selected = "" + this.props.state.selected;
    }

    render() {
        this.anchor.appendChild(this);
        this.list = this.shadowRoot.querySelector('.list');
        this.renderList();
    }

    renderList() {
        this.list.innerHTML = '';
        this.state.listView.forEach((item) => {
           const listItem = document.createElement('li');
           new this.props.itemConstructor({
               state: {...item},
               anchor: listItem,
               actionService: this.actionService
           });

           this.list.appendChild(listItem);
        });
    }

    addListeners() {
        this.addEventListener('click', () => {
            this.actionService.dispatch('countrySelected', this.state.id);
        });
    }
}

customElements.define('my-component-list', ListComponent);