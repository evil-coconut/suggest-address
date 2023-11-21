import { ref } from 'vue'
import config from '../../SuggestAddressConfig.json'
import {errorList} from './ErrorList.js'

export const items = ref(new Array());
export const error = ref('');

export async function sendRequest(query) {
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + config.authenticationToken
        },
        body: JSON.stringify({ query: query })
    };

    fetch(url, options)
    .then(response => (response.ok) ? response.json() : new Promise((resolve, reject) => reject(response)))
    .then(result => items.value = result.suggestions.map(x => x.value), result => error.value = (result.status >= 500) ? errorList[500] : errorList[result.status])
    .catch(error => console.log(error))
}