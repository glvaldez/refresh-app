import React from 'react';
import '../../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Discover</h3>
          <a href="#">Staff Picks</a>
          <a href="#">Topics</a>
          <a href="#">Collections</a>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <a href="#">Our Story</a>
          <a href="#">Careers</a>
          <a href="#">Help</a>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;