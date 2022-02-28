import React from "react";
import Auxiliary from "../../HOC/Auxiliary";
import classes from './Layout.module.css'
const Layout = (props) => {

  return (
    <Auxiliary>
      <div>TOOLBAR, SIDEDRAWER, BACKDROP</div>
      <main className={classes.Content}>{props.children}</main> 
    </Auxiliary>
  );
};

export default Layout;
