import React, {Component} from 'react';
import './index.css';
import Header from "./component/header/Header";
import Menu from "./component/menu/Menu";
import Display from "./component/display/Display";
import { Column, Row } from 'simple-flexbox';
import BackgroundImage from 'react-background-image-loader';
import detailsIcon from './image/details_icon.png';
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        const url = 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

        return(
            <BackgroundImage
                src={url}
                placeholder={detailsIcon}>
                <div className="test">
                    <Header/>

                    <Router>
                        <Column flexGrow={1}>
                            <Row vertical='stretch'>
                                <Column flexGrow={1}
                                        horizontal='stretch'
                                        vertical='start'>
                                    <div>
                                        <Menu/>
                                    </div>
                                </Column>
                                <Column flexGrow={7}
                                        horizontal='stretch'
                                        vertical='start'>
                                    <div>
                                        <Display/>
                                    </div>
                                </Column>
                            </Row>
                        </Column>
                    </Router>
                </div>
            </BackgroundImage>
        );
    }
}

export default App;
