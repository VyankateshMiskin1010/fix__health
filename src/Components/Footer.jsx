import React, { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the threshold as needed
    setIsVisible(scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add an event listener to track scroll position
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 FixHealth.com</p>
      {isVisible && (
        <button onClick={scrollToTop} style={goUpButtonStyle}>
          Go Up
        </button>
      )}
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem",
};

const goUpButtonStyle = {
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  marginTop: "10px",
};

export default Footer;
