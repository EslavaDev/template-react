
import React, { Component } from 'react';
import logo from '../logo.png';

export default class App extends Component {

    render() {
        return (
            <div className='container'>                
                <img className='logo' src={logo} />
                <h1 className='title'>React Starters</h1>
            </div>
        );
    }
}