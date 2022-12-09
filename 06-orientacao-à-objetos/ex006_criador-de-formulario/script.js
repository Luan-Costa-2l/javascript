class Form {
    items = [];
    method = 'GET';
    constructor(container, method, action) {
        this.container = document.querySelector(container);
        this.method = method.toUpperCase();
        this.action = action;
    }

    addItem(item) {
        this.items.push(item);
    }

    render() {
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
        formElement.setAttribute('action', this.action);

        for (let i in this.items) {
            this.items[i].render(formElement);
        }

        this.container.appendChild(formElement);

        // this.items.map((item) => {
        //     let inputElement = document.createElement('input');
        //     inputElement.setAttribute('type', item._type);
        //     inputElement.setAttribute('required', item.required);
        //     inputElement.setAttribute('name', item.name);
        //     inputElement.setAttribute('placeholder', item.label);
        //     formElement.appendChild(inputElement);
        // })
        
    }
}

class Input {

    _type = 'text';
    required = false;

    constructor(name, label) {
        this.name = name;
        this.label = label;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error(`Input ${t} type doesn't exist.`)
        }
    }

    render(formElement) {
        let element = document.createElement('input');
        element.type = this.type;
        element.name = this.name;
        element.placeholder = this.label;
        element.required = this.required;
        formElement.appendChild(element);
    }
}

class Button extends Input {
    constructor(label) {
        super('', label);
        this.type = 'submit';
    }

    render(formElement) {
        let element = document.createElement('input');
        element.type = this.type;
        element.value = this.label;
        formElement.appendChild(element);
    }
}
// IMPLEMENTAÇÃO

// Formulário
let form = new Form('.formArea', 'POST', 'https://www.site.com.br')

// Email
let email = new Input('email', 'Digite seu e-mail');
email.type = 'email';
email.required = true;
form.addItem(email);

// Senha
let password = new Input('password', 'Digite sua senha');
password.type = 'password';
form.addItem(password);

// Botão
let button = new Button('Enviar');
form.addItem(button);

form.render();