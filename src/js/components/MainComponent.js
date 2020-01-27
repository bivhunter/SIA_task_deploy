import { mainTemplate } from "../templates/main-template.js";
import { Component } from "./Component.js";
import {ListComponent} from "./ListComponent.js";
import { ListItemComponent} from "./ListItemComponent.js";
import { ListItemWithButtonComponentComponent} from "./ListItemWithButtonComponent.js";
import { EditorComponent } from "./EditorComponent.js";
import {ButtonComponent} from "./ButtonComponent.js";

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
        const cityEditWrapper = this.shadowRoot.querySelector('.add-city');
        cityEditWrapper.innerHTML = '';
        new EditorComponent({
            anchor: cityEditWrapper,
            actionService: this.actionService,
            state: this.state.editorView ,
        });

        new ButtonComponent({
            anchor: cityEditWrapper,
            actionService: this.actionService,
            state: {hidden: !this.state.editorView.hidden, title: '+ Add City'} ,
		})
	}

	renderCountries() {
        const countriesWrapper = this.shadowRoot.querySelector('.left-column');
        this.countriesListComponent = new ListComponent({
            anchor: countriesWrapper,
            actionService: this.actionService,
            state: { listView: this.state.countriesView },
            itemConstructor: ListItemComponent
        });
    }

    renderCities() {
        const citiesWrapper = this.shadowRoot.querySelector('.cities-list');
        this.citiesListComponent = new ListComponent({
            anchor: citiesWrapper,
            actionService: this.actionService,
            state: { listView: this.state.citiesView },
			itemConstructor: ListItemWithButtonComponentComponent
        });
    }

	applyChanges() {
		this.countriesListComponent.state = { listView: this.state.countriesView };
        this.citiesListComponent.state = { listView: this.state.citiesView };
        this.renderAddCity();
	}
}

customElements.define("my-component-main", MainComponent);