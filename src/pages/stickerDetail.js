import React from "react"
import Header from "../components/header"
import Checkout from "../components/checkout"
import stickerImage from "../images/P_20191114_171803_vHDR_Auto.jpg"
import { Link } from "gatsby"

const imageDetail = {
  maxWidth: "300px",
}
const links = {
  textDecoration: 'none',
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
      <div style={{ color: `teal` }}>
        <Link to='/' style={links}>
        <Header headerText="Sticker" />

        </Link>
        <img style={imageDetail} src={stickerImage} alt="hello" />
        <p>High Quality vynal die cut stickers. Perfect for cars, waterbottles and laptops</p>
        <input onChange={this.handlQuantityChange} type="number" min="1" placeholder='quantity'/>
        <Checkout id="sku_GBBkBsk99otFJj" quantity={this.state.quantity} />      
      </div>
    )
  }
}

export default stickerDetail;
