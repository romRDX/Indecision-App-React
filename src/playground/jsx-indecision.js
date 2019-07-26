console.log("App is running");

const app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['one','two'] 

};

const onFormSubmit = (e) => {
    e.preventDefault();

    console.log('sub on');

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        render();
    }

};

const onRemoveAll = () =>{
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const rndNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[rndNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = ()=> {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do ?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    app.options.map( (option) => {
                    return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();