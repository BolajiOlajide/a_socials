import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import profile from '../../assets/img/profile_picture.jpg';

class UserProfile extends Component {
  state = {
    toggleDropDown: false,
  };

  handleShowMenus = () => {
    const { toggleDropDown } = this.state;
    this.setState({
      toggleDropDown: !toggleDropDown,
    });
  };

  render() {
    console.log('this.state :', this.state);
    const { toggleDropDown } = this.state;
    return (
      <DropDown className="dropdown-toggle navbar-right nav-profile" dropDownState={toggleDropDown}>
        <button type="button" className="btn nav-profile__button" onClick={this.handleShowMenus}>
          <img className="nav-profile__img" src={profile} alt="User Profile" />
          <span className="nav-profile__username">Bolaji Olajide</span>
          <span className="caret nav-profile__dropdown-icon" />
        </button>
        <ul className="dropdown-menu nav-profile__list-menus">
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </DropDown>
    );
  }
}

export default UserProfile;
