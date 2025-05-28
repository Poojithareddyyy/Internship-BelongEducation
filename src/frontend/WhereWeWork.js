import React from "react";
import "../styles/WhereWeWork.css";
import mesele from "../assets/teams/mesele.jpeg"
import bradley from "../assets/teams/bradley.jpeg"
import sudip from "../assets/teams/sudip.jpeg"
import mmekidmfon from "../assets/teams/mmekidmfon.jpeg"
import angela from "../assets/teams/angela.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';

const countries = [
  {
    name: "Ethiopia",
    director: "Mesele Kitabo",
    description:
      "Ethiopia has made significant progress in economic growth and expanding healthcare, including vision care, but many underserved communities still lack basic eye health services. The 2007 National Survey reported 1.6% blindness and 3.7% low vision prevalence, with uncorrected refractive errors as the leading cause. With only around 150 ophthalmologists for over 105 million people, the need for expanded vision care access remains urgent.",
    image: mesele,
  },
  {
    name: "Kenya",
    director: "Bradley Heslop",
    description:
      "Despite Kenya's status as East Africa’s economic hub, rising inequality leaves many in rural and urban slum areas without access to basic healthcare and vision care, with around 8 million people suffering from uncorrected poor vision. However, a wave of startups and NGOs are stepping in, embodying Kenya's entrepreneurial spirit to serve underserved populations. Dot Glasses is partnering with these organizations to bring essential vision care directly to those in need.",
    image: bradley,
  },
  {
    name: "Nepal",
    director: "Sudip Koirala",
    description:
      "Nepal, despite economic growth, still faces widespread poverty and geographic barriers that severely limit access to healthcare, especially vision care, with 13 districts lacking any eyecare facilities and only 140 ophthalmologists mostly concentrated in urban areas. The challenging terrain and poor infrastructure make eyeglass distribution difficult and expensive. In response, Dot Glasses Nepal and its partners are working alongside the Ministry of Health to expand access to affordable eyeglasses in line with WHO guidelines.",
    image: sudip,
  },
  {
    name: "Nigeria",
    director: "Mmekidmfon Umnanah",
    description:
      "Nigeria, while being West Africa’s largest economy and most populous nation, still faces major gaps in primary healthcare access, especially in rural areas. Uncorrected refractive errors account for the majority of visual impairments, causing 78% of mild and 57% of moderate cases. Since August 2020, Dot Glasses has been addressing this issue through partnerships and a dedicated local distribution network.",
    image: mmekidmfon,
  },
  {
    name: "Uganda",
    director: "Angela Mwebaze",
    description:
      "Despite Uganda's progress toward Universal Health Coverage, it remains among the top 20 countries with the highest unmet need for vision correction, with fewer than 10 optometrists serving 45 million people. Dot Glasses began its work in Uganda in August 2020, using its Radical solution to address the severe shortage of eye care professionals. It also partners with existing providers to deliver affordable glasses to underserved communities.",
    image: angela,
  },
];

const WhereWeWork = () => {
  return (
    <><div className="where-we-work">
          <h2 className="page-title">Where We Work</h2>
          {countries.map((country, index) => (
              <article
                  key={country.name}
                  className={`work-card ${index % 2 === 0 ? "left-img" : "right-img"}`}
              >
                  <img
                      src={country.image}
                      alt={`Director ${country.director} from ${country.name}`}
                      onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/default-profile.jpg"; // Fallback image in public/
                      } } />
                  <div className="card-text">
                      <h3>{country.name}</h3>
                      <h4>{country.director}</h4>
                      <p>{country.description}</p>
                  </div>
              </article>
          ))}
      </div><footer className="footer">
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
                          <a href="https://ke.linkedin.com/company/dotglasses"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                      </div>
                  </div>
              </div>

              <div className="footer-bottom">
                  <p>© {new Date().getFullYear()} Dot Glasses. All rights reserved.</p>
              </div>
          </footer></>
  );
};

export default WhereWeWork;
