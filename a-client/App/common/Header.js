import React, { Component } from 'react';
import { connect } from 'react-redux';
import {displayEvent} from '../../actions/testActions';

class Header extends Component {
    display(){
        this.props.displayEvent();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top nav-menu no-margin no-padding">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Andela Socials</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                                <li><a href="#" onClick={this.display.bind(this)}>Social Clubs</a></li>
                                <li><a href="#">{this.props.number}</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        number: state.number
    };
}

export default connect(mapStateToProps, {displayEvent})(Header);