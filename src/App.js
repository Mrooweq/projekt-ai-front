import React, {Component} from 'react';
import './index.css';
import Header from "./component/header/Header";
import Menu from "./component/menu/Menu";
import Display from "./component/display/Display";
import { Column, Row } from 'simple-flexbox';

class App extends Component {
    render() {
        return (
                <div>
                    <Header/>

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
                </div>
        );
    }
}

export default App;
