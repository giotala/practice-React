import React from "react";


// By importing the Header.css file, it is added to the DOM whenever this component loads
const style1 = {
  display: 'flex',
  background: 'green',
  height: '200px',
  justifyContent: 'center'
}
const style2 = {
  margin: '0',
  paddingTop: '75px',
  textAlign: 'center',
  color: 'white',
  fontSize: '100px'
}
function Header() {
  return (
    <header style={style1} className="header">
      <h1 style={style2}>Welcome</h1>
    </header>
  );
}

export default Header;
