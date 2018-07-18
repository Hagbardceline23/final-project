import React, {Component} from "react";
//import API from "../utils/API";

class shoppingCart extends Component {

  state = {
    ShoppingCart: false,
  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  articleSearch = event => {

  }

  render() {
    return (
      <div>
        
        
        Two

      </div>
    )
  }
}

export default shoppingCart;