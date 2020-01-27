import './css/style.css';
import './images/pencil.png';
import './images/basket.png';
import {MainComponent} from "./js/components/MainComponent.js";
import {Store} from "./js/store/Store.js";
import {EventService} from "./js/services/EventService.js";
import {ActionService} from "./js/services/ActionService.js";


if (module.hot) {
    module.hot.accept();
}
try {
    history.pushState( 'app', "", "/countries_app" );
} catch {
    console.log('index.html')
}
const eventService = new EventService();
const store = new Store({eventService});
const actionService = new ActionService({store});

const app = new MainComponent({
    anchor: document.body,
    actionService,
    eventService,
    state: store.state
});