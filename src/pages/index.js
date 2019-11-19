import React from "react"
import { Link } from "gatsby"
import shirtImage from "../images/image-20190508_131507_1.jpg"
import stickerImage from "../images/P_20191114_171803_vHDR_Auto.jpg"
import TDCLogo from "../images/TDC Logo (1).jpg"

const navbar = {
  backgroundColor: "black",
  textAlign: "center",
  color: "grey",
}

const links = {
  margin: "0px 30px",
  textDecoration: "none",
  fontSize: "30px",
}

const header = {
  display: "block",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "grey",
  marginBottom: "20px",
}

const cardStyles = {
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  width: "300px",
  height: "400px",
}

const sectionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundImage: `${TDCLogo}`,
}

export default () => (
  <div>
    <nav style={navbar}>
      <Link style={links} to="/">
        Home
      </Link>
      <Link style={links} to="/contact/">
        Contact
      </Link>
      <a
        style={links}
        href="https://www.youtube.com/channel/UCUM6B8HfH-OYoheFvjhDJuQ"
      >
        Youtube
      </a>
    </nav>
    <header style={header}>
      <h1>TDC Store</h1>
    </header>

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
