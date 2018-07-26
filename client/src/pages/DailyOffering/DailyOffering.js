import React, { Component } from "react";
import API from "../../utils/API";
import "../../App.css";

class DailyOffering extends Component {

  state = {
    emails: [],
    email: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email) {
      API.saveEmail({
        email: this.state.email
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }

  // articleSearch = event => {

  // }

  render() {
    return (
      <div className="daily-offering">
        <div className="row">

          <div className="test col-md-8">
            <div className="img-area">
              <img src="./assets/images/offeringImage.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4 daily-offering-text">
            <div className="daily-offering-text">
              <div className="daily-offering-header">
                <h2>Today's Offer</h2>
              </div>
              <div className="daily-offering-wine">
                <h3>Chateau Bois Pertois</h3>
              </div>
              <p> Today's offer is a well balanced Bordeaux with hints of berry fruits and oak on the nose. It has a medium bodied texture with a slightly tanic finish. Critics have scored this wine 87 points and users have rated it 3.6 out of 5 stars. </p>
              <div className="shoppingImage">
                <a href="https://barcelona.lemonstand.com/shop">
                  <img src="./assets/images/shopping-cart.png" className="img-fluid" />
                </a>
              </div>
              <div className="submitEmail">
                <h4>Enter your email address to receive wine offerings that are discounted up to 50%</h4>
                <div className="row">
                  <div className="col-md-6">
                    <form>
                      <input
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        name="email"
                      />
                      <button
                        disabled={!(this.state.email)}
                        onClick={this.handleFormSubmit}
                      >
                        submit email
</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DailyOffering;