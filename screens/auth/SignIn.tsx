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
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {ROUTE} from '../../types/enums/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import Input from '../../components/common/Input';
import {useFormik} from 'formik';
import {
  initialSignInValues,
  signInSchema,
  SignInValues,
} from '../../helpers/formValidation';
import {signInUser} from '../../api/services/supabaseActions';
import Toast from 'react-native-toast-message';

const SignIn: FC<NavigationScreenProps> = ({navigation}) => {
  const {setColor, isDarkTheme} = useTheme();
  const auth = useSelector((state: RootState) => state.auth);
  console.log('🚀 ~ auth:', auth);
  const dispatch = useDispatch();

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik({
      initialValues: initialSignInValues,
      validationSchema: signInSchema,
      onSubmit: (values: SignInValues) => {
        try {
          dispatch(signInUser(values));
        } catch (error) {}
      },
    });

  useEffect(() => {
    if (auth.status === 'failed') {
      Toast.show({
        text1: auth.error!,
        type: 'error',
        position: 'top',
        visibilityTime: 3000,
        text1Style: {...FONTS.pr2.san_francisco.light},
      });
    } else if (auth.status === 'succeeded' && auth.isAuthenticated) {
      navigation.navigate(ROUTE.HOME);
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
          <HeadingOne title="Sign In" />
          <Image
            source={isDarkTheme ? images.image_6 : images.image_1}
            style={styles.signinImage}
            resizeMode="contain"
          />
          <View style={{paddingHorizontal: SIZES.spacing.xl}}>
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
            <Pressable onPress={() => navigation.navigate(ROUTE.SIGNUP)}>
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
                You don´t have an account? Sign up
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

export default SignIn;

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    paddingTop: SIZES.height / 13,
    paddingBottom: 48,
    justifyContent: 'space-between',
  },
  signinImage: {
    width: SIZES.width,
    maxWidth: 393,
    height: 308,
    marginTop: -50,
    marginBottom: SIZES.spacing.xl,
  },
  signupQuetion: {
    textAlign: 'center',
    ...FONTS.pr2.san_francisco.light,
    marginTop: SIZES.spacing.xs * 10,
  },
});
