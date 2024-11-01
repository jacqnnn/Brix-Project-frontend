import { Link } from "react-router-dom";
import React, { useState } from 'react';

const user = {
  imageUrl:
    "https://lastfm.freetls.fastly.net/i/u/300x300/1700de73b60f411ad6bfb0c6332aed38.jpg",
  imageSize: 45,
};

function Menu() {
  /* TODO: Add slide bar effect later */
  return (
    <nav className="menu">
      <Link to="/register">
      <img
        className="avatar"
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      </Link>
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

function SupportSection1() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
    const questions = [
      { question: 'Question 1', answer: "text1" },
      { question: 'Question 2', answer: "text2" },
      { question: 'Question 3', answer: "text3" },
      { question: 'Question 4', answer: "text4" },
      ]
    // object for every elt. e.g: {question: 'Question1', answer: 'text1'}
    //need to check data structure. need to deconstruct object
    return (

        <div className="support-sec1">
            <h1>Title</h1>
            
            {questions.map((item, index) => (
                <div key={index} className="supp-sec1-item">
                    <div className="supp-sec1-header" onClick={() => toggle(index)}>
                        {item.question}
                        <span>{openIndex === index ? '▼' : '▶'}</span>
                    </div>
                    {openIndex === index && <div className="supp-sec1-txt">{item.answer}</div>}
                </div>
            ))}
        </div>
    );
}

function SupportSection2() {
    return (
        <footer className="supp-section2">
          <div className="supp-sec2-txt">
            <h2>Title</h2>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </div>
          <div className="supp-sec2-divider"></div>
          <div className="supp-sec2-social">
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

export default function SupportPage() {
    return (
        <div>
          <Menu />
          <SupportSection1 />
          <SupportSection2 />
        </div>
      );
}