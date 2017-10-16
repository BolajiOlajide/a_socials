import React from 'react';

function ClubInfo({ joinClub }) {
  return (
    <div className="click-bait">
      <div className="container">
        <div className="mini-header">
          <div className="title">
            Swimming Meetups
            <small>For those who no matter what, stay afloat...</small>
          </div>
          <a
            href="#"
            className="btn btn-primary btn-lg"
            onClick={joinClub}
          >
          Join
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClubInfo;
