import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";
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
    <Modal
      isVisible={show}
      onBackdropPress={onCancel}
      backdropOpacity={0.4}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.message}>
          {message}
        </Text>

        <View style={styles.buttons}>
          {showCancelButton && (
            <TouchableOpacity
              style={[
                styles.button,
                styles.cancelButton,
              ]}
              onPress={onCancel}
            >
              <Text style={styles.cancelText}>
                {cancelText}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              styles.confirmButton,
            ]}
            onPress={onConfirm}
          >
            <Text style={styles.confirmText}>
              {confirmText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#111",
  },

  message: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    marginBottom: 20,
    lineHeight: 22,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },

  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  confirmButton: {
    backgroundColor: colors.danger,
  },

  cancelButton: {
    backgroundColor: colors.btnPrimary,
  },

  confirmText: {
    color: "#fff",
    fontWeight: "600",
  },

  cancelText: {
    color: "#fff",
    fontWeight: "600",
  },
});