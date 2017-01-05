import React from 'react';

import Navbar from './Navbar';

export default class App extends React.Component {
  render(){
    return(
        <div>
          <Navbar history={this.props.history}/>
          {this.props.children}
        </div>
    )
  }
}
// <img src="/pictures/background.jpg" alt="" className="bg"/>