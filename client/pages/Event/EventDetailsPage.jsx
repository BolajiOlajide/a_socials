import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import durationConverter from '../../utils/durationConverter';
import { getEvent } from '../../actions/graphql/eventGQLActions';
import NotFound from '../../components/common/NotFound';

// stylesheet
import '../../assets/pages/_event_details-page.scss';

import { ModalContextCreator } from '../../components/Modals/ModalContext';
/**
 * @description Currently contains an event details page layout
 *
 * @class EventDetailsPage
 * @extends {React.Component}
 */
class EventDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    const { events } = this.props;
    this.state = {
      events,
      updated: false,
    };
  }

  /**
   * React Lifecycle hook
   *
   * @memberof EventDetailsPage
   * @returns {null}
   */
  componentDidMount() {
    this.loadEvent();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.events.status && (nextProps.events !== prevState.events && prevState.updated === false)) {
      return { updated: true };
    }

    if (prevState.updated) {
      return { updated: false };
    }
    return null;
  }

  topSection = () => {
    const {
      event,
      event: {
        title, startDate, endDate, venue, timezone, socialEvent, creator: { googleId },
        description, featuredImage,
      },
      activeUser: { id },
    } = this.props;
    const eventData = {
      id: event.id,
      title,
      startDate,
      endDate,
      venue,
      timezone,
      socialEvent,
      description,
      featuredImage,
    };
    const creator = id === googleId;
    return (
      <div className="event-details__top">
        <div className="event-details__section">
          <div className="event-details__event_title">{title}</div>
          <div className="event-details__social_event">{socialEvent.name}</div>
          {creator
            ? <div>
            {this.renderCreateEventButton(eventData)}
            </div>
            : <button type="submit" className="event-details__rsvp_button">
              {' '}
              RSVP &#10004;
            </button>
          }

        </div>
        <div className="event-details__section">
          <div className="event-details__location_time event-details__section">
            <h5>LOCATION</h5> <br />
            <p>{venue}</p>
          </div>
          <div className="event-details__location_time event-details__section">
            <h5>DATE AND TIME</h5> <br />
            <p>{durationConverter(startDate, endDate, timezone)}</p>
          </div>
        </div>
      </div>
    );
  };

  middleSection = () => {
    const {
      event: {
        description,
        socialEvent,
        featuredImage,
        attendSet: { edges },
      },
      activeUser: { id },
    } = this.props;
    const users = edges.length > 0
      ? edges.map(
        object => (object.node.user.googleId === id ? 'You' : `@${object.node.user.slackId} ,`)
      )
      : 'No one';
    return (
      <div className="event-details__middle">
        <div className="event-details__section">
          <div className="event-details__description">
            <h5>DESCRIPTION</h5>
            <article>{description}</article>
          </div>
          <div className="event-details__attending">
            <h5>Attending:</h5>
            <p>{users}</p>
          </div>
          <div className="event-details__tags">
            <h5>Tags:</h5>
            <p>#{socialEvent.name}</p>
          </div>
        </div>
        <div className="event-details__section">
          <img src={featuredImage} alt="event img" className="event-details__picture" />
          <div className="event-details__mini-gallery">
            <img src={featuredImage} alt="event img" className="event-details__gallery-picture" />
            <img src={featuredImage} alt="event img" className="event-details__gallery-picture" />
            <img src={featuredImage} alt="event img" className="event-details__gallery-picture" />
            <img src={featuredImage} alt="event img" className="event-details__gallery-picture" />
          </div>
        </div>
      </div>
    );
  };

  loadEvent() {
    const { match: { params: { eventId } } } = this.props;
    const { getEventAction } = this.props;
    getEventAction(eventId);
  }

  renderCreateEventButton = eventData => (
    <ModalContextCreator.Consumer>
      {
        ({
          activeModal,
          openModal,
        }) => {
          const { categories, uploadImage, updateEvent } = this.props;
          if (activeModal) return null;
          return (
            <button type="button"
              onClick={() => openModal(
                'UPDATE_EVENT', {
                  modalHeadline: 'Update event',
                  formMode: 'update',
                  formId: 'event-form',
                  eventData,
                  categories,
                  createEvent: () => '',
                  updateEvent,
                  uploadImage,
                }
              )}
              className="event-details__edit">
              {' '}
              &#9998;
            </button>);
        }
      }
    </ModalContextCreator.Consumer>
  );  

  render() {
    const { updated } = this.state;
    if (updated) {
      this.loadEvent();
    }
    const { event } = this.props;
    if (!Object.keys(event).length) {
      return <NotFound />;
    }
    return (
      <React.Fragment>
        {this.topSection()}
        {this.middleSection()}
      </React.Fragment>
    );
  }
}
EventDetailsPage.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ eventId: PropTypes.string }) }),
  getEventAction: PropTypes.func,
  events: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.shape({}),
  ]),
  event: PropTypes.shape({
    id: PropTypes.string,
    active: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    venue: PropTypes.string,
    featuredImage: PropTypes.string,
    socialEvent: PropTypes.shape({ name: PropTypes.string }),
    attendSet: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.shape({})) }),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  activeUser: PropTypes.shape({ id: PropTypes.string }),
};
EventDetailsPage.defaultProps = {
  match: {},
  event: [],
  events: [],
  activeUser: { id: '' },
  getEventAction: () => null,
};
const mapDispatchToProps = dispatch => bindActionCreators({ getEventAction: getEvent }, dispatch);
const mapStateToProps = (state) => {
  return {
    event: state.event,
    events: state.events,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsPage);
