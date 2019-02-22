import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

   constructor() {
      super() 

      this.state = {
         page: <Profile />
      }
   }

   handleClick = (event) => {
      console.log(event.target.id)
      let newPage
      switch (event.target.id) {
         case 'profile':
            newPage = <Profile />
            break;
         case 'photo':
            console.log('hi')
            newPage = <Photos />
            break;
         case 'cocktail':
            newPage = <Cocktails />
            break;
         case 'pokemon':
            newPage = <Pokemon />
            break;
         } 
      this.setState = ({
         page: newPage
      }, () => console.log(this.state.page))
   }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



   const detailsToDisplay = <div>{this.state.page}</div>

   return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {detailsToDisplay}
      </div>
   )
   }

}

export default MainBox
