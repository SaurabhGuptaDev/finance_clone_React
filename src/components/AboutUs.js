import React,{useState} from "react";
import "../style/about.css";
import { Link } from "react-router-dom";

const teamData = [
  {
    name: "Mr. S. N. Subrahmanyan",
    title: "Non-Executive Director and Chairperson",
    image: "path-to-image-1.jpg", // Replace with the actual image path
  },
  {
    name: "Mr. Sudipta Roy",
    title: "Managing Director & CEO",
    image: "path-to-image-2.jpg", // Replace with the actual image path
  },
  {
    name: "Mr. R. Shankar Raman",
    title: "Non-Executive Director",
    image: "path-to-image-3.jpg", // Replace with the actual image path
  },
  {
    name: "Mr. Thomas Mathew T",
    title: "Independent Director",
    image: "path-to-image-4.jpg", // Replace with the actual image path
  },
];


const timelineData = [
  {
    year: 2023,
    content:
      "ABC Finance Limited (formerly known as ABC Finance Holdings Limited) has completed the merger of its subsidiaries (L&T Finance Ltd., L&T Infra Credit Ltd., and L&T Mutual Fund Trustee Ltd.) with...",
  },
  {
    year: 2022,
    content: "Description for 2022.",
  },
  {
    year: 2021,
    content: "Description for 2021.",
  },
  {
    year: 2020,
    content: "Description for 2020.",
  },
  // Add more years as needed
];

function AboutUs() {
    const [selectedYear, setSelectedYear] = useState(timelineData[0]);
    const [activeTab, setActiveTab] = useState("Board of Directors");

   
  return (
    <div className="app">
      <header className="breadcrumb">
        <Link to="/">Home</Link> &gt; <a href="#">About Us</a>
      </header>

      <main className="main-section">
        <h1>
          Committed To Becoming A Top-Class Digitally Enabled{" "}
          <span className="highlight">Customer Focused Fintech@Scale</span>
        </h1>

        <div className="timeline">
          <div className="timeline-item">
            <p>Year of Incorporation</p>
            <div className="hexagon">1994</div>
          </div>
          <div className="timeline-item">
            <p>Publicly listed on BSE and NSE</p>
            <div className="hexagon">2011</div>
          </div>
          <div className="timeline-item">
            <p>Attaining the Lakshya of becoming a Fintech@Scale</p>
            <div className="hexagon">2026 & continuing...</div>
          </div>
        </div>

        <div className="vision">
          <p>
            Our vision at ABC Finance Limited (formerly known as ABC Finance
            Holdings Limited) is to be an admired and inspirational financial
            institution, creating sustainable value for all our stakeholders.
          </p>
        </div>

        <div className="blocks-section">
          <div className="blocks">
            <div className="block">Icon 1</div>
            <div className="block">Icon 2</div>
            <div className="block">Icon 3</div>
          </div>
          <div className="blocks">
            <div className="block">Icon 4</div>
            <div className="block">Icon 5</div>
          </div>
          <div className="blocks">
            <div className="block">Icon 6</div>
          </div>
        </div>
      </main>
      <div className="stats-container">
        <div className="stats-row">
          <div className="stats-card">
            <h2>28000+</h2>
            <p>Partner Touchpoints</p>
          </div>
          <div className="stats-card">
            <h2>26000+</h2>
            <p>Field Force</p>
          </div>
          <div className="stats-card">
            <h2>29000+</h2>
            <p>Employees</p>
          </div>
        </div>
        <div className="stats-row">
          <div className="stats-card">
            <h2>21 | 1</h2>
            <p>States | Union territory</p>
          </div>
          <div className="stats-card">
            <h2>2.5 Cr.</h2>
            <p>Customer Database</p>
          </div>
          <div className="stats-card">
            <h2>"AAA"</h2>
            <p>Rated by CRISIL, ICRA, CARE & India Ratings</p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-header">
          <span>About </span>
          <span className="highlight">L&T Finance Limited</span>
          <span className="subtext">
            (formerly known as L&T Finance Holdings Limited)
          </span>
        </div>
        <div className="about-content">
          <p>
            Headquartered in Mumbai, L&T Finance Limited (formerly known as L&T
            Finance Holdings Limited) is one of the leading Non-Banking
            Financial Companies in India, with a strong presence across the
            lending business catering to the diverse financing needs of served
            and underserved customers.
          </p>
          <p>
            L&T Finance offers Personal loans, Two-Wheeler loans, Home loans,
            Rural Business loans, Farm loans, and SME loans. At L&T Finance, we
            are committed to providing customised financial solutions that meet
            the unique needs of our customers. With a focus on innovation and
            customer-centricity, we aim to be a trusted partner in our
            customers' financial journey.
          </p>
        </div>
      </div>
      <div className="values-container">
        <div className="values-header">
          <span className="title">Our </span>
          <span className="highlight">Values</span>
        </div>
        <div className="values-subheader">
          Built on four pillars, our culture endeavours to create an indomitable
          financial organisation
        </div>
        <div className="values-chart">
          <div className="value pride">PRIDE</div>
          <div className="value discipline">DISCIPLINE</div>
          <div className="value ambition">AMBITION</div>
          <div className="value integrity">INTEGRITY</div>
          <div className="center-circle">Our Culture</div>
        </div>
      </div>
      <div className="timeline-container">
        <h1 className="timeline-title">
          Our <span className="highlight">Growth Journey</span>
        </h1>
        <div className="timeline-content">
          <div className="card">
            <h2>{selectedYear.year}</h2>
            <p>{selectedYear.content}</p>
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  selectedYear.year === item.year ? "active" : ""
                }`}
                onClick={() => setSelectedYear(item)}
              >
                {item.year}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    
  )
      
      ;
}

export default AboutUs;
