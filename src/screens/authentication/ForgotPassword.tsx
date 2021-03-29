import { useFormik } from 'formik';
import React from 'react';
import { Linking } from 'react-native';
import * as Yup from 'yup';
import { Box, Button, Container, Text } from '../../components';
import TextInput from '../../components/TextInput';
import { AuthNavigationProps } from '../../routers/NavigationTypes';
import { Footer } from './components';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({ navigation }: AuthNavigationProps<'ForgotPassword'>) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: { email: '' },
    onSubmit: () => {
      navigation.navigate('PasswordChanged');
    },
  });
  const footer = (
    <Footer
      title="Don’t work?"
      action="Try another way"
      onPress={() => Linking.openURL('mailto:help@support.com')}
    />
  );
  return (
    <Container pattern={0} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" onPress={handleSubmit} label="Reset password" />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
