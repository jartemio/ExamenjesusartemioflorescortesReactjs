import React, { Component } from 'react'

import '../Css/Main.css';
import MainUserCreate from './MainUserCreate.js';
import MainUserRemove from './MainUserRemove.js';
import MainUserUpdate from './MainUserUpdate.js';
import MainUserView from './MainUserView.js';

export default class Main extends Component {
    render() {
        return <div className="MainDiv">
            <MainUserView></MainUserView>
        </div>
        
        
        
    }
}