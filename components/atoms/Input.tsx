import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: "default" | "numeric" | "email-address";
  editable?: boolean;
};

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  keyboardType = "default",
  editable = true,
}: Props) {
  return (
    <View style={styles.container}>

      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        keyboardType={keyboardType}
        editable={editable}
        textAlign="right"
        style={[
          styles.input,
          multiline && styles.multiline,
        ]}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    gap:6,
    width:"100%",
  },

  label:{
    fontSize:13,
    fontWeight:"700",
    color:"#374151",
    textAlign:"right",
  },

  input:{
    height:45,
    borderWidth:1,
    borderColor:"#E5E7EB",
    borderRadius:12,
    paddingHorizontal:12,
    backgroundColor:"#FAFAFA",
    fontSize:14,
    color:"#111827",
  },

  multiline:{
    height:90,
    textAlignVertical:"top",
    paddingTop:12,
  },

});