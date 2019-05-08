import React from 'react';
import { connect } from 'react-redux';
import InterestCard from '../../components/cards/InterestCard';
/**
 * @description allows users to select their interests
 *
 * @class Interests
 * @extends {React.Component}
 */
class Interests extends React.Component {
  state = {
    interests: [
      {
        name: 'swimming',
        isSelected: false,
      },
      {
        name: 'football',
        isSelected: false,
      },
      {
        name: 'dancing',
        isSelected: false,
      },
      {
        name: 'cats',
        isSelected: false,
      },
      {
        name: 'pets',
        isSelected: false,
      },
      {
        name: 'amusement',
        isSelected: false,
      },
      {
        name: 'swimming',
        isSelected: false,
      },
      {
        name: 'football',
        isSelected: false,
      },
      {
        name: 'dancing',
        isSelected: false,
      },
      {
        name: 'cats',
        isSelected: false,
      },
      {
        name: 'pets',
        isSelected: false,
      },
      {
        name: 'amusement',
        isSelected: false,
      },
      {
        name: 'movies',
        isSelected: false,
      },
      {
        name: 'zoo',
        isSelected: false,
      },
      {
        name: 'dancing',
        isSelected: false,
      },
      {
        name: 'cats',
        isSelected: false,
      },
      {
        name: 'pets',
        isSelected: false,
      },
      {
        name: 'amusement',
        isSelected: false,
      },
    ]
  }

  /**
   * React Lifecycle hook
   *
   * @memberof Interests
   * @returns {null}
   */
  componentDidMount() {
    // get interests when component mounts
  }


  handleClick = (index, isSelected = true) => {
    const interests = Object.assign(this.state.interests);
    interests[index].isSelected = isSelected;
    this.setState({
      interests,
    });
  }
  
  render() {
    const { interests } = this.state;

    return (
      <div className="interests-page">
        <div className="interests">
          {
            interests.map(({name, isSelected}, index) => {
              return <InterestCard
                key={index}
                index={index}
                name={name}
                active={isSelected}
                handleClick={this.handleClick} />
            })
          }
        </div>
        <footer>
          <button
            className="interests__btn interests__btn-cancel"
            type="button"
          >Cancel</button>
          <button
            className="interests__btn interests__btn-submit"
          >Submit</button>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {})(Interests);
