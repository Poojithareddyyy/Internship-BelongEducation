import React, { useState } from 'react';
import '../styles/FAQs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const faqContent = {
  "Vision Care Principles": [
    {
      question: "Is there evidence that supports the Dot Glasses approach to vision care?",
      answer: "Yes, the approach is backed by field studies and proven effective in underserved communities. It restores vision affordably and efficiently where access is limited.",
    },
    {
      question: "Can a “good enough” prescription damage someone’s vision?",
      answer: "No, a basic prescription improves vision safely for daily tasks. It won't damage eyesight but isn't a substitute for complex eye care.",
    },
    {
      question: "Are Dot Glasses suitable for young children?",
      answer: "Dot Glasses are generally suited for individuals aged 10 and above. For younger children, professional eye care is recommended.",
    },
    {
      question: "How do you deal with astigmatism?",
      answer: "Dot Glasses currently do not correct astigmatism. Those with astigmatism are advised to consult an eye care professional.",
    },
    {
      question: "What do you do if someone has a cataract?",
      answer: "Cataracts require medical treatment and surgery, not just glasses. Individuals with cataracts are referred to a healthcare provider.",
    },
  ],
  "Product Details and Training": [
    {
      question: "How long does it take to train someone to start selling/distributing DOT Glasses?",
      answer: "Training typically takes just a few hours. It's simple and designed for quick, hands-on learning.",
    },
    {
      question: "If we have optometrists to measure vision accurately, can Dot Glasses provide a wider range of lenses to meet the prescription needs?",
      answer: "Dot Glasses use pre-manufactured lenses for cost-efficiency. They do not offer a wide prescription range like traditional optometry.",
    },
    {
      question: "Does a Dot Glasses representative need to be present for training?",
      answer: "No, training can be done remotely using online materials and manuals. On-site presence is optional.",
    },
    {
      question: "What do you do if someone has a cataract?",
      answer: "They are referred to a clinic or hospital for surgical evaluation. Dot Glasses cannot correct vision impaired by cataracts.",
    },
    {
      question: "Are Dot Glasses certified?",
      answer: "Yes, they comply with international optical and safety standards. Certification ensures quality and reliability.",
    },
  ],
};

const faqs = [
  {
    question: "If we have optometrists to measure vision accurately, can Dot Glasses provide a wider range of lenses to meet the prescription needs?",
    answer: "Yes, Dot Glasses can accommodate accurate prescriptions measured by certified optometrists. While the core offering uses standardized lenses for quick distribution, the organization can provide a wider range of lenses when professional prescriptions are available.",
  },
  {
    question: "Are Dot Glasses certified?",
    answer: "Yes, Dot Glasses are ISO-certified and comply with international safety and optical standards. They are approved for global distribution and meet the requirements for basic vision correction solutions in low-resource settings.",
  },
  {
    question: "How long does it take to train someone to start selling/distributing DOT Glasses?",
    answer: "Training typically takes between 1 to 2 days. The process is designed to be simple and intuitive, enabling local entrepreneurs or health workers with minimal experience to begin vision testing and distributing glasses effectively.",
  },
  {
    question: "Does a Dot Glasses representative need to be present for training?",
    answer: "No, a physical presence is not necessary. Dot Glasses provides a comprehensive training toolkit, including printed materials and video tutorials. Remote support is also available to guide local teams through the process.",
  },
  {
    question: "What do you do if someone has a cataract?",
    answer: "Cataracts require medical or surgical treatment and cannot be corrected with eyeglasses alone. If a person is found to have a cataract during screening, they are referred to the nearest available healthcare provider or clinic for further diagnosis and treatment options.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (question) => {
    setActive(active === question ? null : question);
  };

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="faq-wrapper">
        {Object.entries(faqContent).map(([title, questions], i) => (
          <div className="faq-section" key={i}>
            <h2>{title}</h2>
            {questions.map((q, j) => (
              <div
                className={`faq-item ${active === q.question ? 'active' : ''}`}
                key={j}
              >
                <div className="faq-question" onClick={() => toggle(q.question)}>
                  <span className="icons">{active === q.question ? '▼' : '▶️'}</span>
                  {q.question}
                </div>
                {active === q.question && (
                  <div className="faq-answer">
                    <p>{q.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="faq-callback-container">
          <div className="faq-section">
            <h2>Common Queries</h2>
            {faqs.map((item, index) => (
              <div
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span className="symbol">{activeIndex === index ? '−' : '?'}</span>
                  {item.question}
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="callback-form">
            <h2>Request a Callback</h2>
            <p>Fill in the form below to request a callback to discuss your move.</p>
            <div className="form-row">
              <input type="text" placeholder="John *" />
              <input type="text" placeholder="Doe *" />
            </div>
            <input type="email" placeholder="johndoe@company.com *" />
            <textarea placeholder="Your message" rows="4" />
            <button>Send enquiry</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Dot Glasses Logo" className="footer-logo" />
            <p>Empowering vision for all.</p>
          </div>

          <div className="footer-center">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Product</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/our-impact">Our Impact</a></li>
              <li><a href="/wherewework">Where We Work</a></li>
              <li><a href="/faqs">Faqs</a></li>
              <li><a href="/lens-concept">Lens Concept</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/dotglasses/"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://x.com/dotglasses"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.instagram.com/dotglasses_international/"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FAQs;
