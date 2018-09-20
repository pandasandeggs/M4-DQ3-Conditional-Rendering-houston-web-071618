import React, { Component } from 'react'

class MenuBar extends Component {

  handleClick = (event) => {
    this.props.onChange(event.target.id)
  }
  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  render(){
    console.log(this.props)

    let profileActive =  this.props.selectedMenuItem === 'profile' ? 'active' : null
    let photoActive =  this.props.selectedMenuItem === 'photo' ? 'active' : null
    let cocktailActive =  this.props.selectedMenuItem === 'cocktail' ? 'active' : null
    let pokemonActive =  this.props.selectedMenuItem === 'pokemon' ? 'active' : null

    return (
      <div className="ui four item menu">
        <a onClick={this.handleClick} className={`item ${profileActive}`} id="profile">
          <i className="user large icon" id="profile"/>
        </a>

        <a onClick={this.handleClick} className={`item ${photoActive}`} id="photo">
          <i className="photo large icon" id="photo"/>
        </a>

        <a onClick={this.handleClick} className={`item ${cocktailActive}`} id="cocktail">
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a onClick={this.handleClick} className={`item ${pokemonActive}`} id="pokemon">
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
    )
  }

}

export default MenuBar
