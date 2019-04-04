import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    /*
    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    state = {
        page: <Profile />,
        active: false
    }
    
    showClick = (event) => {
        if (event.target.id === 'profile') {
            this.setState({ page: <Profile />, active: "item active" })
        }
        else if (event.target.id === 'photo') {
            this.setState({ page: <Photos />, active: "item active" })
        }
        else if (event.target.id === 'cocktail') {
            this.setState({ page: <Cocktails />, active: "item active" })
        }
        else if (event.target.id === 'pokemon') {
            this.setState({ page: <Pokemon />, active: "item active" })
        }
    }

    displayPage = () => {
        return this.state.page
    }

    
    // const Component = () => {
    //     profile: Profile,
    //     photo: Photos,
        
    // }
    
    render() {
        return (
            <div>
                <MenuBar showClick={this.showClick} active={this.state.active}/>
                {this.displayPage()}
            </div>
        )
    }
}

export default MainBox
