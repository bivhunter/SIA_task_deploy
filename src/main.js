//import './css/style.css';
import {MainComponent} from "./js/MainComponent.js";


if (module.hot) {
    module.hot.accept();
}

const app = new MainComponent({anchor: document.body});