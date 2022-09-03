import * as st from "state-types";

let mutations: st.mutations = {
    exampleMutation(data, payload) {
        data = payload;
        return data;
    },
}

export default mutations;
