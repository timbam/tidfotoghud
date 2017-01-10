import React from 'react';
import classNames from 'classnames';



export default (props) => {
  function renderBehandlinger(behandling, index) {
    return(
      <div key={index} className={renderBehandlingerClasses}>
        <h3 className="behandling"      >{behandling.title} </h3>
        <p  className="behandlingsPris" >{behandling.price ? behandling.price + ',-' : ''}</p>
        <p  className="behandling"      >{behandling.description ? behandling.description : ''} </p>
      </div>
    );
  }
  var renderBehandlingerClasses = classNames({
    'hideMe': props.hideMe,
    'renderBehandlingerClasses': true
  })
  var mappedList = classNames({
    'mappedList': props.columns
  })
  var mainDescription = classNames({
    'hideMe' : props.hideMe,
    'mainDescription':true
  })
  return(
      <div className="componentBehandling" >
        <h2 onClick={props.toggleHideMe.bind(this)} >
          {props.title}
        </h2>
        <button onClick={props.toggleHideMe.bind(this)} className="btn btn-default hideButton"><span className={props.hideMe ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-up"}></span></button>
        <p className={mainDescription} >
          {props.description}
        </p>
        <div className={mappedList} >
         {props.jsonBehandlinger.map(renderBehandlinger)}
        </div>
        <p className={renderBehandlingerClasses}>
          {props.ps ? props.ps.split('_NewLine_').map(function(item, index) {
            return(
              <span key={index} >
                {item}
                <br/>
              </span>
            );
          }) : ''}
        </p>
      </div>
  )
}