import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = props => {
  const { heading, children, openModal, closeModal } = props;
  let toggle;

  if (!openModal) {
    toggle = 'none';
  } else {
    toggle = 'flex';
  }
  return (
    <div className="modal" style={{ display: toggle }}>
      <div className="modal_content">
        <header className="modal_header">
          <p>{heading}</p>
          <button type="button" onClick={closeModal}>
            &times;
          </button>
        </header>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  heading: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired
};

export default ModalWrapper;
