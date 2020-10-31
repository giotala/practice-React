import React from "react";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const style1 = {
  background: 'Red',
  height: '60px'
}
const style2 = {
  color: 'white',
  fontSize: '1.3rem',
  textDecoration: 'none',
  margin: '5px',
  lineHeight: '3',
  display: 'flex',
  justifyContent: 'flex-end'
}

function Navbar() {
  return (
    <nav style={style1} className="navbar">
      <a style={style2} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
