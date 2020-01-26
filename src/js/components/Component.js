export class Component extends HTMLElement {
    constructor(props){
        super();
        this.props = props;
        this.attachShadow({mode: 'open'});
        this.anchor = props.anchor;
        this.actionService = props.actionService;
        this.onInit();
        this.state = props.state;
    }

    onInit() {  }

    set state(value) {
        this._state = { ...value };
        this.render();
    }

    get state() {
        return this._state;
    }

    set template(template) {
        this._template = template.content.cloneNode( true );
        this.shadowRoot.appendChild(this._template);
    }

    get template() {
        return this._template;
    }
}

