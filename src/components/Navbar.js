import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  render(){
    return(
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link className="navbar-brand" to="/">TID </Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/" >Hjem</Link></li>
        <li><Link to="/om" >Om oss</Link></li>
        <li><Link to="/Behandlinger" >Behandlinger</Link></li>
        <li><Link to="/Kontakt">Kontakt</Link></li>
      </ul>

    </div>

  </div>
</nav>
    )
  }
}
export default Navbar;