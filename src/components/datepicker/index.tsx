import React, { useState } from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';
import { appSettings } from '../../config/AppSettings';
import settingsServices from '../../core/redux/services/settingsServices';
import { useDispatch } from 'react-redux';
const DatePicker = (props:{
  onSync:()=>Promise<void>
}) => {
  const [date, setDate] = useState(appSettings.dateView);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const onChange = (event:Event, selectedDate?:Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  const handleOnSyncDate = ()=>{
    appSettings.dateView = date;
    props.onSync()
  }
  return (
    
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={showDatepicker}
      >
        <Text
          numberOfLines={1}
          style={{textAlign: 'center', color: '#fff',marginRight:10}}>
          {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleOnSyncDate}
      ><Icon name={'sync-alt'} size={20} color={'white'} /></TouchableOpacity>
              {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

    </View>
  );
};
export default DatePicker;
