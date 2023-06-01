import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <nav className='footer bg-dark'>
      <h1>
        <i className='fas fa-code' /> DevConnector
      </h1>
      <p>&copy; {currentYear} DevConnector. All rights reserved.</p>
    </nav>
  );
};

export default Footer;
