import React from "react"
import { Link } from "gatsby"
import shirtImage from "../images/image-20190508_131507_1.jpg"
import stickerImage from "../images/P_20191114_171803_vHDR_Auto.jpg"
import Checkout from "../components/checkout"

const cardStyles = {
  // alignItems: 'flex-start',
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
const sectionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
}

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact </Link>
    <h1>TDC Store </h1>
    
    <section style={sectionStyle}>
      <Link to="/shirtDetail">
        <img style={cardStyles} src={shirtImage} alt="hello" />
      </Link>

      <Link to="/stickerDetail">
        <img style={cardStyles} src={stickerImage} />
      </Link>
    </section>
  </div>
)
