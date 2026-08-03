import Button from "@/components/atoms/Button";
import { colors } from "@/constants/theme";
import {  FormName, SourcesMap } from "@/types/appTypes";
import { formSchemas } from "@/utils/formSchemas";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import FormField from "./FormField";
import { surahMap } from "@/translations/surahMap";

interface props<T> {
  page: FormName;
  setOpen: any;
  formData?: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  handleSubmit?: () => Promise<void>;
  errors?: any;
  sources?: Partial<SourcesMap>;
  setErrors?: any;
}

export default function Form<T>({
  handleSubmit,
  errors,
  formData,
  setFormData,
  sources,
  page,
  setOpen,
}: props<T>) {
  const fields = useMemo(() => formSchemas[page], [page]);

  return (
    <View
      style={{
        width: "100%",
        maxHeight: 700,
        backgroundColor: "#fff",
        borderRadius: 22,
        alignSelf: "flex-start",
        // overflow: "visible",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 5,
      }}
    >
      {/* HEADER */}
      <View
        style={{
          paddingVertical: 18,
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#F1F1F1",
          backgroundColor: "#fff",
          display:'flex',
          alignItems:'flex-end'
          
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            color: colors.btnPrimary,
          }}
        >
          {page === "Groups"
            ? "إدارة المجموعة"
            : page === "Students"
              ? "إدارة الطالب"
              : "Form"}
        </Text>

        <Text style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>
          املأ البيانات المطلوبة ثم اضغط حفظ
        </Text>
      </View>

      {/* BODY */}
{/* BODY */}
<FlatList
  data={fields}
  keyExtractor={(field, index) => `${field.name}-${index}`}
  keyboardShouldPersistTaps="handled"
  nestedScrollEnabled
  removeClippedSubviews={false}
  showsVerticalScrollIndicator={false}
  style={{ maxHeight: 520 }}
  contentContainerStyle={{
    padding: 16,
    paddingBottom: 30,
    gap: 14,
  }}
  renderItem={({ item: field }) => {
    const fieldError = errors?.[field.name];

    const fieldProps = {
      ...field,
      data:
        field.source === "surahs"
          ? Object.keys(surahMap)
          : field.source
          ? sources?.[field.source]
          : field.data,
    };

    return (
      <View>
        <View
          style={{
            backgroundColor: "#FAFAFA",
            display:'flex',
            alignItems:'flex-end',
            width:'100%',
            borderRadius: 16,
            padding: 12,
            borderWidth: fieldError ? 1.5 : 1,
            borderColor: fieldError ? "#EF4444" : "#E5E7EB",
          }}
        >
          <FormField
            {...fieldProps}
            value={formData?.[field.name as keyof T]}
            error={fieldError}
            onChange={(value: unknown) =>
              setFormData(prev => ({
                ...prev,
                [field.name]: value,
              }))
            }
          />
        </View>

        {fieldError && (
          <Text
            style={{
              color: "#EF4444",
              fontSize: 12,
              marginTop: 4,
              marginLeft: 6,
            }}
          >
            {fieldError}
          </Text>
        )}
      </View>
    );
  }}
/>

      {/* FOOTER */}
      <View
        style={{
          flexDirection: "row-reverse",
          gap: 10,
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 14,
          borderTopWidth: 1,
          borderTopColor: "#F1F1F1",
          backgroundColor: "#fff",
        }}
      >
        {/* Cancel */}
        <View style={{}}>
          <Button
            size="md"
            variant="gray"
            textColor="black"
            onClick={() => setOpen(false)}
          >
            الغاء
          </Button>
        </View>

        {/* Submit */}
        <View style={{}}>
          <Button
            size="md"
            variant="btnPrimary"
            textColor="white"
            onClick={() => {
              console.log("form btn clicked");
              console.log("data:", formData);
              handleSubmit?.();
            }}
          >
            {(formData as any)?.id ? "تعديل" : "اضافة"}
          </Button>
        </View>
      </View>
    </View>
  );
}
