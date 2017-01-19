import React from 'react';

class Kontakt extends React.Component {
  render(){
    return( 
      <div className="backgroundPicture">
        <div className="textDiv kontakt">
          <h3>
          Kontakt
          </h3>
          <p>
            <span className="contactTitle">Adresse:</span> Østre skostredet 10, Bergen <br/>
            <span className="contactTitle">e-mail:</span> <a href="mailto:tid.bergen@gmail.com"> tid.bergen@gmail.com </a><br/>
            <span className="contactTitle">Instagram:</span><a href="https://www.instagram.com/tid_bergen/"> tid_bergen </a><br/>
            <span className="contactTitle">Facebook:</span><a href="https://www.facebook.com/TID.Bergen/?fref=ts"> tid.bergen</a><br/>
            <span className="contactTitle">tlf:</span> +47 55 31 26 55 <br/>
          </p>
          <h3>
            Åpningstider
          </h3>
          <p>
            <span className="days">man-ons, fre:</span>  10-17 <br/>
            <span className="days">tors:</span>  10-19 <br/>
            <span className="days">lør:</span>  11-15 <br/>
            <span className="days">søn:</span>  Stengt
          </p>
        </div>
      </div>
    );
  }
}
export default Kontakt;