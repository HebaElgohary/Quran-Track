import AwesomeAlert from "react-native-awesome-alerts";
import React from "react";

interface CustomAlertProps {
  show: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  showCancelButton?: boolean;
}

export default function CustomAlert({
  show,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  showCancelButton = true,
}: CustomAlertProps) {
  return (
    <AwesomeAlert
      show={show}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      showCancelButton={showCancelButton}
      showConfirmButton={true}
      confirmText={confirmText}
      cancelText={cancelText}
      onCancelPressed={onCancel}
      onConfirmPressed={onConfirm}
    />
  );
}