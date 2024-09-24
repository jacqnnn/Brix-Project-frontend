import { Link } from "react-router-dom";

const user = {
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/300x300/1700de73b60f411ad6bfb0c6332aed38.jpg",
  imageSize: 45,
};

function Menu() {
  /* TODO: Add slide bar effect later */
  return (
    <nav className="menu">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul className="menu-links">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <div className="search-icon">🔍</div>
    </nav>
  );
}

// function ContactSec1() {
    //reder without return: const ContactSec1 = () => () 
    // equals const ContactSec1 = () => { return ...}
    // only works in one wrapper
const ContactSec1 = () => (
    <div className="con-sec1">
    <h1>Title</h1>
    {/* why is it not working? */}
    <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email (required)" required />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Text" required></textarea>
        <div className="captcha">
            {/* google captcha api: https://developers.google.com/recaptcha*/}
            <input type="checkbox" required />
            <label>I'm not a robot</label>
        </div>
        <button type="submit">Submit</button>
    </form>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11543.972674034454!2d-79.39031039999999!3d43.6691119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3592b62db7af%3A0xdbdba6480af9d192!2sChick-fil-A!5e0!3m2!1sen!2sca!4v1727212460256!5m2!1sen!2sca" width="600" height="450" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    {/* <button className="google-map">Google map</button> */}
    
    </div>
)
// }

function ContactSec2() {
    return (
        <footer className="con-section2">
          <div className="con-sec2-txt">
            <h2>Title</h2>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="con-sec2-divider"></div>
          <div className="con-sec2-social">
            <h2>Social</h2>
            <div className="social-icons">
              <span>🦋</span>
              <span>🐕</span>
              <span>(●'◡'●)</span>
              <span>🍃</span>
            </div>
          </div>
        </footer>
      );
}

export default function ContactPage() {
    return (
        <div>
          <Menu />
          <ContactSec1 />
          <ContactSec2 />
        </div>
      );
}