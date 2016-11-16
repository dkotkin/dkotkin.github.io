import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

    render() {

        return (
            <header className='header'>
                {/*<div className="wrapper">*/}
                    <div className="navBtn">
                        <span className="bar1"></span>
                        <span className="bar2"></span>
                        <span className="bar3"></span>
                    </div>
                    <div className="logo">
                        <h1 className="logo__text">DK</h1>
                    </div>
                {/*</div>*/}
            </header>
        );
    }
}

