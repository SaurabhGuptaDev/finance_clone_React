import React from "react";
import Chatbot from "../components/Chatbot";
const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#2c2c44",
          color: "#fff",
          padding: "20px 40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Loan for Consumers */}
          <div>
            <h3 style={{ color: "#ffd700" }}>Loan for Consumers</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Personal Loans",
                "Two-Wheeler Loan",
                "Home Loans",
                "Farmer Finance",
                "Micro Loans",
                "SME Loan",
                "Loan Against Property",
                "Finance for Professionals",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "#ffd700" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Loan Against Property",
                "Interest Rates",
                "Eligibility",
                "Documents",
                "EMI Calculator",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About L&T */}
          <div>
            <h3 style={{ color: "#ffd700" }}>About L&T</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "About Us",
                "Careers",
                "Quick Pay EMI",
                "Calculators",
                "Fees & Charges",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 style={{ color: "#ffd700" }}>Contact Us</h3>
            <address style={{ color: "#fff" }}>
              Corporate Office
              <br />
              Brindavan, Plot No. 177, CST Road,
              <br />
              Kalina, Santacruz (East),
              <br />
              Mumbai, Maharashtra - 400098
              <br />
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Contact Form
              </a>
            </address>
          </div>
        </div>

        {/* Social Media Links */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#fff" }}>Connect with us:</p>
          {["WhatsApp", "Facebook", "LinkedIn", "Twitter", "YouTube"].map(
            (platform, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#fff",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                {platform}
              </a>
            )
          )}
        </div>

        {/* Additional Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Process for return of original property documents",
                "Assets possessed under the SARFAESI",
                "CKYC Awareness - Image",
                "CKYC Awareness - Video",
                "The Complete Home Loan - T&C",
                "Arbitration",
                "Mandate Cancellation Journey in Planet - PDF",
                "Mandate Cancellation Journey in Planet - Video",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Notice */}
        <div
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#bbb",
            marginTop: "20px",
            borderTop: "1px solid #444",
            paddingTop: "20px",
          }}
        >
          <p>
            &copy; ABC Finance Limited (formerly known as ABC Finance Holdings
            Limited) | CIN: L67120MH2008PLC181833
          </p>
          <p>
            ABC Finance Limited is a Corporate Agent (IRDAI Registration No.
            CA0867 valid till August 30, 2026) for soliciting and procuring
            General, Health, and Life Insurance business. Insurance contracts
            are established exclusively between the insurer and the insured. ABC
            Finance Ltd does not act as insurer nor participate in or underwrite
            the underlying risks.
          </p>
          <p>
            {[
              "Disclaimer",
              "Privacy Policy",
              "Sitemap",
              "Notices-Transfer of Loans (Wholesale)",
              "Grievance Redressal",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#fff",
                  margin: "0 10px",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
