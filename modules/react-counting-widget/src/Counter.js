import React from 'react';
import ReactDOM from 'react-dom';
import CounterService from './CounterService';

const Service = new CounterService();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.service = Service;
        this.service.setCounter(this);
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.service.increment();
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}

export default Counter;
export { Service };
