import * as Yup from 'yup';

export type SignInValues = {
  email: string;
  password: string;
};
export const initialSignInValues: SignInValues = {
  email: '',
  password: '',
};
export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

export const initialSignUpValues: SignUpValues = {
  name: '',
  email: '',
  password: '',
};
export type SignUpValues = SignInValues & {
  name: string;
};
export const signUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

export const initialCreateTripValues: createTripValues = {
  name: '',
  startDate: '',
  endDate: '',
  isPublic: true,
};
export type createTripValues = {
  name: string;
  startDate: string;
  endDate: string;
  isPublic: boolean;
};
export const createTripSchema = Yup.object().shape({
  name: Yup.string().required(),
  startDate: Yup.string().required(),
  endDate: Yup.string().required(),
  isPublic: Yup.boolean().required(),
});
