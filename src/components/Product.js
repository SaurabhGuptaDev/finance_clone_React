import React from 'react'
import "../style/product.css"

const Product = () => {
  return (
    <div>
      <div class="banner">
        <h1>Home Loans</h1>
        <p>Kum Nahi, Complete</p>
        <a href="#" class="apply-now">
          Apply Now
        </a>

        <div class="features">
          <div class="feature">
            <p>Digitized Process</p>
          </div>
          <div class="feature">
            <p>Dedicated Relationship Manager</p>
          </div>
          <div class="feature">
            <p>Home Decor Finance</p>
          </div>
        </div>
      </div>

      <div class="product-section">
        <div class="product">
          <img alt="" src="data:image/jpeg;base64,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" />
          <h3>Home Loan</h3>
        </div>
        <div class="product">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2024/3/400599964/RM/SW/GL/3635174/loan-against-property.jpg"
            alt=""
          />
          <h3>Loan Against Property</h3>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmJTY8ce4aj57eYFqM4pHGcnMm6T7m1GgrA&s"
            alt=""
          />
          <h3>Personal Loans</h3>
        </div>
        <div class="product">
          <img
            src="https://www.icicibank.com/content/dam/icicibank/two-wheeler-loan-revamp-assets/assets/tw-banner-01.webp"
            alt=""
          />
          <h3>Two-Wheeler Finance</h3>
        </div>
        <div class="product">
          <img
            src="https://www.deere.co.in/assets/images/region-1/products/John%20Deere_Website%20Creatives_Used%20Tractor%20Finance_Internal.jpg"
            alt=""
          />
          <h3>Farm Equipment Finance</h3>
        </div>
        <div class="product">
          <img
            src="https://www.clix.capital/clixblog/wp-content/uploads/sites/3/2023/04/What-is-SME-Loan.png"
            alt=""
          />
          <h3>SME Loan</h3>
        </div>
        <div class="product">
          <img
            alt=""
            src="https://5.imimg.com/data5/SELLER/Default/2024/3/404260213/RY/WR/EN/16319060/micro-loan-service.jpeg"
          />
          <h3>Micro Loan</h3>
        </div>
      </div>

      <div class="process-section">
        <h2 class="process-header">Easy. Quick. Efficient.</h2>
        <p>Realise your dreams now.</p>
        <div class="process-steps">
          <div class="process-step">
            <h3>1</h3>
            <p>Save effort</p>
            <p>Minimal documentation for faster processes.</p>
          </div>
          <div class="process-step">
            <h3>2</h3>
            <p>Save time</p>
            <p>Quick loan approvals and sanctions.</p>
          </div>
          <div class="process-step">
            <h3>3</h3>
            <p>Personalise it</p>
            <p>Apply for loans that meet your specific needs.</p>
          </div>
        </div>
      </div>

      <div class="quick-links">
        <button>🏠</button>
        <button>💻</button>
        <button>📞</button>
      </div>

      <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Form Section */}
        <div className="form-section" style={{ flex: 1, padding: "20px" }}>
          <h2>Want a callback? Enter your details.</h2>
          <form>
            <input
              type="text"
              placeholder="Enter your name"
              required
              style={{
                display: "block",
                width: "100%",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="tel"
              placeholder="Mobile No."
              required
              style={{
                display: "block",
                width: "100%",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <select
              required
              style={{
                display: "block",
                width: "100%",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="" disabled selected>
                Select Product
              </option>
              <option value="home-loan">Home Loan</option>
              <option value="bike-loan">Bike Loan</option>
              <option value="msme">MSME</option>
            </select>
            <div
              className="captcha"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                4 J 8 X
              </span>
              <button
                type="button"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                ↻
              </button>
            </div>
            <button
              type="submit"
              style={{
                display: "block",
                width: "100%",
                margin: "10px 0",
                padding: "10px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            By proceeding, I confirm that the information provided by me here is
            accurate. I authorize L&T Finance and/or its authorized
            representatives to contact me.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="image-section"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://www.ltfs.com/assets/images/formLeftBanner.svg"
            alt="Support Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Product ;
