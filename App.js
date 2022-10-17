import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, ImageBackground } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function App() {
  const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS) === 'android'
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
      let ftime = 'Hour: ' + tempDate.getHours() + ' | Minute: ' + tempDate.getMinutes();
      setText(fDate + '\n' + ftime)

      console.log(fDate + ' (' + ftime + ')')
    }

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/bg.png")} resizeMode="cover" style={styles.image}>
        <Text style={{fontWeight:'bold', fontSize:20, marginHorizontal: 95, marginTop:90, textAlign:"justify"}}>{text}</Text>
      <View style={{margin:20, marginStart:90, marginEnd:90}}>
        <Button title='Date Picker' color={"#545454"} onPress={() => showMode('date')} />
      </View>
      <View style={{margin:30, marginStart:90, marginEnd:90}}>
        <Button title='Time Picker' color={"#545454"} onPress={() => showMode('time')} />
      </View>
      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode={mode}
        is24hours={true}
        display='default'
        onChange={onChange}
        />
      )}
      <StatusBar style="light" backgroundColor="black"/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
