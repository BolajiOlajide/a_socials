import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDown extends Component {
  state = {
    showDropDown: false,
  };

  componentDidMount() {
    const { dropDownState } = this.props;
    this.setState({
      showDropDown: dropDownState,
    });
  }

  componentDidUpdate(prevProps) {
    const { dropDownState } = this.props;
    if (prevProps.dropDownState !== dropDownState) {
      this.toggleDropDownState();
    }
  }

  toggleDropDownState = () => {
    const { dropDownState } = this.props;
    this.setState({
      showDropDown: dropDownState,
    });
  };

  render() {
    const { showDropDown } = this.state;
    const { children, className } = this.props;
    const classNames = `dropdown ${className && className}`;
    return <div className={classNames}>{showDropDown ? children : children[0]}</div>;
  }
}

DropDown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  dropDownState: PropTypes.bool,
};

DropDown.defaultProps = {
  className: '',
  dropDownState: false,
};

export default DropDown;
