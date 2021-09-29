import React from 'react';
import {CounterManagementProps, CounterManagementState } from './interface';

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    render() {
        const { ownerName } = this.props;
        return (
            <div>
                <h1>
                    Counter Management
                    <h2>Owner Name: {ownerName}</h2>
                </h1>
            </div>
        )
    }
}

export default CounterManagement;