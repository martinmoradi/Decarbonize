// @ts-nocheck
import { useFormik } from 'formik';
import React, { useContext, useRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { AuthContext } from '../../App';
import { Box, Button, Container, Text } from '../components';
import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import { AuthNavigationProps } from '../components/Navigation';
import { config } from './api';
import Footer from './components/Footer';
const LoginSchema = Yup.object().shape({
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({ navigation }: AuthNavigationProps<'Login'>) => {
  const { dispatch } = useContext(AuthContext);

  const apiLogin = async (body: any) => {
    dispatch({
      type: 'LOGIN_ATTEMPT',
    });
    try {
      const response = await fetch(`https://decarbonize-perruches.herokuapp.com/login`, config('POST', body));
      const user = await response.json();
      
      const { data } = user;
      const token: string | null = response.headers.get('Authorization');
      const payload = {
        data,
        token,
      };
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload,
      });
    } catch (err) {
      console.log(err)
      dispatch({
        type: 'LOGIN_ERROR',
        payload: err.message,
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
          <Button variant="primary" onPress={handleSubmit} label="Log into your account" />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
