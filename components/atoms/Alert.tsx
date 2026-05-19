import AwesomeAlert from "react-native-awesome-alerts";
import React, { useState } from 'react'

export default function Alert({show,handlePress,setShowAlert}:any) {

  return (
<AwesomeAlert
  show={show}
  title="Delete Student"
  message="Are you sure?"
  closeOnTouchOutside={true}
  showCancelButton={true}
  showConfirmButton={true}
  confirmText="Delete"
  onCancelPressed={() => setShowAlert(false)}
  onConfirmPressed={handlePress}
/>  
 )
}


