import React from "react";
import Auxiliary from "../../HOC/Auxiliary";
const Layout = (props) => {
  return (
    <Auxiliary>
      <div>TOOLBAR, SIDEDRAWER, BACKDROP</div>
      <main>{props.children}</main> 
    </Auxiliary>
  );
};

export default Layout;
