import React from "react";
import "../styles/OurTeam.css";
import adam from "../assets/teams/adam.jpeg";
import bradley from "../assets/teams/bradley.jpeg";
import member1 from "../assets/teams/mary.jpeg";
import member2 from "../assets/teams/peter.jpeg";
import member3 from "../assets/teams/mercy.jpeg";
import member4 from "../assets/teams/michael.jpeg";
import member5 from "../assets/teams/faiza.jpeg";
import member6 from "../assets/teams/charlene.jpeg";
import member7 from "../assets/teams/sharon.jpeg";
import member8 from "../assets/teams/origa.jpeg";
import member9 from "../assets/teams/lucy.jpeg";
import member10 from "../assets/teams/frank.jpeg";
import member11 from "../assets/teams/joy.jpeg";
import member12 from "../assets/teams/monica.jpeg";
import member13 from "../assets/teams/millicent.jpeg";
import member14 from "../assets/teams/peninahd.jpeg";
import member15 from "../assets/teams/boniface.jpeg";
import member16 from "../assets/teams/philip.jpeg";
import member17 from "../assets/teams/mark.jpeg";
import member20 from "../assets/teams/kate.jpeg";
import member21 from "../assets/teams/james.jpeg";
import member22 from "../assets/teams/angela.jpeg";
import member23 from "../assets/teams/mesele.jpeg";
import member24 from "../assets/teams/mmekidmfon.jpeg";
import member25 from "../assets/teams/sudip.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const executives = [
  {
    name: "Adam Boxer",
    title: "Co-CEO & Co-founder",
    image: adam,
    linkedin: "https://www.linkedin.com/in/adam-boxer-636715246/",
   
  },
  {
    name: "Bradley Heslop",
    title: "Co-CEO & Co-founder",
    image: bradley,
    linkedin: "https://www.linkedin.com/in/bradleyheslop/",
    
  },
];

const headquarters = [
  {
    name: "Mary Waithaka",
    title: "Admin & Finance Officer",
    image: member1,
    linkedin: "https://www.linkedin.com/in/mary-waithaka-6ab886151/",
  },
  {
    name: "Peter Mwaura",
    title: "Head of Sales & Business Development",
    image: member2,
    linkedin: "https://www.linkedin.com/in/peter-mwaura/?originalSubdomain=ke",
  },
  {
    name: "Mercy Mwangi",
    title: "Training Manager",
    image: member3,
    linkedin: "https://www.linkedin.com/in/mercywmwangi/?originalSubdomain=ke",
  },
  {
    name: "Michael Omondi",
    title: "Head of Finance and Operations",
    image: member4,
    linkedin: "https://www.linkedin.com/in/michael-omondi0035/",
  },
  {
    name: "Faiza Saida",
    title: "Optometrist Associate",
    image: member5,
    linkedin:
      "https://www.linkedin.com/in/faizah-saida-2984021b6/?originalSubdomain=ke",
  },
  {
    name: "Charlene Yego",
    title: "Finance and Admin Officer",
    image: member6,
    linkedin:
      "https://www.linkedin.com/in/yego-charlene-jepchirchir/?originalSubdomain=ke",
  },
  {
    name: "Sharon Naliaka",
    title: "Sales & Accounts Management Associate",
    image: member7,
    linkedin:
      "https://www.linkedin.com/in/sharon-naliaka-8514bb265/?originalSubdomain=ke",
  },
  {
    name: "Ochieng' Origa",
    title: "Sales and Account Management Executive",
    image: member8,
    linkedin:
      "https://www.linkedin.com/in/ochieng-origa-4541b0184/?originalSubdomain=ke",
  },
  {
    name: "Lucy Mwangi",
    title: "Marketing and Content Coordinator",
    image: member9,
    linkedin: "https://www.linkedin.com/in/lucy-mwangi-7a3351197/",
  },
  {
    name: "Frank Gidali",
    title: "Executive Assistant to Adam",
    image: member10,
    linkedin:
      "https://www.linkedin.com/in/francis-gidali-463036157/?originalSubdomain=ke",
  },
  {
    name: "Joy Chibole",
    title: "Executive Assistant to Bradley",
    image: member11,
    linkedin: "https://www.linkedin.com/in/joy-chibole-b13b34247/",
  },
  {
    name: "Monicah Kimanthi",
    title: "International Account Manager",
    image: member12,
    linkedin:
      "https://www.linkedin.com/in/monica-kimanthi-30a79a1a7/?originalSubdomain=ke",
  },
];

const fieldteam = [
  {
    name: "Millicent Oundo",
    title: "Field Officer",
    image: member13,
    linkedin:
      "https://www.linkedin.com/in/millicent-oundo-12342a304/?originalSubdomain=ke",
  },
  {
    name: "Peninah Misanya",
    title: "Field Officer",
    image: member14,
    linkedin:
      "https://www.linkedin.com/in/peninah-misanya-114071305/?originalSubdomain=ke",
  },
  {
    name: "Bonface Wabwire",
    title: "Field Officer",
    image: member15,
    linkedin: "https://www.linkedin.com/in/bonface-wabwire-2b6229262/",
  },
];

const board = [
  {
    name: "Philip Staehelin",
    title: "Co-Chair & Founder",
    image: member16,
    linkedin:
      "https://www.linkedin.com/in/staehelin/",
  },
  {
    name: "Mark Hudson",
    title: "Co-Chair & Co-Founder",
    image: member17,
    linkedin:
      "https://www.linkedin.com/in/mhhudson/?originalSubdomain=uk",
  },
  {
    name: "Bradley Heslop",
    title: "Co-CEO & Co-Founder",
    image: bradley,
    linkedin: "https://www.linkedin.com/in/bradleyheslop/",
  },
   {
    name: "Adam Boxer",
    title: "Co-CEO & Co-Founder",
    image: adam,
    linkedin:
      "https://www.linkedin.com/in/adam-boxer-636715246/?originalSubdomain=uk",
  },
  {
    name: "Kate Kuper",
    title: "Non Executive Director",
    image: member20,
    linkedin:
      "https://www.linkedin.com/in/kate-kuper-3aab6/?originalSubdomain=uk",
  },
  {
    name: "James Fraser",
    title: "Non Executive Director",
    image: member21,
    linkedin: "https://www.linkedin.com/in/james-fraser-7104a965/",
  },
];

const countryDirectors = [
  {
    name: "Angela Mwebaze",
    title: "Non Executive Director - Uganda",
    image: member22, // use actual image path
  },
  {
    name: "Mesele Kiatabo",
    title: "Country Director - Ethiopia",
    image: member23, // use actual image path
    
  },
  {
    name: "Mmekidmfon Umtatah",
    title: "Country Director - Nigeria",
    image: member24, // use actual image path
   
  },
  {
    name: "Sudip Koirala",
    title: "Country Director - Nepal",
    image: member25, // use actual image path
    
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const OurTeam = () => {
  
  const headquartersRows = chunkArray(headquarters, 3); // 3 members per row

  return (
    <><div className="team-section">
      <h2>Meet The Team</h2>

      {/* Executives Section */}
      <p className="subheading">Executives</p>
      <div className="team-row row-2">
        {executives.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="ico">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin linkedin-icon"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Headquarters Team Section */}
      <h2 className="section-title">Headquarters Team</h2>
      {headquartersRows.map((row, rowIndex) => (
        <div className="team-row row-3" key={rowIndex}>
          {row.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="card-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <div className="ico">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin linkedin-icon"></i>
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Field Team Section */}
      <h2 className="section-title">Field Team</h2>
      <div className="team-row row-3">
        {fieldteam.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="ico">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin linkedin-icon"></i>
                  </a>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="section-title">Board</h2>
      <div className="team-row row-3">
        {board.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
              <div className="ico">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin linkedin-icon"></i>
                  </a>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Country Directors Team</h2>
      {chunkArray(countryDirectors, 2).map((row, rowIndex) => (
        <div className="team-row row-2" key={rowIndex}>
          {row.map((member, index) => (
            <div className="card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="card-info">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
                <div className="ico">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin linkedin-icon"></i>
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div>
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

export default OurTeam;
