import React from 'react';
import Styles from "./Style/appStyles.module.css";


function InlineCssStyle(){

  let heading = {
    color: "red",
    fontSize: "50px"
  }

  return(
    <>
      <div id='main'>
          <h1 className={Styles.success}>Success</h1>
          <h1 id='error' style={heading}>Error</h1>
      </div>
    </>
  )
}

export default InlineCssStyle;