import {Component} from "./Component.js";
import {listItemTemplate} from "../templates/listItem-template.js";

export class ListItemComponent extends Component {
    constructor(props) {
        super(props);
        this.actionService = props.actionService;
        this.addListeners();
    }

    onInit() {
        this.template = listItemTemplate;
        this.initAttributes();
        this.render();


    }

    initAttributes() {
        this.dataset.selected = "" + this.props.state.selected;
    }

    render() {
        this.anchor.appendChild(this);
        this.shadowRoot.querySelector('.title').textContent = this.props.state.title;
        this.shadowRoot.querySelector('.description').textContent = this.props.state.desc;
    }

    addListeners() {
        this.addEventListener('click', () => {
           this.actionService.dispatch('countrySelected', this.props.state.id);
        });
    }
}

customElements.define('my-component-item', ListItemComponent);