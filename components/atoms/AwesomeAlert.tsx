import AwesomeAlert from "react-native-awesome-alerts";
import React from 'react'

export default function AwesomeAlert() {
  return (
<AwesomeAlert
  show={showAlert}
  title="Delete Student"
  message="Are you sure?"
  closeOnTouchOutside={true}
  showCancelButton={true}
  showConfirmButton={true}
  confirmText="Delete"
  onCancelPressed={() => setShowAlert(false)}
  onConfirmPressed={handleDelete}
/>  ; 
 )
}


