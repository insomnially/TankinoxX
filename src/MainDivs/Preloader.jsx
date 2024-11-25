import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import "./Preloader.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-container ${loading ? "loading" : "loaded"}`}>
      {loading && (
        <div className="preloader">
          <img src={logo} alt="logo" className="preloader-logo"/>

          <div className="preloader-stripe"></div>
        </div>
      )}
    </div>
  );
}
