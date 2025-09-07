import React from "react";
import "../styles/payment-page.css"; // ⬅️ external stylesheet

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <div className="payment-box">
        <div className="payment-icon">💳</div>
        <h1 className="payment-title">Payment Gateway</h1>
        <h2 className="payment-subtitle">🚧 Under Development 🚧</h2>
        <p className="payment-description">
          We're crafting an amazing payment experience for you. Our team is working hard to bring you secure, fast, and seamless transactions.
        </p>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <p className="progress-text">Development Progress: 65%</p>

        <div className="payment-features">
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <p className="feature-text">Secure Payments</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <p className="feature-text">Lightning Fast</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💎</span>
            <p className="feature-text">Premium Experience</p>
          </div>
        </div>

        <div className="coming-soon">
          <p className="coming-title">Coming Soon Features:</p>
          <div className="coming-tags">
            {["Credit Cards", "Digital Wallets", "Bank Transfer", "Crypto Pay"].map(
              (feature, index) => (
                <span key={feature} className="tag" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature}
                </span>
              )
            )}
          </div>
        </div>

        <p className="payment-footer">Stay tuned for updates! 🚀</p>
      </div>
    </div>
  );
};

export default PaymentPage;
