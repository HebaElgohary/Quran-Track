import { useState } from 'react'
import { View } from 'react-native'

export default function SelectInput() {
  const [selected,setSelected]=useState('')
    return (
    <View>
        <Picker 
        selectedValue={selected}
        onValueChange={(itemValue)=>setSelected(itemValue)}
        >
<Picker.item label='choose option' value=''/>
<Picker.item label=' option1' value='1'/>
<Picker.item label=' option2' value='2'/>







        </Picker>
    </View>
  )
}
