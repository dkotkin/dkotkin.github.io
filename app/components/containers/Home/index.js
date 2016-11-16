import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

    render() {

        return (
            <div className="container">
                <h1 className="name">DMYTRO KOTKIN</h1>
                <h3 className="position">Junior Front-end Developer</h3>
                <a href="#/" className="col-xs-9 col-md-6 col-lg-4 col-block">
                    <span className="btn btn-primary">View Portfolio</span>
                </a>
            </div>
        );
    }
}

