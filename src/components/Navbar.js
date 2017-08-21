import React from 'react';
import {Link} from 'react-router';

import classNames from 'classnames';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {shown: false}
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onHideToggle = this.onHideToggle.bind(this);
  }
  onToggleClick(){
      this.setState({shown: !this.state.shown});
  }
  onHideToggle() {
    this.setState({shown: false});
  }


  render(){
    var classesCollapse = classNames({
      'collapse': true,
      'navbar-collapse': true,
      'show': this.state.shown
    });
    return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" onClick={this.onToggleClick} className="navbar-toggle" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="true" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">TID </Link>
        </div>

        <div className={classesCollapse} id="bs-navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link activeStyle={{ color: '#fff' }} to="/"             onClick={this.onHideToggle}>Hjem</Link></li>
            <li><Link activeStyle={{ color: '#fff' }} to="Om"            onClick={this.onHideToggle}>Om Oss</Link></li>
            <li><Link activeStyle={{ color: '#fff' }} to="Behandlinger"  onClick={this.onHideToggle}>Behandlinger</Link></li>
            <li><Link activeStyle={{ color: '#fff' }} to="BestillTime"   onClick={this.onHideToggle}>Bestill Time</Link></li>
            <li><Link activeStyle={{ color: '#fff' }} to="Kontakt"       onClick={this.onHideToggle}>Kontakt</Link></li>
          </ul>
        </div>
      </div>
    </nav>
      )
    }
}
export default Navbar;
