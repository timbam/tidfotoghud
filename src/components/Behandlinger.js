import React from 'react';
// import classNames from 'classnames';

import SubComponentBehandlinger from './SubComponentBehandlinger';
import ansiktsBehandlingerjson from '../databases/ansiktsBehandlinger';
import haarfjerning from '../databases/haarfjerning';
import vipperOgBryn from '../databases/vipperOgBryn';
import handpleie from '../databases/handpleie';
import gelenegler from '../databases/gelenegler';
import pedikyr from '../databases/pedikyr';
import fotterapi from '../databases/fotterapi';
import massasje from '../databases/massasje';
import spesial from '../databases/spesial';

class Behandlinger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAnsiktsBehandlinger:true, 
      hideHaarfjerning:true, 
      hidevipperOgBryn:true, 
      hideHandPleie:true,
      hideGelenegler:true,
      hidePedikyr:true,
      hideFotterapi:true,
      hideMassasje:true,
      hideSpesial:true,
      anyShown: false
    }
  }

  toggleAnsiktsBehandlinger() {
    this.setState({hideAnsiktsBehandlinger: !this.state.hideAnsiktsBehandlinger});
  }
  toggleHaarfjerning(){
    this.setState({hideHaarfjerning: !this.state.hideHaarfjerning})
  }
  toggleVipperOgBryn(){
    this.setState({hidevipperOgBryn: !this.state.hidevipperOgBryn})
  }
  toggleHandPleie(){
    this.setState({hideHandPleie: !this.state.hideHandPleie})
  }
  toggleGelenegler(){
    this.setState({hideGelenegler: !this.state.hideGelenegler})
  }
  togglePedikyr(){
    this.setState({hidePedikyr:!this.state.hidePedikyr})
  }
  toggleFotterapi(){
    this.setState({hideFotterapi:!this.state.hideFotterapi})
  }
  toggleMassasje(){
    this.setState({hideMassasje:!this.state.hideMassasje})
  }
  toggleSpesial(){
    this.setState({hideSpesial:!this.state.hideSpesial})
  }

  render(){
    var allHidden = this.state.hideAnsiktsBehandlinger && this.state.hideHaarfjerning && this.state.hidevipperOgBryn && this.state.hidePedikyr
    && this.state.hideHandPleie && this.state.hideGelenegler && this.state.hideFotterapi && this.state.hideMassasje && this.state.hideSpesial;
    return(
      <div className="backgroundPicture">
        <div className="textDiv">
          {allHidden || !this.state.hideAnsiktsBehandlinger ? <SubComponentBehandlinger 
          title={ansiktsBehandlingerjson.title}
          toggleHideMe={this.toggleAnsiktsBehandlinger.bind(this)} 
          hideMe={this.state.hideAnsiktsBehandlinger} 
          jsonBehandlinger={ansiktsBehandlingerjson.array}           
          /> : ''}
          {allHidden || !this.state.hideHaarfjerning ? <SubComponentBehandlinger 
          title={haarfjerning.title}
          toggleHideMe={this.toggleHaarfjerning.bind(this)}
          hideMe={this.state.hideHaarfjerning}
          jsonBehandlinger={haarfjerning.array} 
          description={haarfjerning.description}
          columns={true}
          ps="Gode tips: _NewLine_
          - hårene må være mellom 0,5-1 cm, ikke lenger eller kortere. _NewLine_
          - Peel huden 2 ganger i uken for å unngå inngrodde hår. _NewLine_
          - Vent i ca 48 timer med soling og solarium og trening. _NewLine_
          - Vent 24 timer med dusj og badstu."
          /> : ''}
          {allHidden || !this.state.hidevipperOgBryn ? <SubComponentBehandlinger 
          title={vipperOgBryn.title}
          toggleHideMe={this.toggleVipperOgBryn.bind(this)}
          hideMe={this.state.hidevipperOgBryn}
          jsonBehandlinger={vipperOgBryn.array} 
          description={vipperOgBryn.description}
          ps={vipperOgBryn.ps}
          /> : ''}
          {allHidden || !this.state.hideHandPleie ? <SubComponentBehandlinger 
          title={handpleie.title}
          toggleHideMe={this.toggleHandPleie.bind(this)}
          hideMe={this.state.hideHandPleie}
          jsonBehandlinger={handpleie.array}
          description={handpleie.description}
          /> : ''}
          {allHidden || !this.state.hideGelenegler ? <SubComponentBehandlinger 
          title={gelenegler.title}
          toggleHideMe={this.toggleGelenegler.bind(this)}
          hideMe={this.state.hideGelenegler}
          jsonBehandlinger={gelenegler.array}
          description={gelenegler.description}
          /> : ''}
          {allHidden || !this.state.hidePedikyr ? <SubComponentBehandlinger 
          title={pedikyr.title}
          toggleHideMe={this.togglePedikyr.bind(this)}
          hideMe={this.state.hidePedikyr}
          jsonBehandlinger={pedikyr.array}
          description={pedikyr.description}
          /> : ''}
          {allHidden || !this.state.hideFotterapi ? <SubComponentBehandlinger 
          title={fotterapi.title}
          toggleHideMe={this.toggleFotterapi.bind(this)}
          hideMe={this.state.hideFotterapi}
          jsonBehandlinger={fotterapi.array}
          description={fotterapi.description}
          /> : ''}
          {allHidden || !this.state.hideMassasje ? <SubComponentBehandlinger
          title={massasje.title}
          toggleHideMe={this.toggleMassasje.bind(this)}
          hideMe={this.state.hideMassasje}
          jsonBehandlinger={massasje.array}
          description={massasje.description}
          /> : ''}
          {allHidden || !this.state.hideSpesial ? <SubComponentBehandlinger
          title={spesial.title}
          toggleHideMe={this.toggleSpesial.bind(this)}
          hideMe={this.state.hideSpesial}
          jsonBehandlinger={spesial.array}
          /> : ''}
        </div>
      </div>
    );
  }
}
export default Behandlinger;