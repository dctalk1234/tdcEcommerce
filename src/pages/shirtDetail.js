import React from "react"
import Header from "../components/header"
import Checkout from "../components/checkout"
import shirtImage from "../images/image-20190508_131507_1.jpg"
import { Link } from "gatsby"

const imageDetail = {
  maxWidth: "300px",
}
const links = {
  textDecoration: 'none',
}
class shirtDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quantity: 0,
      size: "sku_GBDDCTx1d2798B",
    }
    this.handlQuantityChange = this.handlQuantityChange.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
  }
  handlQuantityChange(e) {
    e.preventDefault()
    console.log(e.target.value)

    this.setState({ quantity: e.target.value })
  }

  handleSizeChange(e) {
    e.preventDefault()
    console.log(e.target.value)
    switch (e.target.value) {
      case "S":
        this.setState({ size: "sku_GBZQrUqFIWRmJ7" })
        break
      case "M":
        this.setState({ size: "sku_GBDDAKVD9qX1LH" })
        break
      case "L":
        this.setState({ size: "sku_GBDDCTx1d2798B" })
        break
      case "XL":
        this.setState({ size: "sku_GBC2wbq28FSeeL" })
        break
    }
  }

  render() {
    return (
      <div style={{ color: `teal` }}>
        <Link to="/" style={links}>
          <Header headerText="TDC Printed Shirt" />
        </Link>
        <img style={imageDetail} src={shirtImage} alt="hello" />
        <p>Description: </p>
        <select onChange={this.handleSizeChange}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option selected value="L">
            Large
          </option>
          <option value="XL">X-Large</option>
        </select>
        <input onChange={this.handlQuantityChange} type="number" min="1" placeholder='quantity' />

        <Checkout id={this.state.size} quantity={this.state.quantity} />
      </div>
    )
  }
}

export default shirtDetail
