import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    state = {
        page: <Profile />,
        active: "profile"
    }
    
    showClick = (event) => {
        if (event.target.id === 'profile') {
            this.setState({ page: <Profile />, active: "profile" })
        }
        else if (event.target.id === 'photo') {
            this.setState({ page: <Photos />, active: "photo" })
        }
        else if (event.target.id === 'cocktail') {
            this.setState({ page: <Cocktails />, active: "cocktail" })
        }
        else if (event.target.id === 'pokemon') {
            this.setState({ page: <Pokemon />, active: "pokemon" })
        }
    }

    displayPage = () => {
        return this.state.page
    }
    
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
