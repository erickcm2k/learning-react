import React from "react";
import Auxiliary from '../../HOC/Auxiliary'
import Burger from '../../Components/Burger/Burger'
class BurgerBuilder extends React.Component {
  render() {
      return(
          <Auxiliary>
          <Burger/>
          <div>Build Controls</div>
          </Auxiliary>
      )
  }
}

export default BurgerBuilder;
