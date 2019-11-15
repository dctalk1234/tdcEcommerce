import React from "react"
import Header from '../components/header'
import image from '../images/image-20190508_131507_1.jpg'

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
  backgroundColor: '#fff',
  borderRadius: '6px',
  maxWidth: '300px',
}

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText='Sticker' />
    <p>Such wow. Very React.</p>
    <img style={cardStyles} src={image} alt="hello" />
  </div>
)
