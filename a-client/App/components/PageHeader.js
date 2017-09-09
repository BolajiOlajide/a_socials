import React, { Component } from 'react';
import { Link } from 'react-router-dom';



function PageHeader({ image, title, buttonTitle }){
  const divStyle = {
    backgroundImage: 'url(' + image + ')',
  };
  return (
    <div className="page-header" style={divStyle}>
      <div className="club-title">
        <h1>{title}</h1>
        <button>{buttonTitle}</button>
      </div>
      <div className="black-cover"></div>
      
    </div>
  );
}

export default PageHeader;