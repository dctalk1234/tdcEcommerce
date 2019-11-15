import React from "react"
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}
const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_WF1bNCOc6Us8fleHtf9AsXMa00t2TOljcP")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    console.log("in redirect")
    const { error } = await this.stripe.redirectToCheckout({
      items: [
        { sku: "sku_GBC2wbq28FSeeL", quantity: 1},
      ],
      successUrl: `https://localhost:8000/about`,
      cancelUrl: `https://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        PURCHASE
      </button>
    )
  }
}
export default Checkout
