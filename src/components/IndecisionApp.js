import React from 'react';
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from './OptionsModal';

export default class IndecisionApp extends React.Component{
    state = { 
        options: [],
        selectedOption: undefined
    };

    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //         // options: props.options
    //     };
    // }

    handleDeleteOptions = () => {
        this.setState(()=> ({ options: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(()=> ({
            selectedOption: undefined
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
             options: prevState.options.filter((option)=> optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const rndNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rndNum];
        this.setState(()=> ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {

        if (!option){
            return 'Enter a valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=>({ options: prevState.options.concat(option) }));
        // this.setState((prevState)=>{
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            this.setState(()=>({options}));
            
        } catch (e) {
            // do nothing
        }

        
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.options.length !== this.state.options.length ){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log('unmount');
    }

    
    render(){

        const title = "Indecision App";
        const subTitle = "Put your life in the hands of a computer.";
        const options = ['one','two','three'];

        return (
            <div>
            <Header  subTitle={subTitle}/>
            <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
            />
            <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
        );
    }
}