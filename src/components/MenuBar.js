import React from 'react'

const MenuBar = (props) => {

    let handleClick = (event) => {
        props.showClick(event)
    }


  return (
    <div className="ui four item menu">
      <a className={props.active === "profile" ? "item active" : "item"} id="profile" onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

          <a className={props.active === "photo" ? "item active" : "item"} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

          <a className={props.active === "cocktail" ? "item active" : "item"} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

          <a className={props.active === "pokemon" ? "item active" : "item"} id="pokemon" onClick={handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
