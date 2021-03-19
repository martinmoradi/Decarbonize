import { useFormik } from 'formik';
import React, { useContext, useRef } from 'react';
import { ActivityIndicator, Dimensions, TextInput as RNTextInput } from 'react-native';
import * as Yup from 'yup';
import { Box, Button, Container, Text } from '../components';
import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import { AuthNavigationProps } from '../components/Navigation';
import { config, configQuiz } from './api';
import { AuthContext } from './authContext';
import { authActionType, userPropsType } from './authContext/authTypes';
import Footer from './components/Footer';
import OnboardingContext from './onboardingContext/OnboardingContext';


const SignUpSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = ({ navigation }: AuthNavigationProps<'SignUp'>) => {
  const { height } = Dimensions.get('window');
  const { onboardingData } = useContext(OnboardingContext);
  const { state, dispatch } = useContext(AuthContext);
  const apiSignup = async (body: userPropsType) => {
    dispatch({
      type: authActionType.SIGNUP_ATTEMPT,
    });
    const response = await fetch(
      `https://decarbonize-perruches.herokuapp.com/signup`,
      config('POST', body)
    );
    const { data, error } = await response.json();
    if (response.ok) {
      const token: string | null = response.headers.get('Authorization');
      const user = { ...data };
      const payload = {
        user,
        token,
        remember: body.remember,
      };
      console.log("coucou");
      dispatch({
        type: authActionType.SIGNUP_SUCCESS,
        payload,
      });
      console.log(" state call api", state)
      console.log(" data", onboardingData)

      const responseApi = await fetch(`https://decarbonize-perruches.herokuapp.com/api/v1/fixed_emissions`, configQuiz('POST', onboardingData  , state.token));
    const {error } = await responseApi.json();
    if (responseApi.ok) {
        console.log("bien envoyé à api");
      } else {
        console.log(error.message)
      }
    } else {
      dispatch({
        type: authActionType.SIGNUP_ERROR,
        payload: error.message,
      });
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      remember: true,
    },
    onSubmit: () => {
      apiSignup(values);
    },
  });
  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Box style={{ maxHeight: height }}>
      <Container pattern={0} {...{ footer }}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let’s us know what your email and your password
        </Text>
        {state.errorMessage && (
          <Text
            variant="body"
            style={{ fontFamily: 'Avenir-Semibold', color: '#FF0058' }}
            textAlign="center"
            marginBottom="l"
          >
            {state.errorMessage}
          </Text>
        )}
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
              secureTextEntry
            />
          </Box>

          <Box marginBottom="m">
            <TextInput
              ref={passwordConfirmation}
              icon="lock"
              placeholder="Confirm your Password"
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical="s"
          >
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            {state.isLoading ? (
              <Button variant="primary" onPress={handleSubmit} label={<ActivityIndicator />} />
            ) : (
              <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
