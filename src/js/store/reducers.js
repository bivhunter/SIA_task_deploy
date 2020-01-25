export function createReducers() {
    return {
        'CHANGE_COUNTRY' : (country_id, state) => {
            return {
                ...state,
                selectedCountry: country_id,
                countriesView: changeCountriesView(state.countriesList, country_id),
                citiesView: filterCities(state.citiesList, country_id),
            }
        },
    }
}

function filterCities( citiesList, country_id ) {
    return [...citiesList.filter((item) => {
        console.log(item.country_id, country_id);
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