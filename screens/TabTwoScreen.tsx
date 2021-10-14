import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import dayjs from 'dayjs';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const INITIAL_DATE = dayjs(new Date()).format('YYYY-MM-DD');

export default function TabTwoScreen() {
  const [selected, setSelected] = React.useState(INITIAL_DATE);
  const [showMarkedDatesExamples, setShowMarkedDatesExamples] = React.useState(false);

  const toggleSwitch = () => {
    setShowMarkedDatesExamples(!showMarkedDatesExamples);
  };

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
  };

  return (
    <View style={styles.container}>
      <CalendarList
        monthFormat={'yyyy MM'}
        testID={'first_calendar'}
        current={INITIAL_DATE}
        style={[styles.calendar]}
        horizontal={true}
        onDayPress={onDayPress}
        pagingEnabled={true}
        disableArrowLeft={false}
        disableArrowRight={false}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
          },
        }}
      />
      <Text style={styles.title}>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  calendar: {
    marginBottom: 10,
    width: '100%',
  },
});

// const styles = StyleSheet.create({
//   calendar: {
//     marginBottom: 10
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     margin: 10,
//     alignItems: 'center'
//   },
//   switchText: {
//     margin: 10,
//     fontSize: 16
//   },
//   text: {
//     textAlign: 'center',
//     padding: 10,
//     backgroundColor: 'lightgrey',
//     fontSize: 16
//   },
//   disabledText: {
//     color: 'grey'
//   },
//   defaultText: {
//     color: 'purple'
//   },
//   customCalendar: {
//     height: 250,
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey'
//   },
//   customDay: {
//     textAlign: 'center'
//   },
//   customHeader: {
//     backgroundColor: '#FCC',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginHorizontal: -4,
//     padding: 8
//   }
