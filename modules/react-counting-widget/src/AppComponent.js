import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'

export default class extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>React Counting Widget</h1>
                <Counter />
            </div>
        );
    }
}

