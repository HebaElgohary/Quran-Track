import AwesomeAlert from "react-native-awesome-alerts";
import React from "react";
import { colors } from "@/constants/theme";

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
  
  contentContainerStyle={{
    backgroundColor: colors.background,
  }}

  overlayStyle={{
    backgroundColor: "rgba(0,0,0,0.4)",
      flex: 1,

  }}

  confirmButtonColor={colors.danger}
  cancelButtonColor={colors.btnPrimary}
  onCancelPressed={onCancel}
  onConfirmPressed={onConfirm}
/>
  );
}