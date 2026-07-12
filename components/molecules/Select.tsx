import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { colors } from "@/constants/theme";
import { Feather } from "@expo/vector-icons";

interface SelectProps {
  data: any[];
  value: string | number | null;
  onChange: (value: number | null) => void;
}

export default function Select({
  data,
  value,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const selectedItem = data.find(
    (item) => item.value === value
  );

  return (
    <View>

      {/* SELECT BUTTON */}
      <Pressable
        onPress={() => setOpen(true)}
        style={{
          height: 56,
          borderWidth: 1,
          borderColor: colors.gray,
          borderRadius: 14,
          backgroundColor: "#fff",
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Feather
          name="chevron-down"
          size={20}
          color="#777"
        />

        <Text
          style={{
            fontSize: 16,
            color: selectedItem ? "#222" : "#999",
          }}
        >
          {selectedItem?.label ?? "اختر"}
        </Text>

      </Pressable>


      {/* MODAL LIST */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
      >
        <Pressable
          onPress={() => setOpen(false)}
          style={{
            flex:1,
            backgroundColor:"rgba(0,0,0,0.4)",
            justifyContent:"center",
            paddingHorizontal:25,
          }}
        >

          <Pressable
            onPress={(e)=>e.stopPropagation()}
            style={{
              backgroundColor:"#fff",
              borderRadius:20,
              maxHeight:500,
              overflow:"hidden",
            }}
          >

            <FlatList
              data={data}
              keyExtractor={(item,index)=>
                String(item.value ?? index)
              }
              showsVerticalScrollIndicator
              renderItem={({item})=>(
                <Pressable
                  onPress={()=>{
                    onChange(item.value);
                    setOpen(false);
                  }}
                  style={{
                    padding:18,
                    borderBottomWidth:1,
                    borderBottomColor:"#eee",
                    alignItems:"flex-end",
                  }}
                >
                  <Text
                    style={{
                      fontSize:16,
                      color:"#222",
                    }}
                  >
                    {item.label}
                  </Text>

                </Pressable>
              )}
            />

          </Pressable>

        </Pressable>

      </Modal>

    </View>
  );
}