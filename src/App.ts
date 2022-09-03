import Component from './domain/component';

export default class MainApp extends Component {
    constructor() {
        super();
    };

    get template() {
        return `<header>
                    Welcome to the Waterhog SPA framework
                </header>
                <nav>
                    Here comes the navigation
                </nav>
                <main id="page-view"></main>
                <footer>
                    Here comes the footer
                </footer>`;
    }
}
