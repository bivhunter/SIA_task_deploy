import {
    createReducers
} from "./reducers.js";

export class Store {
    constructor(props) {
        this.eventService = props.eventService;
        this.reducers = createReducers();
        this.state = {
            citiesList: [
                { "id": 1, "country_id": 1, "title": "London", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 2, "country_id": 1, "title": "Liverpool", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 3, "country_id": 2, "title": "Paris", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 4, "country_id": 3, "title": "Madrid", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 5, "country_id": 4, "title": "Berlin", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 6, "country_id": 4, "title": "Munich", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                { "id": 7, "country_id": 4, "title": "Hamburg", "desc": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe." },
                ]
            ,
            countriesList: [
                {
                    "id": 1,
                    "title": "United Kingdom",
                    "text": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe."
                },
                {
                    "id": 2,
                    "title": "France",
                    "text": "France, officially the French Republic, is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."
                },
                {
                    "id": 3,
                    "title": "Spain",
                    "text": "Spain, officially the Kingdom of Spain, is a sovereign state located on the Iberian Peninsula in southwestern Europe."
                },
                {
                    "id": 4,
                    "title": "Germany",
                    "text": "Germany, officially the Federal Republic of Germany, is a federal parliamentary republic in western - central Europe."
                }
            ]

        };
    }

    dispatch(actionType, payload, message) {
        if (this.reducers[actionType]) {
            this.state = this.reducers[actionType](payload, this.state, message);
        }
        this.eventService.publish('stateChanged', this.state);
    }
}

