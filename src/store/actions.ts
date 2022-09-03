import { actions } from "state-types";
import * as api from "../api";

const actions: actions = {
    getSomethingFromJSONPlaceholder(context, data) {
        api.getSomething(data as string)
        .then(response => {
            if(response.ok) {
                response.json().then((json) => {
                    context.commit("exampleState", "exampleMutation", json);
                });
            }
        }).catch();
    },
}

export default actions;
