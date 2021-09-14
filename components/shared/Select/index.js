import { Picker } from '@react-native-community/picker';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';

const Select = (props) => {
  console.log(props.options)
  return (
    <View style={props.style}>
      <Text style={props.labelStyle}>{props.label}</Text>
      <View style={{ borderWidth: 2, borderColor: "#000",  borderRadius: 5 ,...props.pickerStyle }}>
        <Picker

          selectedValue={props.value}
          style={{ height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => { props.onValueChange(itemValue, itemIndex) }}
        >
          {props.options.map((item, index) => {
            return <Picker.Item key={index} label={item.label} value={item.value} />
          })}
        </Picker>
      </View>

    </View>
  );

};

export default Select;
