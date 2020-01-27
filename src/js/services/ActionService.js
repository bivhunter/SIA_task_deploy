//accepts actions, handles it and send result to this.store

export class ActionService {
    constructor(props) {
        this.store = props.store;
        this.initHandlers();
        this.countrySelected(1);
    }

    initHandlers() {
        this.handlers = {
            'countrySelected': (id) => this.countrySelected(id),
            'addCityMode': () => this.openCityMode(),
            'submitAddCity': (data) => this.submitCityAdd(data),
            'cancelAddCity': () => this.cancelCityAdd(),
            'editCityMode': (data) => this.editCityMode(data),
            'deleteCity': (data) => this.deleteCity(data),
        }
    }

    dispatch(action, payload) {
        if (this.handlers[action]) {
            this.handlers[action](payload);
        }
    }

    countrySelected(id) {
        this.store.dispatch('CHANGE_COUNTRY', id);
    }

    openCityMode() {
        this.store.dispatch('OPEN_EDITOR', {
           hidden: false,
           title: "",
           desc: ""
        });
    }

    submitCityAdd(data) {
        if (data.id) {
            this.store.dispatch('CHANGE_CITY', data);
            return;
        }
        this.store.dispatch('ADD_CITY', data);
    }

    cancelCityAdd() {
        this.store.dispatch('CLOSE_EDITOR');
    }

    editCityMode(data) {
        this.store.dispatch('OPEN_EDITOR', {
            ...data,
            hidden: false,
        });
    }

    deleteCity(data) {
        this.store.dispatch('DELETE_CITY', data);
    }
}

