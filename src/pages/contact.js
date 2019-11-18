import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Hit us up!</p>

    <h3>twitter: <a href='https://twitter.com/DeadCylinders'>@deadcylinders</a></h3>
    <h3>instagram: <a href='https://www.instagram.com/da.scoob/?hl=en'>@da.scoob</a></h3>
    <h3>email: thedeadcylinders@gmail.com</h3>

  </div>
)