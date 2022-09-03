import { elementForm } from "state-types";

export default function routes(path: string): elementForm {
    switch(path) {
        /** 
         * STATIC ROUTES
         */
        case '/' :
        return {
            component: 'example-page',
            attributes: [
                {
                    name: "class",
                    value: "example-attr",
                },
            ],
        };
        default :
        /**
         * DYNAMIC ROUTES
         */
        if(/\/dynamic-.*/.test(path)) {
            return {
                component: 'example-page',
                attributes: [],
            };
         }
    }
    return {
        component: 'example-page',
        attributes: [],
    };
}
