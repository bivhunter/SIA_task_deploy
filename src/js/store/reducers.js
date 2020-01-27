export function createReducers() {
    return {
        'CHANGE_COUNTRY' : (country_id, state) => {
            return {
                ...state,
                selectedCountry: country_id,
                countriesView: changeCountriesView(state.countriesList, country_id),
                citiesView: filterCities(state.citiesList, country_id),
                editorView: {hidden: true}
            }
        },
        'OPEN_EDITOR' : (payload, state) => {
            return {
                ...state,
                editorView: {...payload},
                citiesView: [
                    ...state.citiesView.map(item => {
                        return {...item, disable: true};
                    })
                ]
            }
        },
        'ADD_CITY': (payload, state) => {
            const citiesList = addCity(payload, [...state.citiesList], state.selectedCountry);
            return {
                ...state,
                citiesList,
                citiesView: filterCities(citiesList, state.selectedCountry),
                editorView: {hidden: true}
            }
        },
        'CLOSE_EDITOR': (payload, state) => {
            return {
                ...state,
                editorView: {hidden: true},
                citiesView: [
                    ...state.citiesView.map(item => {
                        delete item.disable;
                        return item;
                    })
                ]
            }
        },
        'CHANGE_CITY' : (payload, state) => {
            const citiesList = state.citiesList.map((item) => {
               if (payload.id === item.id) {
                   item = {...payload};
               }
               return item;
            });
            return {
                ...state,
                citiesList,
                citiesView: filterCities(citiesList, state.selectedCountry),
                editorView: {hidden: true}
            }
        },
        'DELETE_CITY' : (payload, state) => {
            const citiesList = state.citiesList.filter((item) => {
               return payload.id !== item.id;
            });
            return {
                ...state,
                citiesList,
                citiesView: filterCities(citiesList, state.selectedCountry),
            }
        }
    }
}

function filterCities( citiesList, country_id ) {
    return [...citiesList.filter((item) => {
        return item.country_id == country_id;
    })];
}

function changeCountriesView( countiesList, country_id ) {
    return [...countiesList.map((item) => {
        if (item.id == country_id) {
            item.selected = true;
        } else {
            item.selected = false;
        }
        return item;
    })];
}

function addCity( data, citiesList, country_id ) {
    let id = citiesList.length + 1;
    for (let i = 1; i < citiesList.length + 1; i++) {
        if ( !citiesList.filter( item => {
            return item.id === i;
        } ).length ) {
            id = i;
            break;
        }
    }

    citiesList.splice(id - 1, 0, {
        id,
        country_id,
        title: data.title,
        desc: data.desc
    });

    return citiesList;
}