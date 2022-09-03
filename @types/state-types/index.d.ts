declare module 'state-types' {
    export interface ChannelInterface {
        components: components;
        subscribe: (eventName: string, component: ComponentInterface) => number;
        publish: (eventName: string) => void[];
    }
    
    export interface StoreInterface {
        events: ChannelInterface;
        actions: actions;
        mutations: mutations;
        state: state;
        status: string;
        dispatch: (actionKey: string, data: actionData) => boolean;
        commit: (stateKey: string, mutationKey: string, payLoad: mutationPayload) => boolean;
    }

    export interface ComponentInterface {
        get template(): string;
        connectedCallback: () => void;
        render: () => void;
        dispatch: () => void;
        addEvents: () => void;
        addStyles: () => void;
        propsHandler: (props: string) => void;
    }

    export type stateType = object | object[];
    export type actionData = object | string;
    export type mutationPayload = object | object[];

    export type action = (context: StoreInterface, data?: actionData) => void;
    export type state = {[index: string]: stateType};
    export type mutation = (state: stateType, payload: mutationPayload) => stateType;

    export type components = {[index: string]: ComponentInterface[]};
    export type actions = {[index: string]: action};
    export type mutations = {[index: string]: mutation};

    export type elementForm = {component: string, attributes: {name: string, value: string}[]}
    export type routes = {[index: string]: elementForm}
}
