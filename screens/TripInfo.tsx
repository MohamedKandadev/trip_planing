import {
  Image,
  ImageProps,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {useTheme} from '../context/ThemeContext';
import colors from '../constant/colors';
import SIZES from '../constant/sizes';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import FONTS from '../constant/fonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../components/common/BottomSheet';
import ChooseDate, {
  nextWeekDate,
  today,
} from '../components/tripinfo/ChooseDate';
import icons from '../constant/icons';
import BottomSheetHeader from '../components/common/BottomSheetHeader';
import TripPrivacy from '../components/tripinfo/TripPrivacy';
import {useFormik} from 'formik';
import {
  createTripSchema,
  createTripValues,
  initialCreateTripValues,
} from '../helpers/formValidation';
import {useDispatch, useSelector} from 'react-redux';
import {createTrip} from '../api/services/supabaseActions';
import {AppDispatch, RootState} from '../store';
import {NavigationScreenProps} from '../types/interfaces/pages';
import {ROUTE} from '../types/enums/navigation';
import {ViewStyle} from 'react-native';

const TripInfo: FC<NavigationScreenProps> = ({navigation}) => {
  const {setColor} = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const trips = useSelector((state: RootState) => state.trip);
  const auth = useSelector((state: RootState) => state.auth);
  const bottomSheetRef = useRef<any>(null);

  const [isShowModelDate, setIsShowModelDate] = useState(false);

  const handleOpenModal = (isDate: boolean) => {
    setIsShowModelDate(isDate);
    bottomSheetRef?.current?.open();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      ...initialCreateTripValues,
      startDate: today,
      endDate: nextWeekDate,
    },
    validationSchema: createTripSchema,
    onSubmit: async (values: createTripValues) => {
      dispatch(createTrip({...values, user_id: auth.user.id}))
        .unwrap()
        .then(payload => {
          navigation.goBack();
          navigation.navigate(ROUTE.DESTINATIONS, {trip_id: payload[0].id});
        })
        .catch(error => console.error('rejected', error));
    },
  });

  const borderTheme: ViewStyle = {
    borderColor: setColor(
      colors.airline_dark.light,
      colors.airline_gray.gray300.light,
    ),
  };
  const imageTheme: ImageStyle[] = [
    styles.icon,
    {
      tintColor: setColor(
        colors.airline_gray.gray100.light,
        colors.airline_dark.light,
      ),
    },
  ];
  const textTheme: TextStyle[] = [
    styles.buttonText,
    {
      color: setColor(
        colors.airline_gray.gray.light,
        colors.airline_dark.light,
      ),
    },
  ];
  const errorTheme =
    errors.name && touched.name
      ? colors.airline_red.light
      : setColor(colors.airline_gray.gray.light, colors.airline_dark.light);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: setColor(
            colors.airline_deep_dark.light,
            colors.airline_white.light,
          ),
        },
      ]}>
      <View>
        {/* Input Trip Name */}
        <View style={[styles.inputName, borderTheme]}>
          <Image source={icons.bookmark} style={imageTheme} />
          <TextInput
            placeholder="Trip Name"
            value={values.name}
            onChangeText={handleChange('name')}
            placeholderTextColor={errorTheme}
            style={[
              {...FONTS.pr2.san_francisco.light},
              {
                color: errorTheme,
              },
            ]}
          />
        </View>

        {/* Iput Choose Trip Date Start Date And End Date */}
        <Pressable
          style={[
            styles.tripInfoButton,
            borderTheme,
            {
              justifyContent: 'flex-start',
            },
          ]}
          onPress={() => {
            handleOpenModal(true);
          }}>
          <Image source={icons.calendar} style={imageTheme} />
          <Text style={textTheme}>
            {values.startDate} - {values.endDate}
          </Text>
        </Pressable>

        <Pressable
          style={[styles.tripInfoButton, borderTheme]}
          onPress={() => handleOpenModal(false)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={icons.lock} style={imageTheme} />
            <Text style={textTheme}>Trip Privacy</Text>
          </View>
          <Text style={textTheme}>
            {values.isPublic ? 'Public' : 'Private'}
          </Text>
        </Pressable>
      </View>

      <View style={{paddingHorizontal: SIZES.spacing.lg}}>
        <Button
          title="Create Trip"
          onPress={handleSubmit}
          isLoading={trips.loading}
        />
      </View>

      <BottomSheet height={700} ref={bottomSheetRef}>
        <BottomSheetHeader
          closeButton={() => bottomSheetRef?.current?.close()}
          doneButton={() => bottomSheetRef?.current?.close()}
          title={isShowModelDate ? 'Select date' : 'Privacy level'}
        />
        {isShowModelDate ? (
          <>
            <ChooseDate
              endDate={values.endDate}
              setEndDate={value => setFieldValue('endDate', value)}
              setStartDate={value => setFieldValue('startDate', value)}
              startDate={values.startDate}
            />
          </>
        ) : (
          <TripPrivacy
            isPublic={values.isPublic}
            setIspublic={value => setFieldValue('isPublic', value)}
          />
        )}
      </BottomSheet>
    </View>
  );
};

export default TripInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: SIZES.spacing.lg * 2,
  },
  inputName: {
    borderBottomWidth: 2,
    paddingHorizontal: SIZES.spacing.md,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  tripInfoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingHorizontal: SIZES.spacing.md,
    marginBottom: SIZES.spacing.sm,
    height: 60,
  },
  buttonText: {
    ...FONTS.pr2.san_francisco.light,
  },
  heading: {
    ...FONTS.h4.san_francisco.bold,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
