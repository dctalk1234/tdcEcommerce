import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

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
      <h1>Contact</h1>
    </header>

    <p>Hit us up! </p>

    <h3>twitter: <a href='https://twitter.com/DeadCylinders'>@deadcylinders</a></h3>
    <h3>instagram: <a href='https://www.instagram.com/da.scoob/?hl=en'>@da.scoob</a></h3>
    <h3>email: thedeadcylinders@gmail.com</h3>

    <p>Always remember stay dead and we'll see ya in the junkyard!!</p>
  </div>
)