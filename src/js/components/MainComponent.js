import { mainTemplate } from "../templates/main-template.js";
import { Component } from "./Component.js";
import {ListComponent} from "./ListComponent.js";
import { ListItemComponent} from "./ListItemComponent.js";
import { ListItemWithButtonComponentComponent} from "./ListItemWithButtonComponent.js";

export class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.eventService = props.eventService;
        this.render();
		this.addListeners();
	}

	set state(value) {
		this._state = { ...value
		};
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
		this.renderCountries();
		this.renderCities();
		this.renderAddCity();
	}

    renderAddCity() {
        const countriesWrapper = this.shadowRoot.querySelector('.add-city');
        this.countriesListComponent = new ListComponent({
            anchor: countriesWrapper,
            actionService: this.actionService,
            state: { countriesView: this.state.countriesView },
            itemConstructor: ListItemComponent
        });
	}

	renderCountries() {
        const countriesWrapper = this.shadowRoot.querySelector('.left-column');
        this.countriesListComponent = new ListComponent({
            anchor: countriesWrapper,
            actionService: this.actionService,
            state: { countriesView: this.state.countriesView },
            itemConstructor: ListItemComponent
        });
    }

    renderCities() {
        const citiesWrapper = this.shadowRoot.querySelector('.cities-list');
        this.citiesListComponent = new ListComponent({
            anchor: citiesWrapper,
            actionService: this.actionService,
            state: { countriesView: this.state.citiesView },
			itemConstructor: ListItemWithButtonComponentComponent
        });
    }


	applyChanges() {
		this.countriesListComponent.state = { countriesView: this.state.countriesView };
        this.citiesListComponent.state = { countriesView: this.state.citiesView };
	}
}

customElements.define("my-component-main", MainComponent);