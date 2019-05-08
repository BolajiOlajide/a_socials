import React, { Component } from 'react';
import PropTypes from 'prop-types';

const InterestCard = (props) => {
  const {
    name,
    index,
    active,
    handleClick
  } = props;

  return (
    <div onClick={() => handleClick(index)} className={`interests-card ${active ? 'active' : ''}`}>
      <p>{name}</p>
      {!!active && <span className="interests-card__icon-close"  onClick={
        (e) => {
          e.stopPropagation();
          handleClick(index, false)
        }
      }>
        <div className="interest-icon">close</div>
      </span>}
      {!active && <span className="interests-card__icon-check interest-icon">check</span>}
    </div>
  );
};

InterestCard.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default InterestCard;
