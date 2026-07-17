import React, { useEffect, useMemo, useState } from "react";
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
  value: string;
  onChange: (value: string) => void;
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
  const [query, setQuery] = useState(value);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filteredData = useMemo(() => {
    if (!query.trim()) return data;

    return data.filter((item) =>
      item
        .replace(/\s/g, "")
        .toLowerCase()
        .includes(query.replace(/\s/g, "").toLowerCase())
    );
  }, [query, data]);

  const handleSelect = (item: string) => {
    setQuery(item);
    onChange(item);
    setFocused(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <Feather
          name="search"
          size={18}
          color="#94A3B8"
          style={styles.icon}
        />

        <TextInput
          value={query}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          style={styles.input}
          onFocus={() => setFocused(true)}
          onChangeText={(text) => {
            setQuery(text);
            onChange(text);
            setFocused(true);
          }}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

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

                {item === value && (
                  <Feather
                    name="check"
                    size={16}
                    color={colors.btnPrimary}
                  />
                )}
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  itemText: {
    fontSize: 15,
    color: "#1E293B",
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