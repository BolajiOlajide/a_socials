import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the footer element
 * @returns {object} jsx
 */
function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          Copyright © 2017 Andela Socials
        </div>
      </div>
    </footer>
  );
}
export default Footer;
