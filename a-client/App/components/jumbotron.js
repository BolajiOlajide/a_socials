import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="container hero">
                        <div className="no-margin j-content">
                            <h2> Bringing people Closer </h2>
                            <button className="btn btn-join">Join A Social Club</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron;
