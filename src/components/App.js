import React from 'react';
import Navbar from './Navbar';

export default class App extends React.Component {
  render(){
    return(
        <div className="AppClass">
          <Navbar history={this.props.history}/>
          {this.props.children}
        </div>
    )
  }
}
