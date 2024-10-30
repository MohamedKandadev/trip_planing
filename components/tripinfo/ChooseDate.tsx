import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Calendar, CalendarList} from 'react-native-calendars';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import {ChooseDateProps} from '../../types/interfaces/pages';

const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
export const nextWeekDate = nextWeek.toISOString().split('T')[0];

export const today = new Date().toISOString().split('T')[0];

const ChooseDate: FC<ChooseDateProps> = ({
  endDate,
  setEndDate,
  setStartDate,
  startDate,
}) => {
  const {setColor} = useTheme();
  const onDayPress = day => {
    // Allow any date selection starting from today
    if (day.dateString >= today) {
      if (!startDate || (startDate && endDate)) {
        // Set start date
        setStartDate(day.dateString);
        setEndDate(null);
        setMarkedDates({
          [day.dateString]: {
            startingDay: true,
            color: setColor(
              colors.airline_dark.light,
              colors.airline_dark.light,
            ),
            textColor: 'white',
          },
        });
      } else if (day.dateString > startDate) {
        // Set end date only if it is after the start date
        const range = createDateRange(startDate, day.dateString);
        setEndDate(day.dateString);
        setMarkedDates(range);
      }
    }
  };

  const createDateRange = (start, end) => {
    let range = {};
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      range[dateString] = {
        color: setColor(colors.airline_dark.light, colors.airline_dark.light),
        textColor: 'white',
        ...(dateString === start ? {startingDay: true} : {}),
        ...(dateString === end ? {endingDay: true} : {}),
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return range;
  };

  const [markedDates, setMarkedDates] = useState(
    createDateRange(startDate, endDate),
  );

  return (
    <View>
      <CalendarList
        onDayPress={onDayPress}
        markedDates={markedDates}
        markingType={'period'}
        pastScrollRange={12}
        futureScrollRange={12}
        scrollEnabled
        showScrollIndicator
        style={{backgroundColor: 'transparent', marginLeft: -20}}
        contentContainerStyle={{backgroundColor: 'transparent', padding: 0}}
        theme={{calendarBackground: 'transparent'}}
        minDate={today}
      />
    </View>
  );
};

export default ChooseDate;

const styles = StyleSheet.create({});
