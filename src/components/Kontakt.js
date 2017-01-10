import React from 'react';

class Kontakt extends React.Component {
  render(){
    return( 
      <div className="backgroundPicture">
        <div className="textDiv kontakt">
          <h3>
          Kontakt:
          </h3>
          <p>
            <span className="contactTitle">Adresse:</span> Østre skostredet 10, Bergen <br/>
            <span className="contactTitle">e-mail:</span> <a href="mailto:tid.bergen@gmail.com"> tid.bergen@gmail.com </a><br/>
            <span className="contactTitle">Facebook:</span><a href="https://www.facebook.com/TID.Bergen/?fref=ts"> tid.bergen</a><br/>
            <span className="contactTitle">Instagram:</span> tid.bergen <br/>
          </p>
        </div>
      </div>
    );
  }
}
export default Kontakt;