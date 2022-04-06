import facebookLogo from '../assets/fb-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import linkedInLogo from '../assets/linked-in-logo.png';

export default function Footer() {
  return (
    <footer style={{ background: '#818181' }}>
      <span>&copy; Spiralytics 2015 | All rights reserved.</span>

      <div className="links">
        <ul>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="soc-med">
          <img src={facebookLogo} alt="Facebook" />
          <img src={twitterLogo} alt="Twitter" />
          <img src={linkedInLogo} alt="LinkedIn" />
        </div>
      </div>
    </footer>
  );
}
