import MainApp from '../App';
import ExamplePage from './ExamplePage';

export default function InstallPages() {
    customElements.define('main-app', MainApp);
    customElements.define('example-page', ExamplePage);
}
