class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0
        };
    }

    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState((prevState)=>{
            return {
                count: 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*
console.log("App is running");

const app = {
    title:'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['one','two'] 

};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>  
    </div>
);

const user = {
    name: 'Rom',
    age: '25',
    location: 'NF'
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "anonimous" }</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);

let count = 0;

const addOne = ()=> {
    count++;
    renderCounterApp();
};

const minusOne = ()=> {
    count--;
    renderCounterApp();
};

const reset = ()=> {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');

const renderCounterApp = ()=> {
    const templateThree =(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateThree,appRoot);
}

renderCounterApp();
*/