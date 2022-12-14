import Channel from "../domain/channel";
import * as st from 'state-types';

export default class Store implements st.StoreInterface {
    events: st.ChannelInterface;
    actions: st.actions;
    mutations: st.mutations
    state: st.state
    status: string;

    constructor(params: {
        actions: st.actions,
        mutations: st.mutations,
        state: st.state})
    {
        this.events = new Channel();
        this.status = 'resting';
        this.actions = params.actions;
        this.mutations = params.mutations;
        let self = this;
        this.state = new Proxy(params.state, {
            set: function(state: st.state, key, value: st.stateType[]) {
                state[key.toString()] = value;
                console.log(`[${new Date()}] State changed : ${key.toString()}`);
                self.events.publish(`${key.toString()}`);
                self.status = 'mutations';
                return true;
            },
        });
    };

    dispatch(actionKey: string, data?: st.actionData) {
        if(typeof this.actions[actionKey] !== 'function') {
            console.error(`Action ${actionKey} doesn't exists`);
            return false;
        }
        this.status = 'action';
        this.actions[actionKey](this, data);
        return true;
    };

    commit(stateKey: string, mutationKey: string, payLoad: st.mutationPayload) {
        if(typeof this.mutations[mutationKey] !== 'function') {
            console.error(`Mutation ${mutationKey} doesn't exists`);
            return false;
        }
        this.status = 'mutation';
        let newState = this.mutations[mutationKey](this.state[stateKey], payLoad);
        this.state[stateKey] = newState;
        return true;
    }
}
