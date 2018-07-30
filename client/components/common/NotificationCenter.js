import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import BellIcon from '../../assets/icons/BellIcon';
import DropDown from './DropDown';
import Notifier from './Notifier';
import Notifications from '../fixtures/notifications';

class NotificationCenter extends Component {
  state = {
    toggleDropDown: false,
  };

  handleToggleClick = () => {
    const { toggleDropDown } = this.state;
    this.setState({
      toggleDropDown: !toggleDropDown,
    });
  };

  render() {
    const { toggleDropDown } = this.state;
    return (
      <DropDown className="notification-container" dropDownState={toggleDropDown}>
        <button
          type="button"
          className="btn btn-default navbar-right notification-container__button"
          aria-label="Left Align"
          onClick={this.handleToggleClick}
        >
          {BellIcon}
        </button>
        <div className="dropdown-container notification-container__list-notifications">
          <CSSTransitionGroup
            transitionName="notification"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
          >
            {Notifications.map(notification => (
              <Notifier notification={notification} key={notification.id} />
            ))}
          </CSSTransitionGroup>
        </div>
      </DropDown>
    );
  }
}

export default NotificationCenter;
