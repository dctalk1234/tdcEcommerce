import React from "react"
import Header from "../components/header"
import Checkout from "../components/checkout"
import stickerImage from "../images/P_20191114_171803_vHDR_Auto.jpg"
import { Link } from "gatsby"

const imageDetail = {
  maxWidth: "300px",
  float: "left",
  marginRight: '30px',
}

const links = {
  textDecoration: "none",
}
class stickerDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
    }
    this.handlQuantityChange = this.handlQuantityChange.bind(this)
  }
  handlQuantityChange(e) {
    e.preventDefault()
    console.log(e.target.value)

    this.setState({ quantity: e.target.value })
  }

  render() {
    return (
      <div>
        <Link to="/" style={links}>
          <Header headerText="TDC Bumper Sticker" />
        </Link>
        <img style={imageDetail} src={stickerImage} alt="hello" />
        <section>
          <p>
            High Quality vynal die cut stickers. Perfect for cars, waterbottles
            and laptops
          </p>
          <p>Price: 25$</p>
          <p>
            Quantity:{" "}
            <input onChange={this.handlQuantityChange} type="number" min="1" />
          </p>
          <Checkout id="sku_GBBkBsk99otFJj" quantity={this.state.quantity} />
        </section>
      </div>
    )
  }
}

export default stickerDetail
