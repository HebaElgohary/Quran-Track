import React from 'react'
import { Text, View } from 'react-native'
import SelectInput from '../molecules/SelectInput'
import { SourceOption } from '@/types/appTypes'
import Title from '../atoms/Title';

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
    <View style={{ flexDirection: "column", gap: 2, marginVertical: 30 }}>
      <Title size='md' >تصفية حسب الطلاب</Title>

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
     
 