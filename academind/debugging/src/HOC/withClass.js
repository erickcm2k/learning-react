import React from "react";

const withClass = (WrappedComponent, className) => {
  /* Spread operator helps passing all the props to the wrapped component */
  return (props) => (
    <div className={className}>
      
      <WrappedComponent {...props}>

      </WrappedComponent>
    </div>
  );
};

export default withClass;
