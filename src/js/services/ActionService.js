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
        }

    }

    countrySelected(id) {
        this.store.dispatch('CHANGE_COUNTRY', id);
    }

    dispatch(action, payload) {
        if (this.handlers[action]) {
            this.handlers[action](payload);
        }
    }


}

