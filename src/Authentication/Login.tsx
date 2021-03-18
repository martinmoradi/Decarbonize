import { useFormik } from 'formik';
import React, { useContext, useRef } from 'react';
import { ActivityIndicator, TextInput as RNTextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { Box, Button, Container, Text } from '../components';
import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import { AuthNavigationProps } from '../components/Navigation';
import { config, userPropsType } from './api';
import { AuthContext } from './authContext';
import { authActionType } from './authContext/authTypes';
import Footer from './components/Footer';

const LoginSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const { state, dispatch } = useContext(AuthContext);

  const apiLogin = async (body: userPropsType) => {
    console.log('START_STATE = ', state);
    dispatch({
      type: authActionType.LOGIN_ATTEMPT,
    });
    const response = await fetch(
      `https://decarbonize-perruches.herokuapp.com/login`,
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
      dispatch({
        type: authActionType.LOGIN_SUCCESS,
        payload,
      });
    } else {
      dispatch({
        type: authActionType.LOGIN_ERROR,
        payload: error.message,
      });
    }
    console.log('FINAL_STATE = ', state);
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
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: () => {
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{ name: 'Home' }],
      //   })
      // ),
      apiLogin(values);
    },
  });

  const password = useRef<RNTextInput>(null);
  const footer = (
    <Footer
      title="Don’t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

const AuthScreen = ({ navigation }: AuthNavigationProps<'Auth'>) => {

  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome back !
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account
      </Text>
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
          onSubmitEditing={() => handleSubmit()}
          secureTextEntry
        />
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
          <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
            <Text variant="button" color="primary">
              Forgot password
            </Text>
          </BorderlessButton>
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
  );
};

export default Login;
