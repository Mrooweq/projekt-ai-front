import React, {Component} from 'react';
import './index.css';
import Header from "./header/Header";
import Menu from "./menu/Menu";
import Display from "./display/Display";
import { Column, Row } from 'simple-flexbox';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Column flexGrow={1}>
                    <Row vertical='center'>
                        <Column flexGrow={1} horizontal='stretch'>
                            <div>
                                <Menu/>
                            </div>
                        </Column>
                        <Column flexGrow={7} horizontal='stretch'>
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
