import React from 'react'
import { Text, View } from 'react-native'
import SelectInput from '../molecules/SelectInput'
import { SourceOption } from '@/types/appTypes'

export default function Filter({
  data,
  value,
  onChange,
}: {
  data?: SourceOption[];
  value: number | null;
  onChange: (value: number | null) => void;
}) {
  return (
    <View style={{ flexDirection: "column", gap: 20, margin: 20 }}>
      <Text style={{ fontSize: 20 }}>تصفية حسب الطلاب</Text>

     {data && <SelectInput
        data={[
          { label: "كل الطلاب", value: null },
          ...data,
        ]}
        value={value ?? undefined}
        onChange={onChange}
      />}
    </View>
  );
} 
     
 