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
  return(
      <div className="componentBehandling" >
        <h2>
          {props.title}
        </h2>
        <button className="btn btn-default hideButton" onClick={props.toggleHideMe.bind(this)} ><span className={props.hideMe ? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-up"}></span></button>
        <p className={renderBehandlingerClasses} >
          {props.description}
        </p>
        <div className={mappedList} >
         {props.jsonBehandlinger.map(renderBehandlinger)}
        </div>
        <p className={renderBehandlingerClasses}>
          {props.ps}
        </p>
      </div>
  )
}