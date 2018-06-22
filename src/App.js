import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Textbox } from './components/shared/textbox/Textbox';
import { Button } from './components/shared/Button/Button';
import { RadioButton } from './components/shared/RadioButton/RadioButton';

class App extends Component {
    constructor() {
        super();
        let option = { answer: '', status: false };
        this.state = {
            arrayvar: [
                <div key={1} className="">
                    <p>
                        Option 1:{' '}
                        <Textbox
                            id="TextboxOption1"
                            name="Option1"
                            ariaLabelledBy="Option1"
                            placeholder="Please enter possible answer here"
                            width="500px"
                            onChange={this.setOption}
                            index="0"
                        />
                        <RadioButton id="radio1" value="radio1" index="0" onChange={this.setOptionTrue} />
                    </p>
                </div>
            ],
            arrayLength: 1,
            question: '',
            options: [option]
        };
    }

    addmore = () => {
        this.setState({
            //arrayvar: [...this.state.arrayvar, <div key={3} className=""><p>Option 3: <Textbox id="TextboxOption3" name="Option3" ariaLabelledBy="Option3" placeholder="Please enter possible answer here" width="500px"  /></p></div>]
            arrayvar: this.state.arrayvar.concat([
                <div key={this.state.arrayLength} className="">
                    <p>
                        Option {this.state.arrayLength}:{' '}
                        <Textbox
                            id={'TextboxOption' + this.state.arrayLength}
                            name="Option2"
                            ariaLabelledBy="Option"
                            placeholder="Please enter possible answer here"
                            width="500px"
                            onChange={this.setOption}
                            index={this.state.arrayLength}
                        />
                        <RadioButton
                            id={'radio' + this.state.arrayLength}
                            value={'radio' + this.state.arrayLength}
                            index={this.state.arrayLength}
                            onChange={this.setOptionTrue}
                        />
                    </p>
                </div>
            ])
        });
        this.setState({
            arrayLength: this.state.arrayLength + 1
        });
    };

    setQuestion = event => {
        this.setState({
            question: event.target.value
        });
    };

    setOption = (event, index) => {
        //let val = { [index - 1]: { answer: event.target.value } };
        let newOptions = [...this.state.options];
        newOptions[index - 1] = { ...this.state.options[index - 1], answer: event.target.value };
        this.setState({
            options: newOptions
        });
    };

    setOptionTrue = index => {
        let newOptions = [...this.state.options];
        newOptions = { ...this.state.options, status: false };
        newOptions[index - 1] = { ...this.state.options[index - 1], status: true };
        this.setState({
            options: newOptions
        });
    };

    save = () => {
        fetch('http://localhost/Test/survey/postitem', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                questionScript: '<quescript><question>quw</question><option>rter</option></quescript>',
                date: '20/05/2018',
                state: 1,
                status: 'Live',
                createdBy: 'ravi gupta'
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                console.error(error);
            });
    };
    render() {
        // options.push(<div key={3} className=""><p>Option 3: <Textbox id="TextboxOption3" name="Option3" ariaLabelledBy="Option3" placeholder="Please enter possible answer here" width="500px"  /></p></div>)
        console.log({ state: this.state });
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <img src={logo} className="App-logo" alt="logo" />{' '}
                        <span className="App-title">Vserv Survey</span>
                    </div>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="">
                    <p>
                        Question:{' '}
                        <Textbox
                            id="questionTextbox"
                            name="question"
                            ariaLabelledBy="Question"
                            placeholder="Please enter question here"
                            width="500px"
                            onChange={this.setQuestion}
                        />
                    </p>
                </div>
                <div>{this.state.arrayvar}</div>
                <div>
                    <Button id="addmoreId" name="ADD MORE" text="ADD MORE OPTION" onClick={this.addmore} />
                </div>
                <hr />
                <div>
                    <Button id="submit" name="Save" text="SAVE" onClick={this.save} />
                </div>
            </div>
        );
    }
}

export default App;
