import React, { useMemo, useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/theme";

interface AutocompleteInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  data: string[];
  placeholder?: string;
  error?: string;
}

export default function AutocompleteInput({
  value,
  onChange,
  data,
  placeholder,
  error,
}: AutocompleteInputProps) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        !value.includes(item) &&
        item
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(query.replace(/\s/g, "").toLowerCase())
    );
  }, [query, data, value]);

  const handleSelect = (item: string) => {
    if (!value.includes(item)) {
      onChange([...value, item]);
    }

    setQuery("");
    Keyboard.dismiss();
  };

  const removeItem = (item: string) => {
    onChange(value.filter((v) => v !== item));
  };

  return (
    <View style={styles.container}>
      {/* Selected Surahs */}
      {value.length > 0 && (
        <View style={styles.selectedContainer}>
          {value.map((item) => (
            <Pressable
              key={item}
              style={styles.chip}
              onPress={() => removeItem(item)}
            >
              <Feather name="x" size={14} color="#fff" />
              <Text style={styles.chipText}>{item}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          !!error && styles.inputError,
        ]}
      >
        <Feather
          name="search"
          size={18}time
          color="#94A3B8"
          style={styles.icon}
        />

        <TextInput
          value={query}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={setQuery}
        />
      </View>

      {!!error && <Text style={styles.error}>{error}</Text>}

      {focused && filteredData.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={filteredData.slice(0, 8)}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </Pressable>
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.separator} />
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 999,
  },

  selectedContainer: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.btnPrimary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  chipText: {
    color: "#fff",
    fontSize: 13,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
  },

  inputFocused: {
    borderColor: colors.btnPrimary,
  },

  inputError: {
    borderColor: "#EF4444",
  },

  icon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#1E293B",
    textAlign: "right",
  },

  dropdown: {
    marginTop: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    maxHeight: 250,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
  },

  item: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  itemText: {
    fontSize: 15,
    color: "#1E293B",
    textAlign: "right",
  },
  separator: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },
  error: {
    marginTop: 5,
    color: "#EF4444",
    fontSize: 12,
  },
});