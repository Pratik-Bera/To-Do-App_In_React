import React from 'react'

const Footer = () => {
  let footerStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "sans-serif",
    padding: "20px",
    position: "relative",
    width: "100%",
    
  }
  const listStyle = {
    color: "#ffffff",
    fontFamily: "sans-serif",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "20px"
  }
  return (
      <div>
        <footer className="py-3 my-4" style={footerStyle}>
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="./" className="nav-link px-5 " style={listStyle}>Home</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-5 " style={listStyle}>Features</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-5 " style={listStyle}>Pricing</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-5 " style={listStyle}>FAQs</a></li>
      <li className="nav-item"><a href="./" className="nav-link px-5 " style={listStyle}>About</a></li>
    </ul>
    <p className="text-center ">© 2024 Day Dreamer | daydreamer.com</p>
  </footer>
      </div>
    
  )
}

export default Footer
