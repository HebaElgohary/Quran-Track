import { Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import { colors } from "@/constants/theme";

export default function Input({
  label,
  error,
  multiline = false,
  style,
  ...props
}: any) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text  style={styles.label }>{label}</Text>}

      <TextInput
        {...props}
        value={props.value}
      onChangeText={props.onChange}
        multiline={multiline}
        style={[
          styles.input,
          multiline && styles.textarea,
          isFocused && styles.focused,
          error && styles.error,
          style,
        ]}
        placeholderTextColor={colors.gray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
    marginVertical: 8,
    width:'100%',
    display:'flex',
    alignItems:'stretch'
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginHorizontal: 8,
    alignSelf:'flex-end',
    color: colors.btnPrimary,
    fontWeight: 800,

  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    // width: "100%",
    backgroundColor: "#fff",
  },
  textarea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  focused: {
    borderColor: colors.btnPrimary,
  },
  error: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});