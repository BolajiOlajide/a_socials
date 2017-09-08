import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function PageHeader({ title, buttonTitle }){
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <button>{buttonTitle}</button>
    </div>
  );
}

export default PageHeader;