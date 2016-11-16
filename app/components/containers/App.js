import React from 'react';

import Header from '../modules/Header';
import Home from '../containers/Home';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Home />
                    Hello World!
                </main>
            </div>
        );
    }
}