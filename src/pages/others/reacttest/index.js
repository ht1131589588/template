import React, { Component } from 'react';

class TestReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            text: 'Hello, world!'
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    static getDerivedStateFromProps(props, state) {
        // console.log(state)
        // return null;
        return {
            text: 'Hello, world!' + state.date
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    render () {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default TestReact;