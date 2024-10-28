import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useEffect} from 'react';
import colors from '../../constant/colors';
import {useTheme} from '../../context/ThemeContext';
import HeadingOne from '../../components/common/heading/HeadingOne';
import SIZES from '../../constant/sizes';
import images from '../../constant/images';
import SignInForm from '../../components/signin/SignInForm';
import FONTS from '../../constant/fonts';
import Button from '../../components/common/Button';
import SignUpForm from '../../components/signin/SignUpForm';
import {ROUTE} from '../../types/enums/navigation';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {yupResolver} from '@hookform/resolvers/yup';
import {useFormik} from 'formik';
import {
  initialSignUpValues,
  signUpSchema,
  SignUpValues,
} from '../../helpers/formValidation';
import Input from '../../components/common/Input';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {signUpUser} from '../../api/services/supabaseActions';
import Toast from 'react-native-toast-message';

const SignUp: FC<NavigationScreenProps> = ({navigation}) => {
  const {setColor, isDarkTheme} = useTheme();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik({
      initialValues: initialSignUpValues,
      validationSchema: signUpSchema,
      onSubmit: (values: SignUpValues) => {
        try {
          dispatch(signUpUser(values));
        } catch (error) {
          console.log(error);

          Toast.show({text1: 'sddsd', type: 'success', position: 'top'});
        }
      },
    });

  useEffect(() => {
    if (auth.status === 'failed') {
      console.log(auth.error);
      Toast.show({
        text1: auth.error!,
        type: 'error',
        position: 'top',
        visibilityTime: 3000,
        text1Style: {...FONTS.pr2.san_francisco.light},
      });
    } else if (auth.status === 'succeeded') {
      navigation.navigate(ROUTE.SIGNIN);
    }
  }, [auth.status]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: setColor(
          colors.airline_deep_dark.light,
          colors.airline_white.light,
        ),
      }}>
      <View style={styles.signinContainer}>
        <View>
          <HeadingOne title="Sign Up" />
          <Image
            source={isDarkTheme ? images.image_7 : images.image_2}
            style={styles.signinImage}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: SIZES.spacing.xl}}>
            <Input
              label="Name"
              name="name"
              isError={errors.name && touched.name ? true : false}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            <Input
              label="E-mail"
              name="email"
              isError={errors.email && touched.email ? true : false}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Input
              label="Password"
              name="pasword"
              isError={errors.password && touched.password ? true : false}
              onChangeText={handleChange('password')}
              value={values.password}
              secureTextEntry
            />
            <Pressable onPress={() => navigation.navigate(ROUTE.SIGNIN)}>
              <Text
                style={[
                  styles.signupQuetion,
                  {
                    color: setColor(
                      colors.airline_gray.gray100.light,
                      colors.airline_dark.light,
                    ),
                  },
                ]}>
                Already have an account? Sign in
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={{paddingHorizontal: SIZES.spacing.xl}}>
          <Button title="Sign in" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    paddingTop: SIZES.height / 13,
    paddingBottom: 48,
    justifyContent: 'space-between',
  },
  signinImage: {
    width: 393,
    height: 212,
    marginBottom: SIZES.spacing.xl,
    marginTop: 10,
  },
  signupQuetion: {
    textAlign: 'center',
    ...FONTS.pr2.san_francisco.light,
    marginTop: SIZES.spacing.xs * 10,
    marginBottom: 50,
  },
});
