import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

let pages = {
  'profile':Profile,
  'photo':Photos,
  'cocktail':Cocktails,
  'pokemon':Pokemon
}

class MainBox extends React.Component {

  constructor() {
    super();
    this.state = ({
      selectedMenuItem: "profile"
    });
  }

  handleChange = (value) => {
    this.setState({
      selectedMenuItem: value
    })
  }

  render() {
    const Page = pages[this.state.selectedMenuItem]

    return (
      <div>
        <MenuBar
          selectedMenuItem={this.state.selectedMenuItem} onChange={this.handleChange}
          
        />
        <Page />
      </div>
    )
  }

}

export default MainBox
