import Component from "../domain/component";

interface ExampleState {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default class ExampleComponent extends Component {
    constructor() {
        super({
            subscribe: "exampleState",
        });
    }

    propsHandler(props: string) {
        console.log(this.getAttribute("props"));
    }

    render() {
        const currentState = window.$store.state["exampleState"] as ExampleState;
        this.innerHTML = `
            <div>
                <h1>Example Component</h1>
                <ul>
                    <li>User ID: ${currentState.userId}</li>
                    <li>ID: ${currentState.id}</li>
                    <li>Title: ${currentState.title}</li>
                    <li>Completed: ${currentState.completed}</li>
                </ul>
            </div>`;
    }
}
