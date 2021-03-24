import React from 'react';
import { Box, Button, Container, RoundedIcon, RoundedIconButton, Text } from '../../components';
import { AuthNavigationProps } from '../../routers/NavigationTypes';

const SIZE = 80;
const PasswordChanged = ({ navigation }: AuthNavigationProps<'PasswordChanged'>) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            backgroundColor="background"
            color="secondary"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcon name="check" size={SIZE} backgroundColor="primaryLight" color="primary" />
      </Box>
      <Text variant="title1" textAlign="center" marginVertical="l">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Close this window and login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          onPress={() => navigation.navigate('Login')}
          label="Reset password"
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
