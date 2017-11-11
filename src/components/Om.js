import React from 'react';
import LightBox from 'react-image-lightbox';

const images = [
  '/pictures/fasade.jpg',
  '/pictures/behandlingsRom.jpg',
  '/pictures/ansiktsMaske.jpg'
];

class Om extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render(){
    const {
      photoIndex,
      isOpen
    } = this.state;

    return(
      <div className="backgroundPicture">
        <div className="textDiv omOss">
        <h3 className="omOss">
          Om Oss
        </h3>
          <p>
          TID Din hud- og fotterapeut ligger i Østre Skostredet 10, midt Bergen sentrum.
          Salongen er helt nyoppusset og åpnet 8. Desember 2016. Her venter nye behagelige rom som skaper en rolig og harmonisk atmosfære.
          Vi som startet TID er autoriserte fot- og hudterapeuter. Vi er opptatt av å tilby det beste til kunden og er derfor alltid faglig oppdatert.
          <br/><br/>
          Gi deg selv TID for å oppleve våre skreddersydde behandlinger hvor velvære og resultat alltid er i fokus.
          </p>
          <br/><br/>
            <button className="btn-link" onClick={() => this.setState({ isOpen: true })}>Se bilder</button>
            {isOpen &&
                    <LightBox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
        </div>
      </div>
    )
  }
}
export default Om;
