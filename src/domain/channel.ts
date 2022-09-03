import {
    components,
    ChannelInterface,
    ComponentInterface,
} from "state-types";

export default class Channel implements ChannelInterface {
    components: components;

    constructor() {
        this.components = {};
    }

    subscribe(eventName: string, component: ComponentInterface) {
        if(!this.components.hasOwnProperty(eventName)) {
            this.components[eventName] = [];
        }
        return this.components[eventName].push(component)
    }

    publish(eventName: string) {
        if(!this.components.hasOwnProperty(eventName)) {
            return [];
        }        
        return this.components[eventName].map((component: ComponentInterface) => component.render());
    }
}
