'use strict';

console.log("App is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['one', 'two']

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    console.log('sub on');

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        render();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var rndNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[rndNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do ?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
