import React from 'react';

function ClubInfo({ joinClub, club }) {
  return (
    <div className="click-bait">
      <div className="container">
        <div className="mini-header">
          <div className="title">
            {club.name}
            <small>{club.description}</small>
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
