import React from 'react'

const Header = (props) => {
  return (
    <header style={{
        backgroundColor:'mediumblue',
        color:'#fff'
    }}>
        <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps =
{
  title:"Default Title"
}

export default Header
