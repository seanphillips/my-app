import React from 'react';
import {CounterManagementProps, CounterManagementState } from './interface';

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);

        this.state = {
            counter: 0
        }
    }

handleAddClick = () => {
    this.setState({ counter: this.state.counter + 1 })
}

handleSubClick = () => {
    this.setState({ counter: this.state.counter - 1 })
}

    render() {
        const { ownerName } = this.props;
        const { counter } = this.state;
        return (
            <div>
                <h1>Counter Management</h1>
                <h2>Owner Name: {ownerName}</h2>
                <h2>Counter: {counter}</h2>
                <button onClick={this.handleAddClick}>Add</button>
                <button onClick={this.handleSubClick}>Subtract</button>
            </div>
        )
    }
}

export default CounterManagement;