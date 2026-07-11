import React, { useState } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  initialData: {
    newEn?: string;
    revisionEn?: string;
    tajweedEn?: string;
    notesEn?: string;
  };

  onSave: (data: {
    newEn: string;
    revisionEn: string;
    tajweedEn: string;
    notesEn: string;
  }) => Promise<void>;
};

export default function EnglishTranslationModal({
  open,
  setOpen,
  initialData,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    newEn: initialData.newEn ?? "",
    revisionEn: initialData.revisionEn ?? "",
    tajweedEn: initialData.tajweedEn ?? "",
    notesEn: initialData.notesEn ?? "",
  });

  const handleChange = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    await onSave(form);
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>

          <Text style={styles.title}>
            English Translation
          </Text>

          <Input
            label="New Memorization"
            value={form.newEn}
            onChangeText={(v) =>
              handleChange("newEn", v)
            }
          />

          <Input
            label="Revision"
            value={form.revisionEn}
            onChangeText={(v) =>
              handleChange("revisionEn", v)
            }
          />

          <Input
            label="Tajweed"
            value={form.tajweedEn}
            onChangeText={(v) =>
              handleChange("tajweedEn", v)
            }
          />

          <Input
            label="Notes"
            value={form.notesEn}
            multiline
            onChangeText={(v) =>
              handleChange("notesEn", v)
            }
          />


          <View style={styles.actions}>

            <Button
              variant="gray"
              textColor="black"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>


            <Button
              onClick={handleSave}
            >
              Save
            </Button>

          </View>

        </View>
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({

  overlay:{
    flex:1,
    backgroundColor:"rgba(0,0,0,0.4)",
    justifyContent:"center",
    padding:20,
  },

  container:{
    backgroundColor:"#fff",
    borderRadius:20,
    padding:20,
    gap:12,
  },

  title:{
    fontSize:18,
    fontWeight:"700",
    textAlign:"center",
    marginBottom:10,
  },

  actions:{
    flexDirection:"row",
    justifyContent:"flex-end",
    gap:10,
    marginTop:10,
  }

});