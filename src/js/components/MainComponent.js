import { mainTemplate } from "../templates/main-template.js";
import { Component } from "./Component.js";
import {ListComponent} from "./ListComponent.js";

export class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.actionService = props.actionService;
		this.eventService = props.eventService;
		this.render();
		this.addListeners();
	}

	set state(value) {
		this._state = { ...value
		};
		this.props.state = this._state;
	}

	get state() {
		return this._state;
	}

	onInit() {
		this.template = mainTemplate;
	}

	addListeners() {
		this.eventService.subscribe('stateChanged', (state) => {
			this.state = state;
			this.applyChanges();
		});
	}

	render() {
		this.anchor.appendChild(this);
		const countriesWrapper = this.shadowRoot.querySelector('.left-column');
		this.countriesListComponent = new ListComponent({
			anchor: countriesWrapper,
			actionService: this.actionService,
			state: { countriesView: this.props.state.countriesView }
		});
	}

	renderComponent() {
		this.currentComponent.remove();
		this.currentComponent = new this.state.route.component({
			...this.props,
			anchor: this.mainWrapper
		});
	}

	showTooltip(message) {
		this.tooltip.state = message;
	}

	applyChanges() {
		this.countriesListComponent.state = { countriesView: this.props.state.countriesView };
	}
}

customElements.define("my-component-main", MainComponent);