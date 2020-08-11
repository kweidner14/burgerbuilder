import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.js'

class Checkout extends Component {
  state = {
    ingredients: {
      lettuce: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }

  render() {
    return (
        <div>
          <CheckoutSummary ingredients={this.state.ingredients} />
        </div>
    )
  }
}

export default Checkout;