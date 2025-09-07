import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../styles/signup-page.css"; // ⬅️ external stylesheet

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    try {
      const res = await API.post("/auth/signup", { username, email, password });
      if (res.data?.token && res.data?.user?.id) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", String(res.data.user.id));
        navigate("/");
        return;
      }
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      const msg = err?.response?.data?.message || "Server error";
      alert("Signup failed: " + msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignup();
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Join us today</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            className="input-field"
          />
        </div>

        <button onClick={handleSignup} disabled={isLoading} className="btn btn-success w-100">
          {isLoading ? <span className="spinner"></span> : "Create Account"}
        </button>

        <div className="signup-link">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
